import type { TFile, TFolder } from 'obsidian'
import { moment } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'

const newWeekly = async (app: AppType) => {
  const thisWeekDate = moment().format(CONSTANTS.DEFAULT_WEEK_DATE_FORMAT)
  const lastWeekDate = moment().subtract(1, 'weeks').format(CONSTANTS.DEFAULT_WEEK_DATE_FORMAT)

  // mapping them to an object
  const lastWeeks = {
    'this week': thisWeekDate,
    'last week': lastWeekDate,
  }

  // checking if the notes exist
  const thisWeekNoteExist = await app.vault.exists(`${CONSTANTS.WEEKLY_FOLDER}/${thisWeekDate}.md`)
  const lastWeekNoteExist = await app.vault.exists(`${CONSTANTS.WEEKLY_FOLDER}/${lastWeekDate}.md`)

  // get the weekly note template
  const weeklyNoteTemplate = await app.vault.getAbstractFileByPath(CONSTANTS.TEMPLATES.WEEKLY)
  const weeklyFolder = await app.vault.getAbstractFileByPath(CONSTANTS.WEEKLY_FOLDER)!

  let choosenDate: string | undefined

  // this week condition
  // we can create a weekly review only if we are in the last days of the week (Saturday, Sunday)
  const thisWeekCreationCondition = ['Saturday', 'Sunday'].includes(moment().format('dddd'))

  // if last week note doesn't exist, suggest the user to choose which week to create
  if (!lastWeekNoteExist) {
    // let the user choose which week to create
    const choices = [
      !thisWeekNoteExist && thisWeekCreationCondition && thisWeekDate,
      !lastWeekNoteExist && lastWeekDate,
    ].filter(Boolean) as string[]

    choosenDate = await app.utils.plugins.quickAddPlugin.suggester(
      //@ts-ignore
      (date) => Object.keys(lastWeeks).find((key) => lastWeeks[key] === date),
      choices,
    )
  } else {
    if (thisWeekNoteExist || !thisWeekCreationCondition) {
      toast(`❌ Weekly review can be created only on Saturday or Sunday (or following week).`)
      return
    }

    choosenDate = thisWeekDate
  }

  if (!choosenDate) {
    throw new Error('Weekly is required')
  }

  // create the note from the template
  await app.utils.plugins.templaterPlugin.create_new_note_from_template(
    weeklyNoteTemplate as TFile,
    weeklyFolder as TFolder,
    `${choosenDate}.md`,
  )

  toast(`✅ Weekly review created.`)
}

export default newWeekly
