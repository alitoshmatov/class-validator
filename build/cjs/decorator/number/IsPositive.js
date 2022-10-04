"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPositive = exports.isPositive = exports.IS_POSITIVE = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_POSITIVE = 'isPositive';
/**
 * Checks if the value is a positive number greater than zero.
 */
function isPositive(value) {
    return typeof value === 'number' && value > 0;
}
exports.isPositive = isPositive;
/**
 * Checks if the value is a positive number greater than zero.
 */
function IsPositive(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_POSITIVE,
        validator: {
            validate: (value, args) => isPositive(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.negativeNumber, validationOptions),
        },
    }, validationOptions);
}
exports.IsPositive = IsPositive;
//# sourceMappingURL=IsPositive.js.map