import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isCreditCardValidator from 'validator/lib/isCreditCard';
import Messages from '../../utils/messages';
export const IS_CREDIT_CARD = 'isCreditCard';
/**
 * Checks if the string is a credit card.
 * If given value is not a string, then it returns false.
 */
export function isCreditCard(value) {
    return typeof value === 'string' && isCreditCardValidator(value);
}
/**
 * Checks if the string is a credit card.
 * If given value is not a string, then it returns false.
 */
export function IsCreditCard(validationOptions) {
    return ValidateBy({
        name: IS_CREDIT_CARD,
        validator: {
            validate: (value, args) => isCreditCard(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.creditCard, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsCreditCard.js.map