import type { GoalType } from '@/types'
import { getDateFormat, isSame } from '@/utils/dates'

function filterOutCompletedGoals(goals: GoalType[]) {
  return goals.filter((project) => {
    return !project.achieved
  })
}

const dvGoalsUtils = {
  getOngoingGoals: function (goals: GoalType[]) {
    return filterOutCompletedGoals(goals).filter((p) => {
      return p.status === 'ongoing'
    })
  },
  getDueGoals: function (goals: GoalType[], onDate: string) {
    const { format, period } = getDateFormat(onDate)
    return filterOutCompletedGoals(goals).filter((p) => {
      return isSame({ date: p.deadline, format, period, onDate })
    })
  },
  getCompletedGoals: function (goals: GoalType[], onDate: string) {
    const { format, period } = getDateFormat(onDate)
    return goals.filter((p) => {
      return isSame({ date: p.achieved, format, period, onDate })
    })
  },
  getOnHoldGoals: function (goals: GoalType[]) {
    return filterOutCompletedGoals(goals).filter((p) => {
      return p.status === 'on hold'
    })
  },
}

export default dvGoalsUtils
