"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotIn = exports.isNotIn = exports.IS_NOT_IN = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_NOT_IN = 'isNotIn';
/**
 * Checks if given value not in a array of allowed values.
 */
function isNotIn(value, possibleValues) {
    return !Array.isArray(possibleValues) || !possibleValues.some(possibleValue => possibleValue === value);
}
exports.isNotIn = isNotIn;
/**
 * Checks if given value not in a array of allowed values.
 */
function IsNotIn(values, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_NOT_IN,
        constraints: [values],
        validator: {
            validate: (value, args) => isNotIn(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.notBeFollowingValues, validationOptions),
        },
    }, validationOptions);
}
exports.IsNotIn = IsNotIn;
//# sourceMappingURL=IsNotIn.js.map