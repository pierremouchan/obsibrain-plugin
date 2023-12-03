import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'
import type { TFile } from 'obsidian'

const newTask = async (app: AppType) => {
  const { quickAddPlugin, utilsPlugin } = app.utils.plugins
  const files = app.vault.getMarkdownFiles()
  const projects = app.utils.files.filterByFolder(files, CONSTANTS.PROJECTS_FOLDER)
  const areas = app.utils.files.filterByFolder(files, CONSTANTS.AREAS_FOLDER)
  const resources = app.utils.files.filterByFolder(files, CONSTANTS.RESOURCES_FOLDER)

  // Get someday-maybe file
  const somedayFile = (await app.vault.getAbstractFileByPath(`${CONSTANTS.RESOURCES_FOLDER}/Someday-Maybe.md`)) as TFile

  // Prompt the user for a todo title
  const todoTitle = await quickAddPlugin.inputPrompt('Title', 'Finish project, write blog post, etc.')

  if (!todoTitle) {
    throw new Error('Title is required')
  }

  // Ask the user to pick a file to store the task
  const pickedFile = (await quickAddPlugin.suggester((f: any) => app.utils.files.getFullName(f) as any, [
    ...projects,
    ...areas,
    ...resources,
  ] as any)) as unknown as TFile

  let dueDate: string | undefined
  let scheduledDate: string | undefined
  let startDate: string | undefined

  if (pickedFile !== somedayFile) {
    dueDate = await quickAddPlugin.inputPrompt('Due date', 'Tomorrow, in two days, next week, etc.')
    scheduledDate = await quickAddPlugin.inputPrompt('Scheduled date', 'Today, tomorrow, in two days, etc.', dueDate)
    startDate = await quickAddPlugin.inputPrompt('Start date', 'Today, tomorrow, in two days, etc.', scheduledDate)
  }

  // Define the storing file and append the task with dates
  let newTodo = ''

  newTodo += `- [ ] ${todoTitle}`

  if (dueDate) {
    const parsedDueDate = utilsPlugin.parseDate(dueDate.toLowerCase())
    newTodo += ` [due::${parsedDueDate.formatted}]`
  }

  if (startDate) {
    const parsedStartDate = utilsPlugin.parseDate(startDate.toLowerCase())
    newTodo += ` [start::${parsedStartDate.formatted}]`
  }

  if (scheduledDate) {
    const parsedScheduledDate = utilsPlugin.parseDate(scheduledDate.toLowerCase())
    newTodo += ` [scheduled::${parsedScheduledDate.formatted}]`
  }

  // Append the task to either picked file or active file content
  let content: string
  let newContent: string

  try {
    // Attempt to read the content of the picked file.
    content = await app.vault.read(pickedFile)

    // Determine where to insert the new todo based on whether there is an existing callout.
    if (CONSTANTS.TODO_CALLOUT_REGEX.test(content)) {
      newContent = content.replace(CONSTANTS.TODO_CALLOUT_REGEX, (match) => `${match}\n${newTodo}`)
    } else {
      newContent = `${content}\n${newTodo}`
    }

    // Modify the picked file with the new content including the added task.
    await app.vault.modify(pickedFile, newContent)

    // Notify success only after both reading and modifying are done without errors.
    toast(`✅ Task added.`)
  } catch (err) {
    // If an error occurred at any point in reading or modifying, log it here.
    console.error(`Failed to process ${pickedFile.path}:`, err)
  }
}

export default newTask
