import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isLengthValidator from 'validator/lib/isLength';
import Messages from '../../utils/messages';
export const IS_LENGTH = 'isLength';
/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function length(value, min, max) {
    return typeof value === 'string' && isLengthValidator(value, { min, max });
}
/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function Length(min, max, validationOptions) {
    return ValidateBy({
        name: IS_LENGTH,
        constraints: [min, max],
        validator: {
            validate: (value, args) => length(value, args.constraints[0], args.constraints[1]),
            defaultMessage: buildMessage((eachPrefix, args) => {
                const isMinLength = args.constraints[0] !== null && args.constraints[0] !== undefined;
                const isMaxLength = args.constraints[1] !== null && args.constraints[1] !== undefined;
                if (isMinLength && (!args.value || args.value.length < args.constraints[0])) {
                    return eachPrefix + Messages.longerThanOrEqualTo;
                }
                else if (isMaxLength && args.value.length > args.constraints[1]) {
                    return eachPrefix + Messages.shorterThanOrEqualTo;
                }
                return eachPrefix + Messages.longerThanOrEqualToAndShorter;
            }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=Length.js.map