import type IChoice from "../types/choices/IChoice";
import { QuickAddEngine } from "./QuickAddEngine";
export declare abstract class QuickAddChoiceEngine extends QuickAddEngine {
    abstract choice: IChoice;
}
