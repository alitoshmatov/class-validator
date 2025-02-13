import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isMimeTypeValidator from 'validator/lib/isMimeType';
import Messages from '../../utils/messages';
export const IS_MIME_TYPE = 'isMimeType';
/**
 * Check if the string matches to a valid MIME type format
 * If given value is not a string, then it returns false.
 */
export function isMimeType(value) {
    return typeof value === 'string' && isMimeTypeValidator(value);
}
/**
 * Check if the string matches to a valid MIME type format
 * If given value is not a string, then it returns false.
 */
export function IsMimeType(validationOptions) {
    return ValidateBy({
        name: IS_MIME_TYPE,
        validator: {
            validate: (value, args) => isMimeType(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.MIMEType, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsMimeType.js.map