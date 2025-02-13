import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isHalfWidthValidator from 'validator/lib/isHalfWidth';
import Messages from '../../utils/messages';
export const IS_HALF_WIDTH = 'isHalfWidth';
/**
 * Checks if the string contains any half-width chars.
 * If given value is not a string, then it returns false.
 */
export function isHalfWidth(value) {
    return typeof value === 'string' && isHalfWidthValidator(value);
}
/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 */
export function IsHalfWidth(validationOptions) {
    return ValidateBy({
        name: IS_HALF_WIDTH,
        validator: {
            validate: (value, args) => isHalfWidth(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.halfWidthChars, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsHalfWidth.js.map