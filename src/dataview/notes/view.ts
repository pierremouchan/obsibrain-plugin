import type { AreaType } from '@/types'
import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'

const dvLinksView = (dv: DataviewInlineApi, pages: AreaType[]) => {
  return dv.table([''], [[pages.map((p) => p.file.link)]])
}

export default dvLinksView
