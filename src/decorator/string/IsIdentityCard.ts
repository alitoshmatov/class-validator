import { ValidationOptions } from '../ValidationOptions';
import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isIdentityCardValidator from 'validator/lib/isIdentityCard';
import ValidatorJS from 'validator';
import Messages from '../../utils/messages';

export const IS_IDENTITY_CARD = 'isIdentityCard';

/**
 * Check if the string is a valid identity card code.
 * locale is one of ['ES', 'zh-TW', 'he-IL', 'ar-TN'] OR 'any'. If 'any' is used, function will check if any of the locals match.
 * Defaults to 'any'.
 * If given value is not a string, then it returns false.
 */
export function isIdentityCard(value: unknown, locale: ValidatorJS.IdentityCardLocale): boolean {
  return typeof value === 'string' && isIdentityCardValidator(value, locale);
}

/**
 * Check if the string is a valid identity card code.
 * locale is one of ['ES', 'zh-TW', 'he-IL', 'ar-TN'] OR 'any'. If 'any' is used, function will check if any of the locals match.
 * Defaults to 'any'.
 * If given value is not a string, then it returns false.
 */
export function IsIdentityCard(
  locale?: ValidatorJS.IdentityCardLocale,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_IDENTITY_CARD,
      constraints: [locale],
      validator: {
        validate: (value, args): boolean => isIdentityCard(value, args.constraints[0]),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.IDCardNumber, validationOptions),
      },
    },
    validationOptions
  );
}
