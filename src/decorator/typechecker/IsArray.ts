import { ValidationOptions } from '../ValidationOptions';
import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';

export const IS_ARRAY = 'isArray';

/**
 * Checks if a given value is an array
 */
export function isArray(value: unknown): boolean {
  return Array.isArray(value);
}

/**
 * Checks if a given value is an array
 */
export function IsArray(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ARRAY,
      validator: {
        validate: (value, args): boolean => isArray(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.array, validationOptions),
      },
    },
    validationOptions
  );
}
