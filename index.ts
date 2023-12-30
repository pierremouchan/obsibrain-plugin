import { Plugin } from 'obsidian'
import type { AppType } from '@/types'
import importCommands from '@/commands'
import dataviewUtils from '@/dataview'
import templaterUtils from '@/templater'
import DateSuggest from '@/suggesters/date-suggest'

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

    // import all commands
    importCommands(this)

    // register the date suggester when typing
    this.registerEditorSuggest(new DateSuggest(this.app))
  }

  onunload() {}

  private async loadUtils() {
    this.app.utils = {
      plugins: {
        dataViewPlugin: this.app.plugins.plugins['dataview']?.api,
        iconFolderPlugin: this.app.plugins.plugins['obsidian-icon-folder'],
        utilsPlugin: this.app.plugins.plugins['obsibrain-plugin'],
        quickAddPlugin: this.app.plugins.plugins['quickadd']?.api,
        templaterPlugin: this.app.plugins.plugins['templater-obsidian']?.templater,
        all: this.app.plugins.plugins,
      },
      dataview: dataviewUtils,
      templater: templaterUtils,
    }
  }

  private async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
  }
}
