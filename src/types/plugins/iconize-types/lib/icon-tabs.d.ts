import { TFile } from 'obsidian';
import IconFolderPlugin from '../main';
import { TabHeaderLeaf } from '../@types/obsidian';
interface AddOptions {
    /**
     * Name of the icon to add to the tab.
     * @default undefined
     */
    iconName?: string;
    /**
     * Color of the icon to add to the tab.
     * @default undefined
     */
    iconColor?: string;
}
interface RemoveOptions {
    /**
     * Replaces the icon in the tab with the default obsidian icon.
     * @default false
     */
    replaceWithDefaultIcon?: boolean;
}
declare const _default: {
    add: (plugin: IconFolderPlugin, file: TFile, iconContainer: HTMLElement, options?: AddOptions) => Promise<void>;
    update: (plugin: IconFolderPlugin, iconName: string, iconContainer: HTMLElement) => void;
    remove: (iconContainer: HTMLElement, options?: RemoveOptions) => void;
    getTabLeavesOfFilePath: (plugin: IconFolderPlugin, path: string) => TabHeaderLeaf[];
};
export default _default;
