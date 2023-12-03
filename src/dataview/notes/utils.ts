import { CONSTANTS } from '@/utils/constants'
import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'

const dvNotesUtils = {
  getUnsortedNotes: function (dv: DataviewInlineApi) {
    const notes = dv.pages(`"${CONSTANTS.NOTES_FOLDER}"`).array()

    // get all notes that are not tagged or linked (unsorted)
    const unsortedNotes = notes.filter((p) => {
      return !p.tags || p.tags.length === 0 || !p.links || p.links.length === 0
    })

    return unsortedNotes
  },
}

export default dvNotesUtils
