import { TAbstractFile } from 'obsidian';
import IconFolderPlugin, { FolderIconObject } from '../main';
interface AddOptions {
    file?: TAbstractFile;
    onAdd?: (file: TAbstractFile) => void;
}
interface RemoveOptions {
    onRemove?: (file: TAbstractFile) => void;
}
declare const _default: {
    add: (plugin: IconFolderPlugin, folderPath: string, iconName: string, options?: AddOptions) => void;
    remove: (plugin: IconFolderPlugin, folderPath: string, options?: RemoveOptions) => void;
    getFolders: (plugin: IconFolderPlugin) => Record<string, FolderIconObject>;
    getFiles: (plugin: IconFolderPlugin, folderPath: string) => TAbstractFile[];
    getByPath: (plugin: IconFolderPlugin, path: string) => FolderIconObject;
    getFolderPathByFilePath: (plugin: IconFolderPlugin, filePath: string) => string;
    doesExistInPath: (plugin: IconFolderPlugin, path: string) => boolean;
};
export default _default;
