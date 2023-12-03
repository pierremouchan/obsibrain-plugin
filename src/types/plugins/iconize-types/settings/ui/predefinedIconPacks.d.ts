import { App } from 'obsidian';
import IconFolderSetting from './iconFolderSetting';
import IconFolderPlugin from '@app/main';
export default class PredefinedIconPacksSetting extends IconFolderSetting {
    private app;
    private refreshDisplay;
    constructor(plugin: IconFolderPlugin, containerEl: HTMLElement, app: App, refreshDisplay: () => void);
    display(): void;
}
