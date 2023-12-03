import { InternalModule } from "../InternalModule";
import { TFile, TFolder } from "obsidian";
import { ModuleName } from "editor/TpDocumentation";
export declare const DEPTH_LIMIT = 10;
export declare class InternalModuleFile extends InternalModule {
    name: ModuleName;
    private include_depth;
    private create_new_depth;
    private linkpath_regex;
    create_static_templates(): Promise<void>;
    create_dynamic_templates(): Promise<void>;
    teardown(): Promise<void>;
    generate_content(): Promise<string>;
    generate_create_new(): (template: TFile | string, filename: string, open_new: boolean, folder?: TFolder) => Promise<TFile | undefined>;
    generate_creation_date(): (format?: string) => string;
    generate_cursor(): (order?: number) => string;
    generate_cursor_append(): (content: string) => void;
    generate_exists(): (filename: string) => Promise<boolean>;
    generate_find_tfile(): (filename: string) => TFile | null;
    generate_folder(): (relative?: boolean) => string;
    generate_include(): (include_link: string | TFile) => Promise<string>;
    generate_last_modified_date(): (format?: string) => string;
    generate_move(): (path: string, file_to_move?: TFile) => Promise<string>;
    generate_path(): (relative: boolean) => string;
    generate_rename(): (new_title: string) => Promise<string>;
    generate_selection(): () => string;
    generate_tags(): string[] | null;
    generate_title(): string;
}
