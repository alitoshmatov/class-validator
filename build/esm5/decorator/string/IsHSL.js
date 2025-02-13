import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isHSLValidator from 'validator/lib/isHSL';
import Messages from '../../utils/messages';
export var IS_HSL = 'isHSL';
/**
 * Check if the string is an HSL (hue, saturation, lightness, optional alpha) color based on CSS Colors Level 4 specification.
 * Comma-separated format supported. Space-separated format supported with the exception of a few edge cases (ex: hsl(200grad+.1%62%/1)).
 * If given value is not a string, then it returns false.
 */
export function isHSL(value) {
    return typeof value === 'string' && isHSLValidator(value);
}
/**
 * Check if the string is an HSL (hue, saturation, lightness, optional alpha) color based on CSS Colors Level 4 specification.
 * Comma-separated format supported. Space-separated format supported with the exception of a few edge cases (ex: hsl(200grad+.1%62%/1)).
 * If given value is not a string, then it returns false.
 */
export function IsHSL(validationOptions) {
    return ValidateBy({
        name: IS_HSL,
        validator: {
            validate: function (value, args) { return isHSL(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.HSLColor; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsHSL.js.map