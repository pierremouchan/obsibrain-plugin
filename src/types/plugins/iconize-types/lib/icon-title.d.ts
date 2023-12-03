interface Options {
    fontSize?: number;
}
declare const _default: {
    add: (inlineTitleEl: HTMLElement, svgElement: string, options?: Options) => void;
    updateStyle: (inlineTitleEl: HTMLElement, options: Options) => void;
    hide: (inlineTitleEl: HTMLElement) => void;
    remove: (inlineTitleEl: HTMLElement) => void;
};
export default _default;
