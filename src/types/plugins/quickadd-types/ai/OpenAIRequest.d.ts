import type { Model } from "./models";
import type { OpenAIModelParameters } from "./OpenAIModelParameters";
type ReqResponse = {
    id: string;
    model: string;
    object: string;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
    choices: {
        finish_reason: string;
        index: number;
        message: {
            content: string;
            role: string;
        };
    }[];
    created: number;
};
export declare function OpenAIRequest(apiKey: string, model: Model, systemPrompt: string, modelParams?: Partial<OpenAIModelParameters>): (prompt: string) => Promise<ReqResponse>;
export {};
