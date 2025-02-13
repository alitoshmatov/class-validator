"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateString = exports.isDateString = exports.IS_DATE_STRING = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const IsISO8601_1 = require("./IsISO8601");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_DATE_STRING = 'isDateString';
/**
 * Alias for IsISO8601 validator
 */
function isDateString(value, options) {
    return (0, IsISO8601_1.isISO8601)(value, options);
}
exports.isDateString = isDateString;
/**
 * Alias for IsISO8601 validator
 */
function IsDateString(options, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_DATE_STRING,
        constraints: [options],
        validator: {
            validate: (value, args) => isDateString(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.ISO8601DateString, validationOptions),
        },
    }, validationOptions);
}
exports.IsDateString = IsDateString;
//# sourceMappingURL=IsDateString.js.map