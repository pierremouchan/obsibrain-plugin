import IconFolderSetting from './iconFolderSetting';
import IconFolderPlugin from '@app/main';
export default class CustomIconPackSetting extends IconFolderSetting {
    private textComponent;
    private dragOverElement;
    private closeTimer;
    private dragTargetElement;
    private refreshDisplay;
    constructor(plugin: IconFolderPlugin, containerEl: HTMLElement, refreshDisplay: () => void);
    private normalizeIconPackName;
    private preventDefaults;
    private highlight;
    private unhighlight;
    display(): void;
}
