import type { LinkType } from '@/types'
import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'

const dvLinksView = (dv: DataviewInlineApi, links: LinkType[]) => {
  return dv.table([''], [[links.map((l) => dv.page(l).file.link)]])
}

export default dvLinksView
