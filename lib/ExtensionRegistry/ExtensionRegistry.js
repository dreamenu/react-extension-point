"use strict";
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
            // @ts-ignore
            extensions[extensionName.toLowerCase()] = extension;
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