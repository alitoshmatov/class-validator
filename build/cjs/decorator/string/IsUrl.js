"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUrl = exports.isURL = exports.IS_URL = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isURL_1 = __importDefault(require("validator/lib/isURL"));
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_URL = 'isUrl';
/**
 * Checks if the string is an url.
 * If given value is not a string, then it returns false.
 */
function isURL(value, options) {
    return typeof value === 'string' && (0, isURL_1.default)(value, options);
}
exports.isURL = isURL;
/**
 * Checks if the string is an url.
 * If given value is not a string, then it returns false.
 */
function IsUrl(options, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_URL,
        constraints: [options],
        validator: {
            validate: (value, args) => isURL(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.URLAddress, validationOptions),
        },
    }, validationOptions);
}
exports.IsUrl = IsUrl;
//# sourceMappingURL=IsUrl.js.map