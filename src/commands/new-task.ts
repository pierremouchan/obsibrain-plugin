import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'
import type { TFile } from 'obsidian'
import { filterByFolder, getFullName } from '@/utils/files'
import { parseDate } from '@/utils/dates'

const newTask = async (app: AppType) => {
  const { quickAddPlugin } = app.utils.plugins
  const files = app.vault.getMarkdownFiles()
  const projects = filterByFolder(files, CONSTANTS.PROJECTS_FOLDER)
  const areas = filterByFolder(files, CONSTANTS.AREAS_FOLDER)
  const resources = filterByFolder(files, CONSTANTS.RESOURCES_FOLDER)

  // Get someday-maybe file
  const somedayFile = (await app.vault.getAbstractFileByPath(`${CONSTANTS.RESOURCES_FOLDER}/Someday-Maybe.md`)) as TFile

  // Prompt the user for a todo title
  const todoTitle = await quickAddPlugin.inputPrompt('Title', 'Finish project, write blog post, etc.')

  if (!todoTitle) {
    throw new Error('Title is required')
  }

  // Ask the user to pick a file to store the task
  const pickedFile = (await quickAddPlugin.suggester((f: any) => getFullName(f, app) as any, [
    ...projects,
    ...areas,
    ...resources,
  ] as any)) as unknown as TFile

  let dueDate: string | undefined
  let scheduledDate: string | undefined
  let startDate: string | undefined

  // Define the storing file and append the task with dates
  let newTodo = ''

  newTodo += `- [ ] ${todoTitle}`

  if (pickedFile !== somedayFile) {
    dueDate = await quickAddPlugin.inputPrompt('Due date', 'Tomorrow, in two days, next week, etc.')
    if (dueDate) {
      const parsedDueDate = parseDate(dueDate.toLowerCase())
      if (!parsedDueDate.date) {
        toast(`❌ Due date is invalid`)
        throw new Error('Due date is invalid')
      }
      newTodo += ` [due::${parsedDueDate.formatted}]`
    }

    scheduledDate = await quickAddPlugin.inputPrompt('Scheduled date', 'Today, tomorrow, in two days, etc.', dueDate)
    if (scheduledDate) {
      const parsedScheduledDate = parseDate(scheduledDate.toLowerCase())
      if (!parsedScheduledDate.date) {
        toast(`❌ Scheduled date is invalid`)
        throw new Error('Scheduled date is invalid')
      }
      newTodo += ` [scheduled::${parsedScheduledDate.formatted}]`
    }

    startDate = await quickAddPlugin.inputPrompt('Start date', 'Today, tomorrow, in two days, etc.', scheduledDate)
    if (startDate) {
      const parsedStartDate = parseDate(startDate.toLowerCase())
      if (!parsedStartDate.date) {
        toast(`❌ Start date is invalid`)
        throw new Error('Start date is invalid')
      }
      newTodo += ` [start::${parsedStartDate.formatted}]`
    }
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
