import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isSurrogatePairValidator from 'validator/lib/isSurrogatePair';
import Messages from '../../utils/messages';
export var IS_SURROGATE_PAIR = 'isSurrogatePair';
/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
export function isSurrogatePair(value) {
    return typeof value === 'string' && isSurrogatePairValidator(value);
}
/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
export function IsSurrogatePair(validationOptions) {
    return ValidateBy({
        name: IS_SURROGATE_PAIR,
        validator: {
            validate: function (value, args) { return isSurrogatePair(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.surrogatePairChars; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsSurrogatePair.js.map