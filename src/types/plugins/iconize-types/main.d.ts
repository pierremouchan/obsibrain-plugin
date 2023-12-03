import { Plugin } from 'obsidian';
import { ExplorerView } from './@types/obsidian';
import { Icon } from './ui/icons-picker-modal';
import { IconFolderSettings } from '@app/settings/data';
import { PositionField } from './editor/live-preview/state';
export interface FolderIconObject {
    iconName: string | null;
    inheritanceIcon: string;
}
export default class IconFolderPlugin extends Plugin {
    private data;
    private registeredFileExplorers;
    private modifiedInternalPlugins;
    positionField: PositionField;
    onload(): Promise<void>;
    isSomeEmojiStyleActive(): boolean;
    notifyPlugins(): void;
    private removeSingleIcon;
    private handleChangeLayout;
    addIconInTitle(iconName: string): void;
    private saveInheritanceData;
    onunload(): void;
    renameFolder(newPath: string, oldPath: string): void;
    removeFolderIcon(path: string): void;
    addFolderIcon(path: string, icon: Icon | string): void;
    getSettings(): IconFolderSettings;
    loadIconFolderData(): Promise<void>;
    saveIconFolderData(): Promise<void>;
    checkRecentlyUsedIcons(): Promise<void>;
    getData(): Record<string, boolean | string | IconFolderSettings | FolderIconObject>;
    getIconNameFromPath(path: string): string | undefined;
    getRegisteredFileExplorers(): Set<ExplorerView>;
    /**
     * Returns a possible data path by the given value. This function checks for direct icon,
     * inheritance icon and custom rules.
     * @param value String that will be used to find the data path.
     * @returns String that is the data path or `undefined` if no data path was found.
     */
    getDataPathByValue(value: string): string | undefined;
}
