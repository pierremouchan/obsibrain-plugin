import type { TFile, TFolder } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'

const newArea = async (app: AppType) => {
  const { quickAddPlugin, templaterPlugin } = app.utils.plugins

  // Ask the user for the area name
  const areaName = await quickAddPlugin.inputPrompt('Area name', 'Health, Finance, etc.')

  if (!areaName) {
    throw new Error('Area name is required')
  }

  // Check if the note already exists
  const areaNoteExist = await app.vault.exists(`${CONSTANTS.AREAS_FOLDER}/${areaName}.md`)

  if (areaNoteExist) {
    toast(`❌ Area already exists.`)
    return
  }

  // Get the area folder and template
  const areaFolder = (await app.vault.getAbstractFileByPath(CONSTANTS.AREAS_FOLDER)) as TFolder

  if (!areaFolder) {
    throw new Error('The specified area folder does not exist')
  }

  const areaNoteTemplate = (await app.vault.getAbstractFileByPath(CONSTANTS.TEMPLATES.AREA)) as TFile

  if (!areaNoteTemplate) {
    throw new Error('The specified template file does not exist')
  }

  // Create the note from the template
  await templaterPlugin.create_new_note_from_template(areaNoteTemplate, areaFolder, `${areaName}.md`)

  toast(`✅ Area created.`)
}

export default newArea
