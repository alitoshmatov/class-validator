import { buildMessage, ValidateBy } from '../common/ValidateBy';
import containsValidator from 'validator/lib/contains';
import Messages from '../../utils/messages';
export const CONTAINS = 'contains';
/**
 * Checks if the string contains the seed.
 * If given value is not a string, then it returns false.
 */
export function contains(value, seed) {
    return typeof value === 'string' && containsValidator(value, seed);
}
/**
 * Checks if the string contains the seed.
 * If given value is not a string, then it returns false.
 */
export function Contains(seed, validationOptions) {
    return ValidateBy({
        name: CONTAINS,
        constraints: [seed],
        validator: {
            validate: (value, args) => contains(value, args.constraints[0]),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.containAString, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=Contains.js.map