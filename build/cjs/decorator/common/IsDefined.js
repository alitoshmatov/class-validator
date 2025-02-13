"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDefined = exports.isDefined = exports.IS_DEFINED = void 0;
const ValidateBy_1 = require("./ValidateBy");
const ValidationTypes_1 = require("../../validation/ValidationTypes");
const messages_1 = __importDefault(require("../../utils/messages"));
// isDefined is (yet) a special case
exports.IS_DEFINED = ValidationTypes_1.ValidationTypes.IS_DEFINED;
/**
 * Checks if value is defined (!== undefined, !== null).
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
exports.isDefined = isDefined;
/**
 * Checks if value is defined (!== undefined, !== null).
 */
function IsDefined(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_DEFINED,
        validator: {
            validate: (value) => isDefined(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.notBeNullOrUndefined, validationOptions),
        },
    }, validationOptions);
}
exports.IsDefined = IsDefined;
//# sourceMappingURL=IsDefined.js.map