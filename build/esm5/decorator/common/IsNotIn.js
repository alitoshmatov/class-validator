import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export var IS_NOT_IN = 'isNotIn';
/**
 * Checks if given value not in a array of allowed values.
 */
export function isNotIn(value, possibleValues) {
    return !Array.isArray(possibleValues) || !possibleValues.some(function (possibleValue) { return possibleValue === value; });
}
/**
 * Checks if given value not in a array of allowed values.
 */
export function IsNotIn(values, validationOptions) {
    return ValidateBy({
        name: IS_NOT_IN,
        constraints: [values],
        validator: {
            validate: function (value, args) { return isNotIn(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.notBeFollowingValues; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsNotIn.js.map