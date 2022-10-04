import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isByteLengthValidator from 'validator/lib/isByteLength';
import Messages from '../../utils/messages';
export var IS_BYTE_LENGTH = 'isByteLength';
/**
 * Checks if the string's length (in bytes) falls in a range.
 * If given value is not a string, then it returns false.
 */
export function isByteLength(value, min, max) {
    return typeof value === 'string' && isByteLengthValidator(value, { min: min, max: max });
}
/**
 * Checks if the string's length (in bytes) falls in a range.
 * If given value is not a string, then it returns false.
 */
export function IsByteLength(min, max, validationOptions) {
    return ValidateBy({
        name: IS_BYTE_LENGTH,
        constraints: [min, max],
        validator: {
            validate: function (value, args) { return isByteLength(value, args.constraints[0], args.constraints[1]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.byteLengthRange; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsByteLength.js.map