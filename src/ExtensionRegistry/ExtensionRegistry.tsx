import validateExtensionName from '../internal/validateExtensionName';

export interface ExtensionRegistry {
  addExtension: (name: string, extension: any) => void;
  getExtension: (name: string) => any;
}

const required = (name: string) => {
  throw new TypeError(`${name} is required`);
};

export const createExtensionRegistry = () => {
  const extensions: any = {};
  return {
    addExtension(
      extensionName: string,
      extension: JSX.Element | any = required('extension')
    ) {
      extensionName = validateExtensionName(extensionName);
      const lowercaseExtensionName: string = extensionName.toLowerCase();
      if (extensions[lowercaseExtensionName]) {
        extensions[lowercaseExtensionName] = [
          ...extensions[lowercaseExtensionName],
          extension,
        ];
      } else {
        extensions[lowercaseExtensionName] = [extension];
      }
    },

    getExtension(extensionName: string) {
      extensionName = validateExtensionName(extensionName);
      // @ts-ignore
      return extensions[extensionName.toLowerCase()];
    },
  };
};

export default createExtensionRegistry();
