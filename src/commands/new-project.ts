import type { TFile, TFolder } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'

const newProject = async (app: AppType) => {
  const { quickAddPlugin, templaterPlugin } = app.utils.plugins

  // Ask the user for the project name
  const projectName = await quickAddPlugin.inputPrompt('Project name', 'Write a book, Learn to code, etc.')

  if (!projectName) {
    throw new Error('Project name is required')
  }

  // Check if the note already exists
  const projectNoteExist = await app.vault.exists(`${CONSTANTS.PROJECTS_FOLDER}/${projectName}.md`)

  if (projectNoteExist) {
    toast(`❌ Project already exists.`)
    return
  }

  // Get the project folder and template
  const projectFolder = (await app.vault.getAbstractFileByPath(CONSTANTS.PROJECTS_FOLDER)) as TFolder

  if (!projectFolder) {
    throw new Error('The specified projects folder does not exist')
  }

  const projectNoteTemplate = (await app.vault.getAbstractFileByPath(CONSTANTS.TEMPLATES.PROJECT)) as TFile

  if (!projectNoteTemplate) {
    throw new Error('The specified template file does not exist')
  }

  // Create the note from the template
  await templaterPlugin.create_new_note_from_template(projectNoteTemplate, projectFolder, `${projectName}.md`)

  toast(`✅ Project created.`)
}

export default newProject
