"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsArray = exports.isArray = exports.IS_ARRAY = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_ARRAY = 'isArray';
/**
 * Checks if a given value is an array
 */
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
/**
 * Checks if a given value is an array
 */
function IsArray(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_ARRAY,
        validator: {
            validate: (value, args) => isArray(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.array, validationOptions),
        },
    }, validationOptions);
}
exports.IsArray = IsArray;
//# sourceMappingURL=IsArray.js.map