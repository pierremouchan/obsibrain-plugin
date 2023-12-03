import IconFolderPlugin from '@app/main';
import { DecorationSet, ViewPlugin, ViewUpdate } from '@codemirror/view';
export declare const buildIconPlugin: (plugin: IconFolderPlugin) => ViewPlugin<{
    decorations: DecorationSet;
    plugin: IconFolderPlugin;
    update(update: ViewUpdate): void;
}>;
