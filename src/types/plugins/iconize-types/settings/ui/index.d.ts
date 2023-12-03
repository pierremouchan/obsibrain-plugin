import { App, PluginSettingTab } from 'obsidian';
import IconFolderPlugin from '../../main';
export default class IconFolderSettings extends PluginSettingTab {
    private plugin;
    constructor(app: App, plugin: IconFolderPlugin);
    display(): void;
}
