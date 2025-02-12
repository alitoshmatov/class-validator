import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isAsciiValidator from 'validator/lib/isAscii';
import Messages from '../../utils/messages';
export const IS_ASCII = 'isAscii';
/**
 * Checks if the string contains ASCII chars only.
 * If given value is not a string, then it returns false.
 */
export function isAscii(value) {
    return typeof value === 'string' && isAsciiValidator(value);
}
/**
 * Checks if the string contains ASCII chars only.
 * If given value is not a string, then it returns false.
 */
export function IsAscii(validationOptions) {
    return ValidateBy({
        name: IS_ASCII,
        validator: {
            validate: (value, args) => isAscii(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.onlyASCIIChars, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsAscii.js.map