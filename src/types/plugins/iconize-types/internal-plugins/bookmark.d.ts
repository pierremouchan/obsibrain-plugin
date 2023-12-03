import { View } from 'obsidian';
import InternalPluginInjector from '@app/@types/internal-plugin-injector';
import { BookmarkItem, BookmarkItemValue } from '@app/@types/obsidian';
import IconFolderPlugin from '@app/main';
interface BookmarksView extends View {
    itemDoms: WeakMap<BookmarkItem, BookmarkItemValue>;
}
export default class BookmarkInternalPlugin extends InternalPluginInjector {
    constructor(plugin: IconFolderPlugin);
    get bookmark(): import("@app/@types/obsidian").BookmarkInternalPlugin;
    get enabled(): boolean;
    get leaf(): BookmarksView | undefined;
    private setIconOrRemove;
    private computeNodesWithPath;
    onMount(): void;
    register(): void;
}
export {};
