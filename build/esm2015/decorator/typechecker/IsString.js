import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export const IS_STRING = 'isString';
/**
 * Checks if a given value is a real string.
 */
export function isString(value) {
    return value instanceof String || typeof value === 'string';
}
/**
 * Checks if a given value is a real string.
 */
export function IsString(validationOptions) {
    return ValidateBy({
        name: IS_STRING,
        validator: {
            validate: (value, args) => isString(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.string, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsString.js.map