import * as chrono from 'chrono-node'
import { Plugin, moment } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'
import FilesUtils from '@/utils/files'
import type { AppType } from '@/types'
import importCommands from '@/commands'
import dataviewUtils from '@/dataview'
import templaterUtils from '@/templater'

interface ObsidianUtilsPluginSettingsType {
  settings: any
}

const DEFAULT_SETTINGS: ObsidianUtilsPluginSettingsType = {
  settings: {},
}

export default class ObsibrainUtilsPlugin extends Plugin {
  app: AppType
  settings: ObsidianUtilsPluginSettingsType = DEFAULT_SETTINGS

  async onload() {
    await this.loadSettings()
    await this.loadUtils()

    importCommands(this)

    console.log('Obsibrain plugin reloaded')
  }

  onunload() {}

  private async loadUtils() {
    const files = new FilesUtils(this.app)

    this.app.utils = {
      obsidian: this.app,
      constants: CONSTANTS,
      plugins: {
        dataViewPlugin: this.app.plugins.plugins['dataview']?.api,
        iconFolderPlugin: this.app.plugins.plugins['obsidian-icon-folder'],
        utilsPlugin: this.app.plugins.plugins['obsibrain-plugin'],
        quickAddPlugin: this.app.plugins.plugins['quickadd']?.api,
        templaterPlugin: this.app.plugins.plugins['templater-obsidian']?.templater,
        all: this.app.plugins.plugins,
      },
      files,
      dataview: dataviewUtils,
      templater: templaterUtils,
    }
  }

  private async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
  }

  // Parse a date string into a date object and a formatted string
  // Example: "tomorrow" => { date: Date, formatted: "2021-01-01" }
  parseDate(dateString: string) {
    const date = chrono.parseDate(dateString, new Date(), {
      forwardDate: true,
    })
    return {
      date: date,
      formatted: moment(date).format(CONSTANTS.DEFAULT_DATE_FORMAT),
    }
  }
}
