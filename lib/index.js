"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionRegistry = exports.ExtensionContext = void 0;
var ExtensionPoint_1 = require("./ExtensionPoint");
var ExtensionProvider_1 = require("./ExtensionProvider");
Object.defineProperty(exports, "ExtensionContext", { enumerable: true, get: function () { return ExtensionProvider_1.default; } });
__exportStar(require("./ExtensionRegistry"), exports);
var ExtensionRegistry_1 = require("./ExtensionRegistry");
Object.defineProperty(exports, "ExtensionRegistry", { enumerable: true, get: function () { return ExtensionRegistry_1.default; } });
exports.default = ExtensionPoint_1.default;
//# sourceMappingURL=index.js.map