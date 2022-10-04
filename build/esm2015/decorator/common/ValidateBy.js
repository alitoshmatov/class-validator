import { registerDecorator } from '../../register-decorator';
import Messages from '../../utils/messages';
export function buildMessage(impl, validationOptions) {
    return (validationArguments) => {
        const eachPrefix = validationOptions && validationOptions.each ? Messages.eachValueIn : '';
        return impl(eachPrefix, validationArguments);
    };
}
export function ValidateBy(options, validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
            name: options.name,
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: options.constraints,
            validator: options.validator,
        });
    };
}
//# sourceMappingURL=ValidateBy.js.map