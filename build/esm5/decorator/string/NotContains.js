import { buildMessage, ValidateBy } from '../common/ValidateBy';
import containsValidator from 'validator/lib/contains';
import Messages from '../../utils/messages';
export var NOT_CONTAINS = 'notContains';
/**
 * Checks if the string does not contain the seed.
 * If given value is not a string, then it returns false.
 */
export function notContains(value, seed) {
    return typeof value === 'string' && !containsValidator(value, seed);
}
/**
 * Checks if the string does not contain the seed.
 * If given value is not a string, then it returns false.
 */
export function NotContains(seed, validationOptions) {
    return ValidateBy({
        name: NOT_CONTAINS,
        constraints: [seed],
        validator: {
            validate: function (value, args) { return notContains(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.notContainAString; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=NotContains.js.map