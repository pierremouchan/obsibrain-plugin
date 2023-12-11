import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'
import dvProgressBarView from './view'
import { CONSTANTS } from '@/utils/constants'
import { filterByStatus, getLinksByType } from '@/utils/pages'
import dvTasksUtils from '@/dataview/tasks/utils'

type DvProgressBarRenderArgsType = {
  dv: DataviewInlineApi
  type: 'linked-completed-projects' | 'completed-tasks'
}

const dvProgressBarRender = ({ dv, type }: DvProgressBarRenderArgsType) => {
  const currentPage = dv.current()!

  let value = 0
  let total = 0

  switch (type) {
    case 'linked-completed-projects':
      // get linked projects and comleted ones
      const linkedProjectsLinks = getLinksByType(currentPage, CONSTANTS.PROJECTS_FOLDER)
      const linkedProjects = linkedProjectsLinks.map((p) => dv.page(p))
      const completedProjects = filterByStatus(linkedProjects, 'completed')
      value = completedProjects.length
      total = linkedProjectsLinks.length
      break

    case 'completed-tasks':
      const tasks = currentPage.file.tasks.array()
      // get completed tasks
      const completedTasks = dvTasksUtils.getCompletedTasksWithCompletionDate(tasks)
      value = completedTasks.length
      total = tasks.length
      break

    default:
      throw new Error(`Unknown type: ${type}`)
  }

  dv.el('div', '', { cls: 'dv-progress-bar-container' })
  const container = dv.container.querySelector('.dv-progress-bar-container')!

  // returning the rendered html
  container.innerHTML = dvProgressBarView(dv, value, total)
}

export default dvProgressBarRender
