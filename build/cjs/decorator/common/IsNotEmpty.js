"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotEmpty = exports.isNotEmpty = exports.IS_NOT_EMPTY = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_NOT_EMPTY = 'isNotEmpty';
/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
function isNotEmpty(value) {
    return value !== '' && value !== null && value !== undefined;
}
exports.isNotEmpty = isNotEmpty;
/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
function IsNotEmpty(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_NOT_EMPTY,
        validator: {
            validate: (value, args) => isNotEmpty(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.notBeEmpty, validationOptions),
        },
    }, validationOptions);
}
exports.IsNotEmpty = IsNotEmpty;
//# sourceMappingURL=IsNotEmpty.js.map