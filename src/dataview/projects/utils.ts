import type { ProjectType } from '@/types'
import { getDateFormat, isSame } from '@/utils/dates'

function filterOutCompletedProjects(projects: ProjectType[]) {
  return projects.filter((project) => {
    return !project.completed
  })
}

const dvProjectsUtils = {
  getDueProjects: function (projects: ProjectType[], onDate: string) {
    const { format, period } = getDateFormat(onDate)
    return filterOutCompletedProjects(projects).filter((p) => {
      return isSame({ date: p.deadline, format, period, onDate })
    })
  },
  getCompletedProjects: function (projects: ProjectType[], onDate: string) {
    const { format, period } = getDateFormat(onDate)
    return projects.filter((p) => {
      return isSame({ date: p.completed, format, period, onDate })
    })
  },
  getOngoingProjects: function (projects: ProjectType[]) {
    return filterOutCompletedProjects(projects).filter((p) => {
      return p.status === 'ongoing'
    })
  },
  getOnHoldProjects: function (projects: ProjectType[]) {
    return filterOutCompletedProjects(projects).filter((p) => {
      return p.status === 'on hold'
    })
  },
}

export default dvProjectsUtils
