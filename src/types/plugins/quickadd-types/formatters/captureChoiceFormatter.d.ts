import { CompleteFormatter } from "./completeFormatter";
import type ICaptureChoice from "../types/choices/ICaptureChoice";
import type { App, TFile } from "obsidian";
import type QuickAdd from "../main";
import type { IChoiceExecutor } from "../IChoiceExecutor";
export declare class CaptureChoiceFormatter extends CompleteFormatter {
    private choice;
    private file;
    private fileContent;
    constructor(app: App, plugin: QuickAdd, choiceExecutor: IChoiceExecutor);
    formatContentWithFile(input: string, choice: ICaptureChoice, fileContent: string, file: TFile): Promise<string>;
    formatContent(input: string, choice: ICaptureChoice): Promise<string>;
    formatFileContent(input: string): Promise<string>;
    formatContentOnly(input: string): Promise<string>;
    private insertAfterHandler;
    private createInsertAfterIfNotFound;
    private getFrontmatterEndPosition;
    private insertTextAfterPositionInBody;
}
