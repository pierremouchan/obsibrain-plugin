import { Command } from "./Command";
import type { IChoiceCommand } from "./IChoiceCommand";
export declare class ChoiceCommand extends Command implements IChoiceCommand {
    choiceId: string;
    constructor(name: string, choiceId: string);
}
