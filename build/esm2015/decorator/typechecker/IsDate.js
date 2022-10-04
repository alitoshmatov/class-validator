import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export const IS_DATE = 'isDate';
/**
 * Checks if a given value is a date.
 */
export function isDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
}
/**
 * Checks if a value is a date.
 */
export function IsDate(validationOptions) {
    return ValidateBy({
        name: IS_DATE,
        validator: {
            validate: (value, args) => isDate(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.dateInstance, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsDate.js.map