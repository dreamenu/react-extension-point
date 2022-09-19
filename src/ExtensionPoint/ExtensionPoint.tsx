import * as React from 'react';
import ExtensionContext from '../ExtensionProvider';

import { ExtensionRegistry } from '../ExtensionRegistry/index';
import validateExtensionName from '../internal/validateExtensionName';

interface ExtensionPointProps {
  extensionName: string;
  registry?: ExtensionRegistry;
  children?: any;
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
  registry =
    registry ||
    React.useContext(ExtensionContext) ||
    require('../ExtensionRegistry').default;
  const Extension =
    registry && registry.getExtension && registry.getExtension(extensionName);

  if (typeof children === 'function') {
    return children(Extension, props) || null;
  } else if (typeof Extension === 'undefined') {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, props);
    } else {
      return children;
    }
  } else if (!Extension) {
    return null;
  }
  return <Extension {...props} />;
};

export default ExtensionPoint;
