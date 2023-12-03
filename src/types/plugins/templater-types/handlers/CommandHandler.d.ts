import TemplaterPlugin from "main";
export declare class CommandHandler {
    private plugin;
    constructor(plugin: TemplaterPlugin);
    setup(): void;
    register_templates_hotkeys(): void;
    add_template_hotkey(old_template: string | null, new_template: string): void;
    remove_template_hotkey(template: string | null): void;
}
