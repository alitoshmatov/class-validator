import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isLengthValidator from 'validator/lib/isLength';
import Messages from '../../utils/messages';
export var MAX_LENGTH = 'maxLength';
/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function maxLength(value, max) {
    return typeof value === 'string' && isLengthValidator(value, { min: 0, max: max });
}
/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function MaxLength(max, validationOptions) {
    return ValidateBy({
        name: MAX_LENGTH,
        constraints: [max],
        validator: {
            validate: function (value, args) { return maxLength(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.shorterThanOrEqualTo; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=MaxLength.js.map