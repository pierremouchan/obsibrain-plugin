import type { Model } from "./models";
import type { OpenAIModelParameters } from "./OpenAIModelParameters";
export declare const getTokenCount: (text: string, model: Model) => number;
interface Params {
    apiKey: string;
    model: Model;
    systemPrompt: string;
    outputVariableName: string;
    promptTemplate: {
        enable: boolean;
        name: string;
    };
    promptTemplateFolder: string;
    showAssistantMessages: boolean;
    modelOptions: Partial<OpenAIModelParameters>;
}
export declare function runAIAssistant(settings: Params, formatter: (input: string) => Promise<string>): Promise<{
    [x: string]: string;
} | undefined>;
type PromptParams = Omit<Params & {
    prompt: string;
}, "promptTemplate" | "promptTemplateFolder">;
export declare function Prompt(settings: PromptParams, formatter: (input: string) => Promise<string>): Promise<{
    [x: string]: string;
} | undefined>;
type ChunkedPromptParams = Omit<PromptParams & {
    chunkSeparator: RegExp;
    resultJoiner: string;
    text: string;
    promptTemplate: string;
    shouldMerge: boolean;
}, "prompt">;
export declare function ChunkedPrompt(settings: ChunkedPromptParams, formatter: (input: string, variables: {
    [k: string]: unknown;
}) => Promise<string>): Promise<{
    [x: string]: string;
} | undefined>;
export {};
