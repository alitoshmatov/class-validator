"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDate = exports.isDate = exports.IS_DATE = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_DATE = 'isDate';
/**
 * Checks if a given value is a date.
 */
function isDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
}
exports.isDate = isDate;
/**
 * Checks if a value is a date.
 */
function IsDate(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_DATE,
        validator: {
            validate: (value, args) => isDate(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.dateInstance, validationOptions),
        },
    }, validationOptions);
}
exports.IsDate = IsDate;
//# sourceMappingURL=IsDate.js.map