import { ExplorerView } from '../@types/obsidian';
import IconFolderPlugin, { FolderIconObject } from '../main';
import { Icon } from '../icon-pack-manager';
interface IconWithPath {
    path: string;
    icon: string;
}
declare const _default: {
    addAll: (plugin: IconFolderPlugin, data: [string, string | FolderIconObject][], registeredFileExplorers: WeakSet<ExplorerView>, callback?: () => void) => void;
    getByPath: (plugin: IconFolderPlugin, path: string) => string;
    getAllWithPath: (plugin: IconFolderPlugin) => IconWithPath[];
    getIconByPath: (plugin: IconFolderPlugin, path: string) => string | Icon;
    getIconByName: (iconNameWithPrefix: string) => Icon;
    checkMissingIcons: (plugin: IconFolderPlugin, data: [string, string | FolderIconObject][]) => Promise<void>;
};
export default _default;
