"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNegative = exports.isNegative = exports.IS_NEGATIVE = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_NEGATIVE = 'isNegative';
/**
 * Checks if the value is a negative number smaller than zero.
 */
function isNegative(value) {
    return typeof value === 'number' && value < 0;
}
exports.isNegative = isNegative;
/**
 * Checks if the value is a negative number smaller than zero.
 */
function IsNegative(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_NEGATIVE,
        validator: {
            validate: (value, args) => isNegative(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.negativeNumber, validationOptions),
        },
    }, validationOptions);
}
exports.IsNegative = IsNegative;
//# sourceMappingURL=IsNegative.js.map