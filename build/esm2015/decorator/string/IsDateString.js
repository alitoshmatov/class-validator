import { buildMessage, ValidateBy } from '../common/ValidateBy';
import { isISO8601 } from './IsISO8601';
import Messages from '../../utils/messages';
export const IS_DATE_STRING = 'isDateString';
/**
 * Alias for IsISO8601 validator
 */
export function isDateString(value, options) {
    return isISO8601(value, options);
}
/**
 * Alias for IsISO8601 validator
 */
export function IsDateString(options, validationOptions) {
    return ValidateBy({
        name: IS_DATE_STRING,
        constraints: [options],
        validator: {
            validate: (value, args) => isDateString(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.ISO8601DateString, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsDateString.js.map