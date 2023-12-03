import { Plugin } from "obsidian";
import { Settings } from "settings/Settings";
import { FuzzySuggester } from "handlers/FuzzySuggester";
import { Templater } from "core/Templater";
import EventHandler from "handlers/EventHandler";
import { CommandHandler } from "handlers/CommandHandler";
import { Editor } from "editor/Editor";
export default class TemplaterPlugin extends Plugin {
    settings: Settings;
    templater: Templater;
    event_handler: EventHandler;
    command_handler: CommandHandler;
    fuzzy_suggester: FuzzySuggester;
    editor_handler: Editor;
    onload(): Promise<void>;
    unload(): Promise<void>;
    save_settings(): Promise<void>;
    load_settings(): Promise<void>;
}
