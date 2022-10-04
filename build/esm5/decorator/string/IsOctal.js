import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isOctalValidator from 'validator/lib/isOctal';
import Messages from '../../utils/messages';
export var IS_OCTAL = 'isOctal';
/**
 * Check if the string is a valid octal number.
 * If given value is not a string, then it returns false.
 */
export function isOctal(value) {
    return typeof value === 'string' && isOctalValidator(value);
}
/**
 * Check if the string is a valid octal number.
 * If given value is not a string, then it returns false.
 */
export function IsOctal(validationOptions) {
    return ValidateBy({
        name: IS_OCTAL,
        validator: {
            validate: function (value, args) { return isOctal(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.octalNumber; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsOctal.js.map