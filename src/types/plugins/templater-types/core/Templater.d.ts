import { MarkdownPostProcessorContext, TAbstractFile, TFile, TFolder } from "obsidian";
import TemplaterPlugin from "main";
import { FunctionsGenerator } from "./functions/FunctionsGenerator";
import { Parser } from "./parser/Parser";
export declare enum RunMode {
    CreateNewFromTemplate = 0,
    AppendActiveFile = 1,
    OverwriteFile = 2,
    OverwriteActiveFile = 3,
    DynamicProcessor = 4,
    StartupTemplate = 5
}
export type RunningConfig = {
    template_file: TFile | undefined;
    target_file: TFile;
    run_mode: RunMode;
    active_file?: TFile | null;
};
export declare class Templater {
    private plugin;
    parser: Parser;
    functions_generator: FunctionsGenerator;
    current_functions_object: Record<string, unknown>;
    private templater_task_counter;
    constructor(plugin: TemplaterPlugin);
    setup(): Promise<void>;
    create_running_config(template_file: TFile | undefined, target_file: TFile, run_mode: RunMode): RunningConfig;
    read_and_parse_template(config: RunningConfig): Promise<string>;
    parse_template(config: RunningConfig, template_content: string): Promise<string>;
    private start_templater_task;
    private end_templater_task;
    create_new_note_from_template(template: TFile | string, folder?: TFolder, filename?: string, open_new_note?: boolean): Promise<TFile | undefined>;
    append_template_to_active_file(template_file: TFile): Promise<void>;
    write_template_to_file(template_file: TFile, file: TFile): Promise<void>;
    overwrite_active_file_commands(): void;
    overwrite_file_commands(file: TFile, active_file?: boolean): Promise<void>;
    process_dynamic_templates(el: HTMLElement, ctx: MarkdownPostProcessorContext): Promise<void>;
    get_new_file_template_for_folder(folder: TFolder): string | undefined;
    static on_file_creation(templater: Templater, file: TAbstractFile): Promise<void>;
    execute_startup_scripts(): Promise<void>;
}
