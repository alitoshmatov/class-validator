import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isISSNValidator from 'validator/lib/isISSN';
import Messages from '../../utils/messages';
export const IS_ISSN = 'isISSN';
/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
export function isISSN(value, options) {
    return typeof value === 'string' && isISSNValidator(value, options);
}
/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
export function IsISSN(options, validationOptions) {
    return ValidateBy({
        name: IS_ISSN,
        constraints: [options],
        validator: {
            validate: (value, args) => isISSN(value, args.constraints[0]),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.ISSN, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsISSN.js.map