import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export const NOT_EQUALS = 'notEquals';
/**
 * Checks if value does not match ("!==") the comparison.
 */
export function notEquals(value, comparison) {
    return value !== comparison;
}
/**
 * Checks if value does not match ("!==") the comparison.
 */
export function NotEquals(comparison, validationOptions) {
    return ValidateBy({
        name: NOT_EQUALS,
        constraints: [comparison],
        validator: {
            validate: (value, args) => notEquals(value, args.constraints[0]),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.notBeEqualTo, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=NotEquals.js.map