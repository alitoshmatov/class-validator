import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isHexadecimalValidator from 'validator/lib/isHexadecimal';
import Messages from '../../utils/messages';
export var IS_HEXADECIMAL = 'isHexadecimal';
/**
 * Checks if the string is a hexadecimal number.
 * If given value is not a string, then it returns false.
 */
export function isHexadecimal(value) {
    return typeof value === 'string' && isHexadecimalValidator(value);
}
/**
 * Checks if the string is a hexadecimal number.
 * If given value is not a string, then it returns false.
 */
export function IsHexadecimal(validationOptions) {
    return ValidateBy({
        name: IS_HEXADECIMAL,
        validator: {
            validate: function (value, args) { return isHexadecimal(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.hexNumber; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsHexadecimal.js.map