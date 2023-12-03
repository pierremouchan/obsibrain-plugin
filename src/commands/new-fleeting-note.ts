import type { TFile, TFolder } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'

const newFleetingNote = async (app: AppType) => {
  const { quickAddPlugin, templaterPlugin } = app.utils.plugins

  // Get the fleeting note template
  const fleetingNoteTemplate: TFile = (await app.vault.getAbstractFileByPath(
    CONSTANTS.TEMPLATES.FLEETING_NOTE,
  )) as TFile

  if (!fleetingNoteTemplate) {
    throw new Error('The specified fleeting note template does not exist')
  }

  // Ask for the note title
  const noteTitle = await quickAddPlugin.inputPrompt('Title', '10 things I learned, 5 ways to do X, etc.')

  if (!noteTitle) {
    throw new Error('Title is required')
  }

  // Ask for note content
  const noteContent: string | null =
    (await quickAddPlugin.wideInputPrompt('Content (optional)', 'Write the content of your note here...')) ?? ''

  // Get the notes folder
  const notesFolder: TFolder = (await app.vault.getAbstractFileByPath(CONSTANTS.NOTES_FOLDER)) as TFolder

  if (!notesFolder) {
    throw new Error('The specified notes folder does not exist')
  }

  // Create the note from the template
  const newNote = await templaterPlugin.create_new_note_from_template(
    fleetingNoteTemplate,
    notesFolder,
    `${noteTitle}.md`,
  )

  if (!newNote) {
    throw new Error('The note could not be created')
  }

  // Append the content to the new note
  await app.vault.append(newNote, `\n${noteContent}`)

  toast(`✅ Note created.`)
}

export default newFleetingNote
