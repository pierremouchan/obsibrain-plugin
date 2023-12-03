import type { TaskType } from '@/types'
import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'

const dvTasksView = (dv: DataviewInlineApi, tasks: TaskType[]) => {
  return dv.table(
    ['Task', 'Due', 'file'],
    tasks.map((t) => [t.text, t.due, t.path]),
  )
}

export default dvTasksView
