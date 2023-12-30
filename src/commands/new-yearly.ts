import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'
import type { TFile, TFolder } from 'obsidian'
import { moment } from 'obsidian'

const newYearly = async (app: AppType) => {
  const thisYearDate = moment().format(CONSTANTS.DEFAULT_YEAR_DATE_FORMAT)
  const lastYearDate = moment().subtract(1, 'years').format(CONSTANTS.DEFAULT_YEAR_DATE_FORMAT)

  // checking if the note exists
  const thisYearNoteExist = await app.vault.adapter.exists(`${CONSTANTS.YEARLY_FOLDER}/${thisYearDate}.md`)
  const lastYearNoteExist = await app.vault.adapter.exists(`${CONSTANTS.YEARLY_FOLDER}/${lastYearDate}.md`)

  // mapping them to an object
  const lastYears = {
    'This year': thisYearDate,
    'Last year': lastYearDate,
  }

  // get the yearly note template
  const yearlyNoteTemplate = await app.vault.getAbstractFileByPath(CONSTANTS.TEMPLATES.YEARLY)
  const yearlyFolder = await app.vault.getAbstractFileByPath(CONSTANTS.YEARLY_FOLDER)!

  let chosenDate: string | undefined

  // Check if we are in the last days of the year or first few days of next year
  function isLastDaysOrFirstDaysOfYear() {
    // Get today's date
    const today = moment()

    // Find the end of the current year and start of next year
    const endOfYear = today.clone().endOf('year')

    // Calculate difference in days between today and end of quarter
    const diffDays = endOfYear.diff(today, 'days') + 1 // add one because diff might return -1 on same day

    // Check if today's date is within last few days of the yeark
    return diffDays >= 1 && diffDays <= 4
  }

  const thisYearCreationCondition = isLastDaysOrFirstDaysOfYear()

  if (!lastYearNoteExist || !thisYearCreationCondition) {
    const choices: string[] = []
    if (!thisYearNoteExist && thisYearCreationCondition) {
      choices.push(thisYearDate)
    }
    if (!lastYearNoteExist) {
      choices.push(lastYearDate)
    }

    if (choices.length === 0) {
      toast(
        `❌ Yearly review can be created only on last few days of the year or first few days of next year. (15 days before and after)`,
      )
      return
    }

    chosenDate = await app.utils.plugins.quickAddPlugin.suggester(
      //@ts-ignore
      (date: string) => Object.keys(lastYears).find((key) => lastYears[key] === date),
      choices,
    )
  } else {
    if (thisYearNoteExist) {
      toast(`❌ This year's note already exists.`)
      return
    }

    chosenDate = thisYearDate
  }

  if (!chosenDate) {
    throw new Error('Annual review is required')
  }

  // create the note from the template
  await app.utils.plugins.templaterPlugin.create_new_note_from_template(
    yearlyNoteTemplate as TFile,
    yearlyFolder as TFolder,
    `${chosenDate}.md`,
  )

  toast(`✅ Annual review created.`)
}

export default newYearly
