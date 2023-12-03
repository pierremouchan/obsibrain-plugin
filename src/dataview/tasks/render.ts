import type { TaskType } from '@/types'
import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'
import dvTasksUtils from './utils'
import dvTasksView from './view'
import { moment } from 'obsidian'
import { DATES_FORMATS, getDateFormat } from '@/utils/dates'
import { CONSTANTS } from '@/utils/constants'

type DvTasksRenderArgsType = {
  dv: DataviewInlineApi
  type:
    | 'overdue'
    | 'scheduled'
    | 'ongoing'
    | 'completed'
    | 'all-completed'
    | 'due'
    | 'upcoming'
    | 'remaining'
    | 'unplanned'
  scope: 'projects' | 'all'
  onDate: string
  forceFormat?: keyof typeof DATES_FORMATS // CONSTANTS DATE_FORMATS
}

const dvTasksRender = ({ dv, type, scope, onDate, forceFormat }: DvTasksRenderArgsType) => {
  const currentPage = dv.current()!
  const tasks = currentPage.file.tasks.array() as TaskType[]
  const allTasks = dv.pages().file.tasks.array() as TaskType[]

  let onDateFormatted = onDate ? onDate.trim() : moment().format(CONSTANTS.DEFAULT_DATE_FORMAT)

  // if we force the date in another format, we need to convert it before
  // e.g. we have a date in YYYY-MM-DD format, but we want to force it to be in quarterly format YYYY-[Q]Q
  if (forceFormat) {
    const { format } = getDateFormat(onDateFormatted)
    onDateFormatted = moment(onDateFormatted, format).format(DATES_FORMATS[forceFormat])
  }

  const tasksUsed = scope === 'all' ? allTasks : tasks

  let renderedTasks: TaskType[] = []

  switch (type) {
    case 'overdue':
      renderedTasks = dvTasksUtils.getOverdueTasks(tasksUsed, onDateFormatted)
      break

    case 'scheduled':
      renderedTasks = dvTasksUtils.getScheduledTasks(tasksUsed, onDateFormatted)
      break

    case 'ongoing':
      renderedTasks = dvTasksUtils.getOngoingTasks(tasksUsed, onDateFormatted)
      break

    case 'completed':
      renderedTasks = dvTasksUtils.getCompletedTasks(tasksUsed, onDateFormatted)
      break

    case 'all-completed':
      renderedTasks = dvTasksUtils.getAllCompletedTasks(tasksUsed)
      break

    case 'due':
      renderedTasks = dvTasksUtils.getDueTasks(tasksUsed, onDateFormatted)
      break

    case 'upcoming':
      renderedTasks = dvTasksUtils.getUpcomingTasks(tasksUsed, onDateFormatted)
      break

    case 'remaining':
      renderedTasks = dvTasksUtils.getRemainingTasks(tasksUsed, onDateFormatted) // on date or all until today
      break

    case 'unplanned':
      renderedTasks = dvTasksUtils.getUnplannedTasks(tasksUsed, onDateFormatted)
      break

    default:
      throw new Error(`Unknown type: ${type}`)
  }

  return dvTasksView(dv, renderedTasks)
}

export default dvTasksRender
