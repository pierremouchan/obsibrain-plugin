import { TAbstractFile, View, WorkspaceLeaf } from 'obsidian';
import IconFolderPlugin from '@app/main';
interface FileExplorerWorkspaceLeaf extends WorkspaceLeaf {
    containerEl: HTMLElement;
    view: FileExplorerView;
}
interface FileExplorerView extends View {
    fileItems: {
        [path: string]: TAbstractFile;
    };
}
export default abstract class InternalPluginInjector {
    protected plugin: IconFolderPlugin;
    constructor(plugin: IconFolderPlugin);
    get fileExplorers(): FileExplorerWorkspaceLeaf[];
    onMount(): void;
    abstract get enabled(): boolean;
    abstract register(): void;
}
export {};
