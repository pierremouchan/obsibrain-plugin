import type { ChoiceType } from "./choiceType";
import type IChoice from "./IChoice";
export declare abstract class Choice implements IChoice {
    id: string;
    name: string;
    type: ChoiceType;
    command: boolean;
    protected constructor(name: string, type: ChoiceType);
}
