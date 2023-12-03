import { View } from 'obsidian';
import InternalPluginInjector from '@app/@types/internal-plugin-injector';
import { StarredFile } from '@app/@types/obsidian';
import IconFolderPlugin from '@app/main';
interface StarredView extends View {
    itemLookup: WeakMap<Element, StarredFile>;
}
/**
 * @deprecated After obsidian 1.2.6 in favor of the bookmarks plugin.
 */
export default class StarredInternalPlugin extends InternalPluginInjector {
    constructor(plugin: IconFolderPlugin);
    get starred(): import("@app/@types/obsidian").StarredInternalPlugin;
    get enabled(): boolean;
    get leaf(): StarredView | undefined;
    private setIcon;
    private computeNodesWithPath;
    onMount(): void;
    register(): void;
}
export {};
