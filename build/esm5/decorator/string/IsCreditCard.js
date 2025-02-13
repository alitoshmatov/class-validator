import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isCreditCardValidator from 'validator/lib/isCreditCard';
import Messages from '../../utils/messages';
export var IS_CREDIT_CARD = 'isCreditCard';
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
            validate: function (value, args) { return isCreditCard(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.creditCard; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsCreditCard.js.map