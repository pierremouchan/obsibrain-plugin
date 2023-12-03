import type { TFile, TFolder } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'

const newGoal = async (app: AppType) => {
  const { quickAddPlugin, templaterPlugin } = app.utils.plugins

  // Ask the user for the goal name
  const goalName = await quickAddPlugin.inputPrompt(
    'Goal name',
    'Complete a 12-week strength training, read 12 books this year, etc.',
  )

  if (!goalName) {
    throw new Error('Goal name is required')
  }

  // Check if the note already exists
  const goalNoteExist = await app.vault.exists(`${CONSTANTS.GOALS_FOLDER}/${goalName}.md`)

  if (goalNoteExist) {
    toast(`❌ Goal already exists.`)
    return
  }

  // Get the goal folder and template
  const goalFolder = (await app.vault.getAbstractFileByPath(CONSTANTS.GOALS_FOLDER)) as TFolder

  if (!goalFolder) {
    throw new Error('The specified goals folder does not exist')
  }

  const goalNoteTemplate = (await app.vault.getAbstractFileByPath(CONSTANTS.TEMPLATES.GOAL)) as TFile

  if (!goalNoteTemplate) {
    throw new Error('The specified template file does not exist')
  }

  // Create the note from the template
  await templaterPlugin.create_new_note_from_template(goalNoteTemplate, goalFolder, `${goalName}.md`)

  toast(`✅ Goal created.`)
}

export default newGoal
