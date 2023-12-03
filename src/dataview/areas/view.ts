import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'

const dvAreasView = (dv: DataviewInlineApi, pages: any[]) => {
  return dv.table([''], [[pages.map((p) => p.file.link)]])
}

export default dvAreasView
