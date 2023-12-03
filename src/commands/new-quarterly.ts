import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'
import type { TFile, TFolder } from 'obsidian'
import { moment } from 'obsidian'

const newQuarterly = async (app: AppType) => {
  const thisQuarterDate = moment().format(CONSTANTS.DEFAULT_QUARTER_DATE_FORMAT)
  const lastQuarterDate = moment().subtract(1, 'quarters').format(CONSTANTS.DEFAULT_QUARTER_DATE_FORMAT)

  // mapping them to an object
  const lastQuarters = {
    'This quarter': thisQuarterDate,
    'Last quarter': lastQuarterDate,
  }

  // checking if the notes exist
  const thisQuarterNoteExist = await app.vault.exists(`${CONSTANTS.QUARTERLY_FOLDER}/${thisQuarterDate}.md`)
  const lastQuarterNoteExist = await app.vault.exists(`${CONSTANTS.QUARTERLY_FOLDER}/${lastQuarterDate}.md`)

  // get the quarterly note template
  const quarterlyNoteTemplate = await app.vault.getAbstractFileByPath(CONSTANTS.TEMPLATES.QUARTERLY)
  const quarterlyFolder = await app.vault.getAbstractFileByPath(CONSTANTS.QUARTERLY_FOLDER)!

  let chosenDate: string | undefined

  // Check if we are in the last days of the quarter (last 3-4 days)
  function isLastDaysOfQuarter() {
    // Get today's date
    const today = moment()

    // Find the end of the current quarter
    const endOfQuarter = today.clone().endOf('quarter')

    // Calculate difference in days between today and end of quarter
    const diffDays = endOfQuarter.diff(today, 'days') + 1 // add one because diff might return -1 on same day

    // Check if today's date is within last few days of the quarter
    return diffDays >= 1 && diffDays <= 4
  }

  const thisQuarterCreationCondition = isLastDaysOfQuarter()

  if (!lastQuarterNoteExist || !thisQuarterCreationCondition) {
    const choices: string[] = []
    if (!thisQuarterNoteExist && thisQuarterCreationCondition) {
      choices.push(thisQuarterDate)
    }
    if (!lastQuarterNoteExist) {
      choices.push(lastQuarterDate)
    }

    chosenDate = await app.utils.plugins.quickAddPlugin.suggester(
      //@ts-ignore
      (date: string) => Object.keys(lastQuarters).find((key) => lastQuarters[key] === date),
      choices,
    )
  } else {
    if (thisQuarterNoteExist && !thisQuarterCreationCondition) {
      toast(`❌ Quarterly review can be created only on last few days of the quarter.`)
      return
    }

    chosenDate = thisQuarterDate
  }

  if (!chosenDate) {
    throw new Error('Quarterly is required')
  }

  // create the note from the template
  await app.utils.plugins.templaterPlugin.create_new_note_from_template(
    quarterlyNoteTemplate as TFile,
    quarterlyFolder as TFolder,
    `${chosenDate}.md`,
  )

  toast(`✅ Quarterly review created.`)
}

export default newQuarterly
