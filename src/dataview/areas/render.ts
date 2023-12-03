import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'
import dvAreasView from './view'
import type { AreaType } from '@/types'
import { CONSTANTS } from '@/utils/constants'

type DvAreasRenderArgsType = {
  dv: DataviewInlineApi
  type: 'all'
}

const dvAreasRender = ({ dv, type }: DvAreasRenderArgsType) => {
  const areas = dv.pages(`"${CONSTANTS.AREAS_FOLDER}"`).array()

  let renderedAreas: AreaType[] = []

  switch (type) {
    case 'all':
      renderedAreas = areas
      break

    default:
      throw new Error(`Unknown type: ${type}`)
  }

  return dvAreasView(dv, renderedAreas)
}

export default dvAreasRender
