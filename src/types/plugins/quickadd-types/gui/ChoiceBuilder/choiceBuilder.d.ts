import type { App, Setting } from "obsidian";
import { Modal } from "obsidian";
import type IChoice from "../../types/choices/IChoice";
import type { SvelteComponent } from "svelte";
export declare abstract class ChoiceBuilder extends Modal {
    private resolvePromise;
    private rejectPromise;
    private input;
    waitForClose: Promise<IChoice>;
    abstract choice: IChoice;
    private didSubmit;
    protected svelteElements: SvelteComponent[];
    protected constructor(app: App);
    protected abstract display(): unknown;
    protected reload(): void;
    protected addFileSearchInputToSetting(setting: Setting, value: string, onChangeCallback: (value: string) => void): void;
    protected addCenteredChoiceNameHeader(choice: IChoice): void;
    onClose(): void;
}
