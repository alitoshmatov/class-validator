import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export const IS_INT = 'isInt';
/**
 * Checks if value is an integer.
 */
export function isInt(val) {
    return typeof val === 'number' && Number.isInteger(val);
}
/**
 * Checks if value is an integer.
 */
export function IsInt(validationOptions) {
    return ValidateBy({
        name: IS_INT,
        validator: {
            validate: (value, args) => isInt(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.integerNumber, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsInt.js.map