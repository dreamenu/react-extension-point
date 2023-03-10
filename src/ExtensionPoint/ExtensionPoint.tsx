import * as React from 'react';
import { cloneElement, isValidElement, useContext } from 'react';
import ExtensionContext from '../ExtensionProvider';

import { ExtensionRegistry } from '../ExtensionRegistry/index';
import validateExtensionName from '../internal/validateExtensionName';

interface ExtensionPointProps {
  extensionName: string;
  registry?: ExtensionRegistry;
  children?: any;
  [key: string]: any;
}

/**
 * Marks an extensible part of the component this is rendered in.
 *
 * @param {String} extensionName the name of the Extension that should be rendered here.
 *
 * @since 1.0
 */
const ExtensionPoint: React.FC<ExtensionPointProps> = ({
  extensionName = validateExtensionName(),
  children = null,
  registry,
  ...props
}) => {
  registry = registry || useContext(ExtensionContext);
  const extensions =
    registry && registry.getExtension && registry.getExtension(extensionName);

  if (typeof children === 'function') {
    return children(extensions, props) || null;
  } else if (typeof extensions === 'undefined') {
    if (isValidElement(children)) {
      return cloneElement(children, props);
    } else {
      return children;
    }
  } else if (!extensions) {
    return null;
  }
  return (
    <>
      {extensions.map((Extension: any, index: number) => (
        <Extension key={index} {...props} />
      ))}
    </>
  );
};

export default ExtensionPoint;

const t = <ExtensionPoint extensionName="Test" />;
export { t };
