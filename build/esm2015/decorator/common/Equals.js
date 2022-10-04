import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export const EQUALS = 'equals';
/**
 * Checks if value matches ("===") the comparison.
 */
export function equals(value, comparison) {
    return value === comparison;
}
/**
 * Checks if value matches ("===") the comparison.
 */
export function Equals(comparison, validationOptions) {
    return ValidateBy({
        name: EQUALS,
        constraints: [comparison],
        validator: {
            validate: (value, args) => equals(value, args.constraints[0]),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.equalTo, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=Equals.js.map