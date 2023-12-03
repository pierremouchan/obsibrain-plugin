import type { TFile, TFolder } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'
import { moment } from 'obsidian'

const openDaily = async (app: AppType) => {
  const { templaterPlugin } = app.utils.plugins

  // Getting today's date
  const todayDate = moment().format(CONSTANTS.DEFAULT_DATE_FORMAT)

  // Check if the note already exists
  const todayNotePath = `${CONSTANTS.DAILY_FOLDER}/${todayDate}.md`
  const todayNoteExist = await app.vault.exists(todayNotePath)

  if (todayNoteExist) {
    // Open existing daily note
    const todayNote: TFile = (await app.vault.getAbstractFileByPath(todayNotePath)) as TFile
    await app.workspace.getLeaf('tab').openFile(todayNote)
    return
  }

  // Get the daily note template and folder
  const dailyNoteTemplate: TFile = (await app.vault.getAbstractFileByPath(CONSTANTS.TEMPLATES.DAILY)) as TFile

  if (!dailyNoteTemplate) {
    throw new Error('The specified daily note template does not exist')
  }

  const dailyFolder: TFolder = (await app.vault.getAbstractFileByPath(CONSTANTS.DAILY_FOLDER)) as TFolder

  if (!dailyFolder) {
    throw new Error('The specified daily notes folder does not exist')
  }

  // Create the note from the template
  await templaterPlugin.create_new_note_from_template(dailyNoteTemplate, dailyFolder, `${todayDate}.md`)

  toast(`✅ Today's note created.`)
}

export default openDaily
