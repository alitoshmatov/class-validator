import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isRFC3339Validator from 'validator/lib/isRFC3339';
import Messages from '../../utils/messages';
export var IS_RFC_3339 = 'isRFC3339';
/**
 * Check if the string is a valid RFC 3339 date.
 * If given value is not a string, then it returns false.
 */
export function isRFC3339(value) {
    return typeof value === 'string' && isRFC3339Validator(value);
}
/**
 * Check if the string is a valid RFC 3339 date.
 * If given value is not a string, then it returns false.
 */
export function IsRFC3339(validationOptions) {
    return ValidateBy({
        name: IS_RFC_3339,
        validator: {
            validate: function (value, args) { return isRFC3339(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.RFC3339date; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsRFC3339.js.map