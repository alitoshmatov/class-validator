import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export var EQUALS = 'equals';
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
            validate: function (value, args) { return equals(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.equalTo; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=Equals.js.map