import { ValidationOptions } from '../ValidationOptions';
import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';

export const IS_EMPTY = 'isEmpty';

/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
export function isEmpty(value: unknown): boolean {
  return value === '' || value === null || value === undefined;
}

/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
export function IsEmpty(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_EMPTY,
      validator: {
        validate: (value, args): boolean => isEmpty(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.empty, validationOptions),
      },
    },
    validationOptions
  );
}
