"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsString = exports.isString = exports.IS_STRING = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_STRING = 'isString';
/**
 * Checks if a given value is a real string.
 */
function isString(value) {
    return value instanceof String || typeof value === 'string';
}
exports.isString = isString;
/**
 * Checks if a given value is a real string.
 */
function IsString(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_STRING,
        validator: {
            validate: (value, args) => isString(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.string, validationOptions),
        },
    }, validationOptions);
}
exports.IsString = IsString;
//# sourceMappingURL=IsString.js.map