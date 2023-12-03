import GenericWideInputPrompt from "./GenericWideInputPrompt/GenericWideInputPrompt";
import GenericInputPrompt from "./GenericInputPrompt/GenericInputPrompt";
export default class InputPrompt {
    factory(): typeof GenericInputPrompt | typeof GenericWideInputPrompt;
}
