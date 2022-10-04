import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isISRCValidator from 'validator/lib/isISRC';
import Messages from '../../utils/messages';
export var IS_ISRC = 'isISRC';
/**
 * Check if the string is a ISRC.
 * If given value is not a string, then it returns false.
 */
export function isISRC(value) {
    return typeof value === 'string' && isISRCValidator(value);
}
/**
 * Check if the string is a ISRC.
 * If given value is not a string, then it returns false.
 */
export function IsISRC(validationOptions) {
    return ValidateBy({
        name: IS_ISRC,
        validator: {
            validate: function (value, args) { return isISRC(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.ISRC; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsISRC.js.map