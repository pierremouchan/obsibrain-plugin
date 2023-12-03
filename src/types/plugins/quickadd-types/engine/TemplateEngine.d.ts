import { QuickAddEngine } from "./QuickAddEngine";
import { CompleteFormatter } from "../formatters/completeFormatter";
import type { App } from "obsidian";
import { TFile } from "obsidian";
import type QuickAdd from "../main";
import type { IChoiceExecutor } from "../IChoiceExecutor";
export declare abstract class TemplateEngine extends QuickAddEngine {
    protected plugin: QuickAdd;
    protected formatter: CompleteFormatter;
    protected readonly templater: import("obsidian").Plugin & {
        [pluginImplementations: string]: unknown;
    };
    protected constructor(app: App, plugin: QuickAdd, choiceFormatter?: IChoiceExecutor);
    abstract run(): Promise<void> | Promise<string> | Promise<{
        file: TFile;
        content: string;
    }>;
    protected getOrCreateFolder(folders: string[]): Promise<string>;
    protected getFormattedFilePath(folderPath: string, format: string, promptHeader: string): Promise<string>;
    protected incrementFileName(fileName: string): Promise<string>;
    protected createFileWithTemplate(filePath: string, templatePath: string): Promise<TFile | null>;
    protected overwriteFileWithTemplate(file: TFile, templatePath: string): Promise<TFile | null>;
    protected appendToFileWithTemplate(file: TFile, templatePath: string, section: "top" | "bottom"): Promise<TFile | null>;
    protected getTemplateContent(templatePath: string): Promise<string>;
}
