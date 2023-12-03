import type ITemplateChoice from "./ITemplateChoice";
import { Choice } from "./Choice";
import { NewTabDirection } from "../newTabDirection";
import type { FileViewMode } from "../fileViewMode";
import type { fileExistsChoices } from "src/constants";
export declare class TemplateChoice extends Choice implements ITemplateChoice {
    appendLink: boolean;
    fileNameFormat: {
        enabled: boolean;
        format: string;
    };
    folder: {
        enabled: boolean;
        folders: string[];
        chooseWhenCreatingNote: boolean;
        createInSameFolderAsActiveFile: boolean;
        chooseFromSubfolders: boolean;
    };
    openFileInNewTab: {
        enabled: boolean;
        direction: NewTabDirection;
        focus: boolean;
    };
    openFile: boolean;
    openFileInMode: FileViewMode;
    templatePath: string;
    fileExistsMode: typeof fileExistsChoices[number];
    setFileExistsBehavior: boolean;
    constructor(name: string);
    static Load(choice: ITemplateChoice): TemplateChoice;
}
