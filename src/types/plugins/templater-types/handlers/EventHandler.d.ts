import TemplaterPlugin from "main";
import { Templater } from "core/Templater";
import { Settings } from "settings/Settings";
export default class EventHandler {
    private plugin;
    private templater;
    private settings;
    private syntax_highlighting_event;
    private trigger_on_file_creation_event;
    constructor(plugin: TemplaterPlugin, templater: Templater, settings: Settings);
    setup(): void;
    update_syntax_highlighting(): void;
    update_trigger_file_on_creation(): void;
    update_file_menu(): void;
}
