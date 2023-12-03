import type { App } from "obsidian";
import { TFile } from "obsidian";
import type { NewTabDirection } from "./types/newTabDirection";
import type { IUserScript } from "./types/macros/IUserScript";
import type { FileViewMode } from "./types/fileViewMode";
import type { TemplateChoice } from "./types/choices/TemplateChoice";
import type { MultiChoice } from "./types/choices/MultiChoice";
import type { CaptureChoice } from "./types/choices/CaptureChoice";
import type { MacroChoice } from "./types/choices/MacroChoice";
import type IChoice from "./types/choices/IChoice";
export declare function getTemplater(app: App): import("obsidian").Plugin & {
    [pluginImplementations: string]: unknown;
};
export declare function replaceTemplaterTemplatesInCreatedFile(app: App, file: TFile, force?: boolean): Promise<void>;
export declare function templaterParseTemplate(app: App, templateContent: string, targetFile: TFile): Promise<string>;
export declare function getNaturalLanguageDates(app: App): import("obsidian").Plugin & {
    [pluginImplementations: string]: unknown;
};
export declare function getDate(input?: {
    format?: string;
    offset?: number;
}): string;
export declare function appendToCurrentLine(toAppend: string, app: App): void;
export declare function findObsidianCommand(app: App, commandId: string): import("obsidian").Command;
export declare function deleteObsidianCommand(app: App, commandId: string): void;
export declare function getAllFolderPathsInVault(app: App): string[];
export declare function getUserScriptMemberAccess(fullMemberPath: string): {
    basename: string | undefined;
    memberAccess: string[] | undefined;
};
export declare function openFile(app: App, file: TFile, optional: {
    openInNewTab?: boolean;
    direction?: NewTabDirection;
    mode?: FileViewMode;
    focus?: boolean;
}): Promise<void>;
export declare function getUserScript(command: IUserScript, app: App): Promise<{} | undefined>;
export declare function excludeKeys<T extends object, K extends keyof T>(sourceObj: T, except: K[]): Omit<T, K>;
export declare function getChoiceType<T extends TemplateChoice | MultiChoice | CaptureChoice | MacroChoice>(choice: IChoice): choice is T;
export declare function isFolder(path: string): boolean;
export declare function getMarkdownFilesInFolder(folderPath: string): TFile[];
export declare function getMarkdownFilesWithTag(tag: string): TFile[];
