import { Formatter } from "./formatter";
import type { App } from "obsidian";
export declare class FileNameDisplayFormatter extends Formatter {
    private app;
    constructor(app: App);
    format(input: string): Promise<string>;
    protected promptForValue(header?: string): string;
    protected getVariableValue(variableName: string): string;
    protected getCurrentFileLink(): string;
    protected getNaturalLanguageDates(): import("obsidian").Plugin & {
        [pluginImplementations: string]: unknown;
    };
    protected suggestForValue(suggestedValues: string[]): string;
    protected promptForMathValue(): Promise<string>;
    protected getMacroValue(macroName: string): string;
    protected promptForVariable(variableName: string): Promise<string>;
    protected getTemplateContent(templatePath: string): Promise<string>;
    protected getSelectedText(): Promise<string>;
    protected suggestForField(variableName: string): string;
}
