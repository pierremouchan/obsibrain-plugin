import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'
import dvProjectsView from './view'
import type { ProjectType } from '@/types'
import { CONSTANTS } from '@/utils/constants'
import dvProjectsUtils from './utils'
import { moment } from 'obsidian'

type DvProjectsRenderArgsType = {
  dv: DataviewInlineApi
  type: 'completed' | 'ongoing' | 'due' | 'on-hold'
  onDate: string
}

const dvProjectsRender = ({ dv, type, onDate }: DvProjectsRenderArgsType) => {
  const projects = dv.pages(`"${CONSTANTS.PROJECTS_FOLDER}"`).array()

  let renderedProjects: ProjectType[] = []

  const onDateFormatted = onDate ? onDate.trim() : moment().format(CONSTANTS.DEFAULT_DATE_FORMAT)

  switch (type) {
    case 'due':
      renderedProjects = dvProjectsUtils.getDueProjects(projects, onDateFormatted)
      break

    case 'completed':
      renderedProjects = dvProjectsUtils.getCompletedProjects(projects, onDateFormatted)
      break

    case 'on-hold':
      renderedProjects = dvProjectsUtils.getOnHoldProjects(projects)
      break

    case 'ongoing':
      renderedProjects = dvProjectsUtils.getOngoingProjects(projects)
      break

    default:
      throw new Error(`Unknown type: ${type}`)
  }

  return dvProjectsView(dv, renderedProjects)
}

export default dvProjectsRender
