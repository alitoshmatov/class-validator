import { ValidationOptions } from '../ValidationOptions';
import { buildMessage, ValidateBy } from './ValidateBy';
import { ValidationTypes } from '../../validation/ValidationTypes';
import Messages from '../../utils/messages';

// isDefined is (yet) a special case
export const IS_DEFINED = ValidationTypes.IS_DEFINED;

/**
 * Checks if value is defined (!== undefined, !== null).
 */
export function isDefined(value: any): boolean {
  return value !== undefined && value !== null;
}

/**
 * Checks if value is defined (!== undefined, !== null).
 */
export function IsDefined(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_DEFINED,
      validator: {
        validate: (value): boolean => isDefined(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.notBeNullOrUndefined, validationOptions),
      },
    },
    validationOptions
  );
}
