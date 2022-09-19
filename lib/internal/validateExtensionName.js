"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (value) {
    if (!value || typeof value !== 'string') {
        throw new TypeError("extensionName is required to be a string and can't be: \"".concat(value, "\" (").concat(typeof value, ")"));
    }
    return value.trim();
});
//# sourceMappingURL=validateExtensionName.js.map