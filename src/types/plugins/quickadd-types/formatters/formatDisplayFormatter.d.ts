import { Formatter } from "./formatter";
import type { App } from "obsidian";
import type QuickAdd from "../main";
export declare class FormatDisplayFormatter extends Formatter {
    private app;
    private plugin;
    constructor(app: App, plugin: QuickAdd);
    format(input: string): Promise<string>;
    protected promptForValue(header?: string): string;
    protected getVariableValue(variableName: string): string;
    protected getCurrentFileLink(): string;
    protected getNaturalLanguageDates(): import("obsidian").Plugin & {
        [pluginImplementations: string]: unknown;
    };
    protected suggestForValue(suggestedValues: string[]): string;
    protected getMacroValue(macroName: string): string;
    protected promptForMathValue(): Promise<string>;
    protected promptForVariable(variableName: string): Promise<string>;
    protected getTemplateContent(templatePath: string): Promise<string>;
    protected getSelectedText(): Promise<string>;
    protected suggestForField(variableName: string): Promise<string>;
}
