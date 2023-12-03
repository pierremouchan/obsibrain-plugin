import { RangeSet, RangeValue, StateField } from '@codemirror/state';
export type PositionField = StateField<RangeSet<IconPosition>>;
declare class IconPosition extends RangeValue {
    text: string;
    constructor(text: string);
    get iconId(): string;
    eq(other: RangeValue): boolean;
}
/**
 * Builds a position field for the editor state. This field will track the
 * positions of the icons in the document.
 **/
export declare const buildPositionField: () => StateField<RangeSet<IconPosition>>;
export {};
