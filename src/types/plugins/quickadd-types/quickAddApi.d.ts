import type { App } from "obsidian";
import type { IChoiceExecutor } from "./IChoiceExecutor";
import type QuickAdd from "./main";
import { type Model } from "./ai/models";
import type { OpenAIModelParameters } from "./ai/OpenAIModelParameters";
export declare class QuickAddApi {
    static GetApi(app: App, plugin: QuickAdd, choiceExecutor: IChoiceExecutor): {
        inputPrompt: (header: string, placeholder?: string, value?: string) => Promise<string | undefined>;
        wideInputPrompt: (header: string, placeholder?: string, value?: string) => Promise<string | undefined>;
        yesNoPrompt: (header: string, text?: string) => Promise<boolean | undefined>;
        infoDialog: (header: string, text: string[] | string) => Promise<void>;
        suggester: (displayItems: string[] | ((value: string, index?: number, arr?: string[]) => string[]), actualItems: string[]) => Promise<string | undefined>;
        checkboxPrompt: (items: string[], selectedItems?: string[]) => Promise<string[] | undefined>;
        executeChoice: (choiceName: string, variables?: Record<string, unknown>) => Promise<void>;
        format: (input: string, variables?: {
            [key: string]: unknown;
        } | undefined, shouldClearVariables?: boolean) => Promise<string>;
        ai: {
            prompt: (prompt: string, model: Model, settings?: Partial<{
                variableName: string;
                shouldAssignVariables: boolean;
                modelOptions: Partial<OpenAIModelParameters>;
                showAssistantMessages: boolean;
                systemPrompt: string;
            }>) => Promise<{
                [key: string]: string;
            }>;
            chunkedPrompt: (text: string, promptTemplate: string, model: Model, settings?: Partial<{
                variableName: string;
                shouldAssignVariables: boolean;
                modelOptions: Partial<OpenAIModelParameters>;
                showAssistantMessages: boolean;
                systemPrompt: string;
                chunkSeparator: RegExp;
                chunkJoiner: string;
                shouldMerge: boolean;
            }>, existingVariables?: Record<string, unknown>) => Promise<{
                [x: string]: string;
            }>;
            getModels: () => readonly ["gpt-3.5-turbo", "gpt-3.5-turbo-16k", "gpt-3.5-turbo-1106", "gpt-4", "gpt-4-1106-preview", "gpt-4-32k", "text-davinci-003"];
            getMaxTokens: (model: Model) => 16384 | 4096 | 8192 | 32768 | 16385 | 128000;
            countTokens(text: string, model: Model): number;
        };
        utility: {
            getClipboard: () => Promise<string>;
            setClipboard: (text: string) => Promise<void>;
            getSelectedText: () => string | undefined;
        };
        date: {
            now: (format?: string, offset?: number) => string;
            tomorrow: (format?: string) => string;
            yesterday: (format?: string) => string;
        };
    };
    static inputPrompt(app: App, header: string, placeholder?: string, value?: string): Promise<string | undefined>;
    static wideInputPrompt(app: App, header: string, placeholder?: string, value?: string): Promise<string | undefined>;
    static yesNoPrompt(app: App, header: string, text?: string): Promise<boolean | undefined>;
    static infoDialog(app: App, header: string, text: string[] | string): Promise<void>;
    static suggester(app: App, displayItems: string[] | ((value: string, index?: number, arr?: string[]) => string[]), actualItems: string[]): Promise<string | undefined>;
    static checkboxPrompt(app: App, items: string[], selectedItems?: string[]): Promise<string[] | undefined>;
}
