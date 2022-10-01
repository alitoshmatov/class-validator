"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsBoolean = exports.isBoolean = exports.IS_BOOLEAN = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_BOOLEAN = 'isBoolean';
/**
 * Checks if a given value is a boolean.
 */
function isBoolean(value) {
    return value instanceof Boolean || typeof value === 'boolean';
}
exports.isBoolean = isBoolean;
/**
 * Checks if a value is a boolean.
 */
function IsBoolean(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_BOOLEAN,
        validator: {
            validate: (value, args) => isBoolean(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.booleanValue, validationOptions),
        },
    }, validationOptions);
}
exports.IsBoolean = IsBoolean;
//# sourceMappingURL=IsBoolean.js.map