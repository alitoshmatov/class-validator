import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isISO31661Alpha2Validator from 'validator/lib/isISO31661Alpha2';
import Messages from '../../utils/messages';
export const IS_ISO31661_ALPHA_2 = 'isISO31661Alpha2';
/**
 * Check if the string is a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned country code.
 */
export function isISO31661Alpha2(value) {
    return typeof value === 'string' && isISO31661Alpha2Validator(value);
}
/**
 * Check if the string is a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned country code.
 */
export function IsISO31661Alpha2(validationOptions) {
    return ValidateBy({
        name: IS_ISO31661_ALPHA_2,
        validator: {
            validate: (value, args) => isISO31661Alpha2(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.alpha2Code, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsISO31661Alpha2.js.map