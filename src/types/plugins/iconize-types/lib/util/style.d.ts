import IconFolderPlugin from '../../main';
interface Margin {
    top: number;
    right: number;
    left: number;
    bottom: number;
}
declare const _default: {
    applyAll: (plugin: IconFolderPlugin, iconString: string, container: HTMLElement) => string;
    setMargin: (el: HTMLElement, margin: Margin) => HTMLElement;
    refreshIconNodes: (plugin: IconFolderPlugin, applyStyles?: (plugin: IconFolderPlugin, iconString: string, container: HTMLElement) => string) => void;
};
export default _default;
