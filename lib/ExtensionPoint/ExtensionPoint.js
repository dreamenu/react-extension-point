"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = void 0;
var React = require("react");
var react_1 = require("react");
var ExtensionProvider_1 = require("../ExtensionProvider");
var validateExtensionName_1 = require("../internal/validateExtensionName");
/**
 * Marks an extensible part of the component this is rendered in.
 *
 * @param {String} extensionName the name of the Extension that should be rendered here.
 *
 * @since 1.0
 */
var ExtensionPoint = function (_a) {
    var _b = _a.extensionName, extensionName = _b === void 0 ? (0, validateExtensionName_1.default)() : _b, _c = _a.children, children = _c === void 0 ? null : _c, registry = _a.registry, props = __rest(_a, ["extensionName", "children", "registry"]);
    registry = registry || (0, react_1.useContext)(ExtensionProvider_1.default);
    var extensions = registry && registry.getExtension && registry.getExtension(extensionName);
    if (typeof children === 'function') {
        return children(extensions, props) || null;
    }
    else if (typeof extensions === 'undefined') {
        if ((0, react_1.isValidElement)(children)) {
            return (0, react_1.cloneElement)(children, props);
        }
        else {
            return children;
        }
    }
    else if (!extensions) {
        return null;
    }
    return (React.createElement(React.Fragment, null, extensions.map(function (Extension, index) { return (React.createElement(Extension, __assign({ key: index }, props))); })));
};
exports.default = ExtensionPoint;
var t = React.createElement(ExtensionPoint, { extensionName: "Test" });
exports.t = t;
//# sourceMappingURL=ExtensionPoint.js.map