import type { App } from "obsidian";
import { TFile } from "obsidian";
export declare abstract class QuickAddEngine {
    app: App;
    protected constructor(app: App);
    abstract run(): void;
    protected createFolder(folder: string): Promise<void>;
    protected normalizeMarkdownFilePath(folderPath: string, fileName: string): string;
    protected fileExists(filePath: string): Promise<boolean>;
    protected getFileByPath(filePath: string): TFile;
    protected createFileWithInput(filePath: string, fileContent: string): Promise<TFile>;
}
