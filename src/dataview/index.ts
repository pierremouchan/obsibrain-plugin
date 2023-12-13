import dvProgressBarRender from '@/dataview/progress-bar/render'
import dvAreasRender from './areas/render'
import dvGoalsRender from './goals/render'
import dvLinksRender from './links/render'
import dvNotesRender from './notes/render'
import dvProjectsRender from './projects/render'
import dvTasksRender from './tasks/render'
import dvButtonRender from '@/dataview/button/render'

const dataviewUtils = {
  tasks: {
    render: dvTasksRender,
  },
  goals: {
    render: dvGoalsRender,
  },
  links: {
    render: dvLinksRender,
  },
  notes: {
    render: dvNotesRender,
  },
  areas: {
    render: dvAreasRender,
  },
  projects: {
    render: dvProjectsRender,
  },
  progressBar: {
    render: dvProgressBarRender,
  },
  button: {
    render: dvButtonRender,
  },
}

export default dataviewUtils
