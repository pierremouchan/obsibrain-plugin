import { Formatter } from "./formatter";
import type { App } from "obsidian";
import type QuickAdd from "../main";
import type { IChoiceExecutor } from "../IChoiceExecutor";
export declare class CompleteFormatter extends Formatter {
    protected app: App;
    private plugin;
    protected choiceExecutor?: IChoiceExecutor | undefined;
    private valueHeader;
    constructor(app: App, plugin: QuickAdd, choiceExecutor?: IChoiceExecutor | undefined);
    protected format(input: string): Promise<string>;
    formatFileName(input: string, valueHeader: string): Promise<string>;
    formatFileContent(input: string): Promise<string>;
    formatFolderPath(folderName: string): Promise<string>;
    protected getCurrentFileLink(): string | null;
    protected getNaturalLanguageDates(): import("obsidian").Plugin & {
        [pluginImplementations: string]: unknown;
    };
    protected getVariableValue(variableName: string): string;
    protected promptForValue(header?: string): Promise<string>;
    protected promptForVariable(header?: string): Promise<string>;
    protected promptForMathValue(): Promise<string>;
    protected suggestForValue(suggestedValues: string[]): Promise<string>;
    protected suggestForField(variableName: string): Promise<string>;
    protected getMacroValue(macroName: string): Promise<string>;
    protected getTemplateContent(templatePath: string): Promise<string>;
    protected getSelectedText(): Promise<string>;
    protected replaceInlineJavascriptInString(input: string): Promise<string>;
}
