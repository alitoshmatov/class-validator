import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export const IS_ARRAY = 'isArray';
/**
 * Checks if a given value is an array
 */
export function isArray(value) {
    return Array.isArray(value);
}
/**
 * Checks if a given value is an array
 */
export function IsArray(validationOptions) {
    return ValidateBy({
        name: IS_ARRAY,
        validator: {
            validate: (value, args) => isArray(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.array, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsArray.js.map