import { Choice } from "./Choice";
import type IChoice from "./IChoice";
import type IMultiChoice from "./IMultiChoice";
export declare class MultiChoice extends Choice implements IMultiChoice {
    choices: IChoice[];
    collapsed: boolean;
    constructor(name: string);
    addChoice(choice: IChoice): MultiChoice;
    addChoices(choices: IChoice[]): MultiChoice;
}
