import type { TFile, TFolder } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'

const newResource = async (app: AppType) => {
  const { quickAddPlugin, templaterPlugin } = app.utils.plugins

  // Ask the user for the resource name
  const resourceName = await quickAddPlugin.inputPrompt(
    'Resource name',
    'Mastering Obsidian, How to cook Carbonara, etc.',
  )

  if (!resourceName) {
    throw new Error('Resource name is required')
  }

  // Check if the note already exists
  const resourceNoteExist = await app.vault.exists(`${CONSTANTS.RESOURCES_FOLDER}/${resourceName}.md`)

  if (resourceNoteExist) {
    toast(`❌ Resource already exists.`)
    return
  }

  // Get the resource folder and template
  const resourceFolder = (await app.vault.getAbstractFileByPath(CONSTANTS.RESOURCES_FOLDER)) as TFolder

  if (!resourceFolder) {
    throw new Error('The specified resources folder does not exist')
  }

  const resourceNoteTemplate = (await app.vault.getAbstractFileByPath(CONSTANTS.TEMPLATES.RESOURCE)) as TFile

  if (!resourceNoteTemplate) {
    throw new Error('The specified template file does not exist')
  }

  // Create the note from the template
  await templaterPlugin.create_new_note_from_template(resourceNoteTemplate, resourceFolder, `${resourceName}.md`)

  toast(`✅ Resource created.`)
}

export default newResource
