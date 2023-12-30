import type { TaskType } from '@/types'
import { getDateFormat, isBefore, isBetween, isSame, isSameOrBefore, isUpcoming } from '@/utils/dates'

function filterOutCompletedTasks(tasks: TaskType[]) {
  return tasks.filter((t) => !t.completed && t.status !== '-')
}

const dvTasksUtils = {
  getOverdueTasks: function (tasks: TaskType[], onDate: string) {
    const { format, period } = getDateFormat(onDate)
    return filterOutCompletedTasks(tasks).filter((t) => {
      return isBefore({ date: t.due, format, period, onDate })
    })
  },

  getScheduledTasks: function (tasks: TaskType[], onDate: string) {
    const { format, period } = getDateFormat(onDate)
    return filterOutCompletedTasks(tasks).filter((t) => {
      return isSame({ date: t.scheduled, format, period, onDate })
    })
  },

  getDueTasks: function (tasks: TaskType[], onDate: string) {
    const { format, period } = getDateFormat(onDate)
    return filterOutCompletedTasks(tasks).filter((t) => {
      return isSame({ date: t.due, format, period, onDate })
    })
  },

  getOngoingTasks: function (tasks: TaskType[], onDate: string) {
    const { format, period } = getDateFormat(onDate)
    return filterOutCompletedTasks(tasks).filter((t) => {
      return isSameOrBefore({ date: t.start, format, period, onDate })
    })
  },

  getCompletedTasksWithCompletionDate: function (tasks: TaskType[]) {
    return tasks.filter((t) => t.completed && t.completion)
  },

  getCompletedTasks: function (tasks: TaskType[], onDate: string) {
    const { format, period } = getDateFormat(onDate)
    return tasks.filter((t) => {
      return isSame({ date: t.completion, format, period, onDate })
    })
  },

  getAllCompletedTasks: function (tasks: TaskType[]) {
    return tasks.filter((t) => t.completed)
  },

  getUpcomingTasks: function (tasks: TaskType[], onDate: string) {
    const { format, period } = getDateFormat(onDate)
    return filterOutCompletedTasks(tasks).filter((t) => {
      return isUpcoming({ date: t.due, format, period, onDate })
    })
  },

  getRemainingTasks: function (tasks: TaskType[], onDate: string) {
    const { format, period } = getDateFormat(onDate)
    return filterOutCompletedTasks(tasks).filter((t) => {
      return isBetween({ date: t.due, format, period, onDate })
    })
  },

  getUnplannedTasks: function (tasks: TaskType[], onDate: string) {
    return (
      filterOutCompletedTasks(tasks)
        // show task that does not have a due date
        .filter((t) => {
          return !t.due || !t.scheduled
        })
    )
  },
}

export default dvTasksUtils
