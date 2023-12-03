import type { Models_And_Ask_Me } from "src/ai/models";
import { Command } from "../Command";
import { CommandType } from "../CommandType";
import type { IAIAssistantCommand } from "./IAIAssistantCommand";
import type { OpenAIModelParameters } from "src/ai/OpenAIModelParameters";
export declare class AIAssistantCommand extends Command implements IAIAssistantCommand {
    id: string;
    name: string;
    type: CommandType;
    model: Models_And_Ask_Me;
    systemPrompt: string;
    outputVariableName: string;
    promptTemplate: {
        enable: boolean;
        name: string;
    };
    modelParameters: Partial<OpenAIModelParameters>;
    constructor();
}
