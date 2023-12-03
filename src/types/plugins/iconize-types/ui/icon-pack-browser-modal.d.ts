import { App, FuzzyMatch, FuzzySuggestModal } from 'obsidian';
import { IconPack } from '@app/icon-packs';
import IconFolderPlugin from '@app/main';
export default class IconPackBrowserModal extends FuzzySuggestModal<IconPack> {
    private plugin;
    constructor(app: App, plugin: IconFolderPlugin);
    onAddedIconPack(): void;
    onOpen(): void;
    onClose(): void;
    getItemText(item: IconPack): string;
    getItems(): IconPack[];
    onChooseItem(item: IconPack, _event: MouseEvent | KeyboardEvent): Promise<void>;
    renderSuggestion(item: FuzzyMatch<IconPack>, el: HTMLElement): void;
}
