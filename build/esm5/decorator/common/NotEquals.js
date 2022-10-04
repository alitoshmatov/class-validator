import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export var NOT_EQUALS = 'notEquals';
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
            validate: function (value, args) { return notEquals(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.notBeEqualTo; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=NotEquals.js.map