import { App } from 'obsidian';
import IconFolderSetting from './iconFolderSetting';
import IconFolderPlugin from '@app/main';
export default class CustomIconRuleSetting extends IconFolderSetting {
    private app;
    private textComponent;
    private chooseIconBtn;
    private refreshDisplay;
    constructor(plugin: IconFolderPlugin, containerEl: HTMLElement, app: App, refreshDisplay: () => void);
    /**
     * Updates all the open files based on the custom rule that was specified.
     * @param rule Rule that will be used to update all the icons for all opened files.
     * @param remove Whether to remove the icons that are applicable to the rule or not.
     */
    private updateIconTabs;
    private createDescriptionEl;
    display(): void;
}
