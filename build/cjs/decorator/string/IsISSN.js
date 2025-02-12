"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsISSN = exports.isISSN = exports.IS_ISSN = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isISSN_1 = __importDefault(require("validator/lib/isISSN"));
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_ISSN = 'isISSN';
/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
function isISSN(value, options) {
    return typeof value === 'string' && (0, isISSN_1.default)(value, options);
}
exports.isISSN = isISSN;
/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
function IsISSN(options, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_ISSN,
        constraints: [options],
        validator: {
            validate: (value, args) => isISSN(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.ISSN, validationOptions),
        },
    }, validationOptions);
}
exports.IsISSN = IsISSN;
//# sourceMappingURL=IsISSN.js.map