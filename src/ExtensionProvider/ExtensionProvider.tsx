import * as React from 'react';
import {
  createExtensionRegistry,
  ExtensionRegistry,
} from '../ExtensionRegistry';

const ExtensionContext = React.createContext<ExtensionRegistry>(
  createExtensionRegistry()
);

export default ExtensionContext;
