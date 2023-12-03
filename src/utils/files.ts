import type { AppType } from '@/types'
import type { TFile } from 'obsidian'

class FilesUtils {
  public app: AppType

  constructor(app: AppType) {
    this.app = app
  }

  getFullName(file: TFile) {
    const icon = this.app.utils.plugins.iconFolderPlugin.getIconNameFromPath(file.path) ?? ''
    const name = file.name.replace('.md', '')
    return `${icon} ${name}`
  }

  filterByFolder(files: TFile[], folderPath: string) {
    return files.filter((file) => file.path.startsWith(folderPath))
  }
}

export default FilesUtils
