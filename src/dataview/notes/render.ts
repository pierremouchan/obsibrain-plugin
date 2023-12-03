import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'
import dvNotesView from './view'
import type { AreaType } from '@/types'
import dvNotesUtils from './utils'

type DvNotesRenderArgsType = {
  dv: DataviewInlineApi
  type: 'unsorted'
}

const dvNotesRender = ({ dv, type }: DvNotesRenderArgsType) => {
  let renderedNotes: AreaType[] = []

  switch (type) {
    case 'unsorted':
      renderedNotes = dvNotesUtils.getUnsortedNotes(dv)
      break

    default:
      throw new Error(`Unknown type: ${type}`)
  }

  return dvNotesView(dv, renderedNotes)
}

export default dvNotesRender
