import { Command } from "../Command";
import type IChoice from "../../choices/IChoice";
import type { INestedChoiceCommand } from "./INestedChoiceCommand";
export declare class NestedChoiceCommand extends Command implements INestedChoiceCommand {
    choice: IChoice;
    constructor(choice: IChoice);
}
