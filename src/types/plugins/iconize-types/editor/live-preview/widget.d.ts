import IconFolderPlugin from '@app/main';
import { EditorView, WidgetType } from '@codemirror/view';
export declare class IconWidget extends WidgetType {
    plugin: IconFolderPlugin;
    id: string;
    private start;
    private end;
    constructor(plugin: IconFolderPlugin, id: string);
    setPosition(start: number, end: number): void;
    eq(other: IconWidget): boolean;
    toDOM(view: EditorView): HTMLSpanElement;
    ignoreEvent(): boolean;
}
