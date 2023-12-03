import type { LinkType, StatusType } from '@/types'

export function getLinksByType(page: any, type: string) {
  const linkedNotes = page.file.inlinks

  const links = new Set<LinkType>()

  for (const note of linkedNotes.array()) {
    const path = note.path
    if (path.includes(type)) {
      links.add(note.path)
    }
  }

  return Array.from(links)
}

export function filterByStatus(pages: any[], status: StatusType) {
  return pages.filter((p) => p.status === status)
}
