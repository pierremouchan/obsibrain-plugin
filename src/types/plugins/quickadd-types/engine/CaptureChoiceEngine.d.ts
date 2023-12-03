import type ICaptureChoice from "../types/choices/ICaptureChoice";
import type { App } from "obsidian";
import type QuickAdd from "../main";
import { QuickAddChoiceEngine } from "./QuickAddChoiceEngine";
import type { IChoiceExecutor } from "../IChoiceExecutor";
export declare class CaptureChoiceEngine extends QuickAddChoiceEngine {
    private choiceExecutor;
    choice: ICaptureChoice;
    private formatter;
    private readonly plugin;
    constructor(app: App, plugin: QuickAdd, choice: ICaptureChoice, choiceExecutor: IChoiceExecutor);
    run(): Promise<void>;
    private getCaptureContent;
    /**
     * Gets a formatted file path to capture content to, either the active file or a specified location.
     * If capturing to a folder, suggests a file within the folder to capture the content to.
     *
     * @param {boolean} shouldCaptureToActiveFile - Determines if the content should be captured to the active file.
     * @returns {Promise<string>} A promise that resolves to the formatted file path where the content should be captured.
     *
     * @throws {Error} Throws an error if there's no active file when trying to capture to active file,
     *                 if the capture path is invalid, or if the target folder is empty.
     */
    private getFormattedPathToCaptureTo;
    private selectFileInFolder;
    private selectFileWithTag;
    private onFileExists;
    private onCreateFileIfItDoesntExist;
    private formatFilePath;
}
