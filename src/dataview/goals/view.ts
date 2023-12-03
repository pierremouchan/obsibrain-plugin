import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'

const dvGoalsView = (dv: DataviewInlineApi, pages: any[]) => {
  return dv.table([''], [[pages.map((p) => p.file.link)]])
}

export default dvGoalsView
