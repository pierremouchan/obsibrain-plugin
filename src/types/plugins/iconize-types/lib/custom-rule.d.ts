import { Plugin, TAbstractFile } from 'obsidian';
import IconFolderPlugin from '../main';
import { CustomRule } from '../settings/data';
import { FileItem } from '../@types/obsidian';
export type CustomRuleFileType = 'file' | 'folder';
declare const _default: {
    getFileItems: (plugin: IconFolderPlugin, rule: CustomRule) => Promise<FileItem[]>;
    doesMatchPath: (rule: CustomRule, path: string) => boolean;
    doesMatchFileType: (rule: CustomRule, fileType: CustomRuleFileType) => boolean;
    getSortedRules: (plugin: IconFolderPlugin) => CustomRule[];
    removeFromAllFiles: (plugin: IconFolderPlugin, rule: CustomRule) => Promise<void>;
    add: (plugin: IconFolderPlugin, rule: CustomRule, file: TAbstractFile, container?: HTMLElement) => Promise<boolean>;
    addToAllFiles: (plugin: IconFolderPlugin, rule: CustomRule) => Promise<void>;
    isApplicable: (plugin: Plugin, rule: CustomRule, file: TAbstractFile) => Promise<boolean>;
};
export default _default;
