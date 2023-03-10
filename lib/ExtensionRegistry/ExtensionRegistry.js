"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExtensionRegistry = void 0;
var validateExtensionName_1 = require("../internal/validateExtensionName");
var required = function (name) {
    throw new TypeError("".concat(name, " is required"));
};
var createExtensionRegistry = function () {
    var extensions = {};
    return {
        addExtension: function (extensionName, extension) {
            if (extension === void 0) { extension = required('extension'); }
            extensionName = (0, validateExtensionName_1.default)(extensionName);
            var lowercaseExtensionName = extensionName.toLowerCase();
            if (extensions[lowercaseExtensionName]) {
                extensions[lowercaseExtensionName] = __spreadArray(__spreadArray([], extensions[lowercaseExtensionName], true), [
                    extension,
                ], false);
            }
            else {
                extensions[lowercaseExtensionName] = [extension];
            }
        },
        getExtension: function (extensionName) {
            extensionName = (0, validateExtensionName_1.default)(extensionName);
            // @ts-ignore
            return extensions[extensionName.toLowerCase()];
        },
    };
};
exports.createExtensionRegistry = createExtensionRegistry;
exports.default = (0, exports.createExtensionRegistry)();
//# sourceMappingURL=ExtensionRegistry.js.map