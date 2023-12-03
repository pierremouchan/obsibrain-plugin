import { App, FuzzyMatch, FuzzySuggestModal } from 'obsidian';
import IconFolderPlugin from '@app/main';
export interface Icon {
    name: string;
    iconPackName: string | null;
    displayName: string;
    prefix: string;
}
export default class IconsPickerModal extends FuzzySuggestModal<any> {
    private plugin;
    private path;
    private renderIndex;
    private recentlyUsedItems;
    onSelect: (iconName: string) => void | undefined;
    constructor(app: App, plugin: IconFolderPlugin, path: string);
    onOpen(): void;
    onClose(): void;
    getItemText(item: Icon): string;
    getItems(): Icon[];
    onChooseItem(item: Icon | string): void;
    renderSuggestion(item: FuzzyMatch<Icon>, el: HTMLElement): void;
}
