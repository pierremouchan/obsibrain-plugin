import type { GoalType } from '@/types'
import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'
import dvGoalsUtils from './utils'
import dvGoalsView from './view'
import { moment } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'

type DvGoalsRenderArgsType = {
  dv: DataviewInlineApi
  type: 'ongoing' | 'due' | 'completed' | 'on-hold'
  onDate: string
}

const dvGoalsRender = ({ dv, type, onDate }: DvGoalsRenderArgsType) => {
  const goals = dv.pages(`"${CONSTANTS.GOALS_FOLDER}"`).array() as GoalType[]

  let renderedGoals: GoalType[] = []

  const onDateFormatted = onDate ? onDate.trim() : moment().format(CONSTANTS.DEFAULT_DATE_FORMAT)

  switch (type) {
    case 'ongoing':
      renderedGoals = dvGoalsUtils.getOngoingGoals(goals)
      break

    case 'due':
      renderedGoals = dvGoalsUtils.getDueGoals(goals, onDateFormatted)
      break

    case 'completed':
      renderedGoals = dvGoalsUtils.getCompletedGoals(goals, onDateFormatted)
      break

    case 'on-hold':
      renderedGoals = dvGoalsUtils.getOnHoldGoals(goals)
      break

    default:
      throw new Error(`Unknown type: ${type}`)
  }

  return dvGoalsView(dv, renderedGoals)
}

export default dvGoalsRender
