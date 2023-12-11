import type { AppType } from '@/types'
import type { TFile } from 'obsidian'

export function getFullName(file: TFile, app: AppType) {
  const icon = app.utils.plugins.iconFolderPlugin.getIconNameFromPath(file.path) ?? ''
  const name = file.name.replace('.md', '')
  return `${icon} ${name}`
}

export function filterByFolder(files: TFile[], folderPath: string) {
  return files.filter((file) => file.path.startsWith(folderPath))
}
