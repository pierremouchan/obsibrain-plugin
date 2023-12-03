import IconFolderPlugin from '@app/main';
export default abstract class IconFolderSetting {
    protected plugin: IconFolderPlugin;
    protected containerEl: HTMLElement;
    constructor(plugin: IconFolderPlugin, containerEl: HTMLElement);
    abstract display(): void;
}
