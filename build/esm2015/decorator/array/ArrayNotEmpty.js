import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export const ARRAY_NOT_EMPTY = 'arrayNotEmpty';
/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
export function arrayNotEmpty(array) {
    return Array.isArray(array) && array.length > 0;
}
/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
export function ArrayNotEmpty(validationOptions) {
    return ValidateBy({
        name: ARRAY_NOT_EMPTY,
        validator: {
            validate: (value, args) => arrayNotEmpty(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.notBeEmpty, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=ArrayNotEmpty.js.map