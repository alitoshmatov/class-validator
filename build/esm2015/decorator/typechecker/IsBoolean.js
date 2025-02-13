import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export const IS_BOOLEAN = 'isBoolean';
/**
 * Checks if a given value is a boolean.
 */
export function isBoolean(value) {
    return value instanceof Boolean || typeof value === 'boolean';
}
/**
 * Checks if a value is a boolean.
 */
export function IsBoolean(validationOptions) {
    return ValidateBy({
        name: IS_BOOLEAN,
        validator: {
            validate: (value, args) => isBoolean(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.booleanValue, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsBoolean.js.map