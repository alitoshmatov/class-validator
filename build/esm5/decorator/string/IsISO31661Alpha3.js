import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isISO31661Alpha3Validator from 'validator/lib/isISO31661Alpha3';
import Messages from '../../utils/messages';
export var IS_ISO31661_ALPHA_3 = 'isISO31661Alpha3';
/**
 * Check if the string is a valid [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) officially assigned country code.
 */
export function isISO31661Alpha3(value) {
    return typeof value === 'string' && isISO31661Alpha3Validator(value);
}
/**
 * Check if the string is a valid [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) officially assigned country code.
 */
export function IsISO31661Alpha3(validationOptions) {
    return ValidateBy({
        name: IS_ISO31661_ALPHA_3,
        validator: {
            validate: function (value, args) { return isISO31661Alpha3(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.alpha3Code; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsISO31661Alpha3.js.map