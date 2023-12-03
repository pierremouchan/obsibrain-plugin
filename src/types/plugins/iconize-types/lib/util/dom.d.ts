import IconFolderPlugin from '../../main';
interface RemoveOptions {
    /**
     * The container that will be used to remove the icon. If not defined, it will try to
     * find the path within the `document`.
     */
    container?: HTMLElement;
}
interface CreateOptions {
    /**
     * The container that will be used to insert the icon. If not defined, it will try to
     * find the path within the `document`.
     */
    container?: HTMLElement;
    /**
     * The color that will be applied to the icon.
     */
    color?: string;
}
declare const _default: {
    setIconForNode: (plugin: IconFolderPlugin, iconName: string, node: HTMLElement, color?: string) => void;
    createIconNode: (plugin: IconFolderPlugin, path: string, iconName: string, options?: CreateOptions) => void;
    doesElementHasIconNode: (element: HTMLElement) => boolean;
    getIconFromElement: (element: HTMLElement) => string;
    removeIconInNode: (el: HTMLElement) => void;
    removeIconInPath: (path: string, options?: RemoveOptions) => void;
};
export default _default;
