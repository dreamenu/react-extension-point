import * as React from 'react';
import { ExtensionRegistry } from '../ExtensionRegistry/index';
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
declare const ExtensionPoint: React.FC<ExtensionPointProps>;
export default ExtensionPoint;
declare const t: JSX.Element;
export { t };
