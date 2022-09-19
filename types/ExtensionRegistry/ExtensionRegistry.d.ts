/// <reference types="react" />
export interface ExtensionRegistry {
    addExtension: (name: string, extension: any) => void;
    getExtension: (name: string) => any;
}
export declare const createExtensionRegistry: () => {
    addExtension(extensionName: string, extension?: JSX.Element | any): void;
    getExtension(extensionName: string): any;
};
declare const _default: {
    addExtension(extensionName: string, extension?: any): void;
    getExtension(extensionName: string): any;
};
export default _default;
