import type { TFile, TFolder } from 'obsidian'
import { moment } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'

const newMonthly = async (app: AppType) => {
  const thisMonthDate = moment().format(CONSTANTS.DEFAULT_MONTH_DATE_FORMAT)
  const lastMonthDate = moment().subtract(1, 'months').format(CONSTANTS.DEFAULT_MONTH_DATE_FORMAT)

  // mapping them to an object
  const lastMonths = {
    'this month': thisMonthDate,
    'last month': lastMonthDate,
  }

  // checking if the notes exist
  const thisMonthNoteExist = await app.vault.exists(`${CONSTANTS.MONTHLY_FOLDER}/${thisMonthDate}.md`)
  const lastMonthNoteExist = await app.vault.exists(`${CONSTANTS.MONTHLY_FOLDER}/${lastMonthDate}.md`)

  // get the monthly note template
  const monthlyNoteTemplate = await app.vault.getAbstractFileByPath(CONSTANTS.TEMPLATES.MONTHLY)
  const monthlyFolder = await app.vault.getAbstractFileByPath(CONSTANTS.MONTHLY_FOLDER)!

  let choosenDate: string | undefined

  // this month condition
  // we can create a monthly review only if we are in the last days of the month (last 3-4 days)
  const thisMonthCreationCondition = [28, 29, 30, 31].includes(moment().date())

  // if last month note doesn't exist, suggest the user to choose which week to create
  if (!lastMonthNoteExist) {
    // let the user choose which week to create
    const choices = [
      !thisMonthNoteExist && thisMonthCreationCondition && thisMonthDate,
      !lastMonthNoteExist && lastMonthDate,
    ].filter(Boolean) as string[]

    choosenDate = await app.utils.plugins.quickAddPlugin.suggester(
      //@ts-ignore
      (date) => Object.keys(lastMonths).find((key) => lastMonths[key] === date),
      choices,
    )
  } else {
    if (thisMonthNoteExist || !thisMonthCreationCondition) {
      toast(`❌ Monthly review can be created only on last 3-4 days of the month (or following month).`)
      return
    }

    choosenDate = thisMonthDate
  }

  if (!choosenDate) {
    throw new Error('Monthly is required')
  }

  // create the note from the template
  await app.utils.plugins.templaterPlugin.create_new_note_from_template(
    monthlyNoteTemplate as TFile,
    monthlyFolder as TFolder,
    `${choosenDate}.md`,
  )

  toast(`✅ Monthly review created.`)
}

export default newMonthly
