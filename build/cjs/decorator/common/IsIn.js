"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIn = exports.isIn = exports.IS_IN = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_IN = 'isIn';
/**
 * Checks if given value is in a array of allowed values.
 */
function isIn(value, possibleValues) {
    return !Array.isArray(possibleValues) || possibleValues.some(possibleValue => possibleValue === value);
}
exports.isIn = isIn;
/**
 * Checks if given value is in a array of allowed values.
 */
function IsIn(values, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_IN,
        constraints: [values],
        validator: {
            validate: (value, args) => isIn(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.followingValues, validationOptions),
        },
    }, validationOptions);
}
exports.IsIn = IsIn;
//# sourceMappingURL=IsIn.js.map