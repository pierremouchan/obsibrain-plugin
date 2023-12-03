import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'
import type { TFile, TFolder } from 'obsidian'
import { moment } from 'obsidian'

const newYearly = async (app: AppType) => {
  const thisYearDate = moment().format(CONSTANTS.DEFAULT_YEAR_DATE_FORMAT)

  // checking if the note exists
  const thisYearNoteExist = await app.vault.exists(`${CONSTANTS.YEARLY_FOLDER}/${thisYearDate}.md`)

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
    const startOfNextYear = today.clone().startOf('year').add(1, 'years')

    // Calculate difference in days between today and end/start of years
    const diffToEndOfYearDays = endOfYear.diff(today, 'days') + 1 // add one because diff might return -1 on same day
    const diffToStartOfNextYearDays = startOfNextYear.diff(today, 'days')

    // Check if today's date is within last few days of this year or first few days of next year
    return (
      (diffToEndOfYearDays >= -3 && diffToEndOfYearDays <= 0) ||
      (diffToStartOfNextYearDays >= -3 && diffToStartOfNextYearDays <= 0)
    )
  }
  const thisYearCreationCondition = isLastDaysOrFirstDaysOfYear()

  if (!thisYearNoteExist || !thisYearCreationCondition) {
    chosenDate = thisYearDate
  } else {
    toast(`❌ This year's note already exists.`)
    return
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
