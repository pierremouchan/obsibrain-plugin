import type { LinkType } from '@/types'
import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'
import dvLinksView from './view'
import { CONSTANTS } from '@/utils/constants'
import { getLinksByType } from '@/utils/pages'

type DvLinksRenderArgsType = {
  dv: DataviewInlineApi
  type: 'notes' | 'resources' | 'goals' | 'projects'
}

const dvLinksRender = ({ dv, type }: DvLinksRenderArgsType) => {
  const currentPage = dv.current()!

  let renderedLinks: LinkType[] = []

  switch (type) {
    case 'notes':
      renderedLinks = getLinksByType(currentPage, CONSTANTS.NOTES_FOLDER)
      break

    case 'resources':
      renderedLinks = getLinksByType(currentPage, CONSTANTS.RESOURCES_FOLDER)
      break

    case 'goals':
      renderedLinks = getLinksByType(currentPage, CONSTANTS.GOALS_FOLDER)
      break

    case 'projects':
      renderedLinks = getLinksByType(currentPage, CONSTANTS.PROJECTS_FOLDER)
      break

    default:
      throw new Error(`Unknown type: ${type}`)
  }

  return dvLinksView(dv, renderedLinks)
}

export default dvLinksRender
