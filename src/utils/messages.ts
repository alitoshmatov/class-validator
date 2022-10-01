// const Messages = {
//   divisibleByConstraint: '$property must be divisible by $constraint1',
//   negativeNumber: '$property must be a negative number',
//   positiveNumber: '$property must be a positive number',
//   greaterThan: '$property must not be greater than $constraint1',
//   decoratorExpectsObjectAsValue: '$IS_INSTANCE decorator expects and object as value, but got falsy value.',
//   notValidDecimalNumber: '$property is not a valid decimal number.',
//   BICOrSWIFT: '$property must be a BIC or SWIFT code',
//   booleanString: '$property must be a boolean string',
//   booleanValue: '$property must be a boolean value',
//   BTCAddress: '$property must be a BTC address',
//   creditCard: '$property must be a credit card',
//   currency: '$property must be a currency',
//   dataUriFormat: '$property must be a data uri format',
//   dateInstance: '$property must be a Date instance',
//   firebasePushId: '$property must be a Firebase Push Id',
//   hashOfType: '$property must be a hash of type $constraint1',
//   hexColor: '$property must be a hexadecimal color',
//   hexNumber: '$property must be a hexadecimal number',
//   HSLColor: '$property must be a HSL color',
//   IDCardNumber: '$property must be a identity card number',
//   ISSN: '$property must be a ISSN',
//   JsonString: '$property must be a json string',
//   JwtString: '$property must be a jwt string',
//   latitudeStringOrNumber: '$property must be a latitude string or number',
//   latitudeLongitudeString: '$property must be a latitude,longitude string',
//   longitudeStringOrNumber: '$property must be a longitude string or number',
//   lowercaseString: '$property must be a lowercase string',
//   MACAddress: '$property must be a MAC Address',
//   mongodbId: '$property must be a mongodb id',
//   nonEmptyObject: '$property must be a non-empty object',
//   numberToTheSpecifiedConstraint: '$property must be a number conforming to the specified constraints',
//   numberString: '$property must be a number string',
//   phoneNumber: '$property must be a phone number',
//   port: '$property must be a port',
//   postalCode: '$property must be a postal code',
//   semanticVersioningSpecification: '$property must be a Semantic Versioning Specification',
//   string: '$property must be a string',
//   validDomainName: '$property must be a valid domain name',
//   validEnumValue: '$property must be a valid enum value',
//   ISO8601DateString: '$property must be a valid ISO 8601 date string',
//   alpha2Code: '$property must be a valid ISO31661 Alpha2 code',
//   alpha3Code: '$property must be a valid ISO31661 Alpha3 code',
//   validPhoneNumber: '$property must be a valid phone number',
//   timeInHHMM: '$property must be a valid representation of military time in the format HH:MM',
//   array: '$property must be an array',
//   EAN: '$property must be an EAN (European Article Number)',
//   email: '$property must be an email',
//   ethereumAddress: '$property must be an Ethereum address',
//   IBAN: '$property must be an IBAN',
//   instanceOf: '$property must be an instance of $constraint1',
//   integerNumber: '$property must be an integer number',
//   ipAddress: '$property must be an ip address',
//   ISBN: '$property must be an ISBN',
//   ISIN: '$property must be an ISIN (stock/security identifier)',
//   ISRC: '$property must be an ISRC',
//   object: '$property must be an object',
//   URLAddress: '$property must be an URL address',
//   UUID: '$property must be an UUID',
//   base32: '$property must be base32 encoded',
//   base64: '$property must be base64 encoded',
//   divisibleBy: '$property must be divisible by $constraint1',
//   empty: '$property must be empty',
//   equalTo: '$property must be equal to $constraint1',
//   locale: '$property must be locale',
//   longerThanOrEqualToAndShorter:
//     '$property must be longer than or equal to $constraint1 and shorter than or equal to $constraint2 characters',
//   longerThanOrEqualTo: '$property must be longer than or equal to $constraint1 characters',
//   magnetUriFormat: '$property must be magnet uri format',
//   MIMEType: '$property must be MIME type format',
//   followingValues: '$property must be one of the following values: $constraint1',
//   RFC3339date: '$property must be RFC 3339 date',
//   RGBColor: '$property must be RGB color',
//   shorterThanOrEqualTo: '$property must be shorter than or equal to $constraint1 characters',
//   uppercase: '$property must be uppercase',
//   octalNumber: '$property must be valid octal number',
//   passportNumber: '$property must be valid passport number',
//   containValues: '$property must contain $constraint1 values',
//   containAString: '$property must contain a $constraint1 string',
//   fullWidthAndHalfWidthChars: '$property must contain a full-width and half-width characters',
//   fullWidthChars: '$property must contain a full-width characters',
//   halfWidthChars: '$property must contain a half-width characters',
//   surrogatePairChars: '$property must contain any surrogate pairs chars',
//   atLeastElements: '$property must contain at least $constraint1 elements',
//   notMoreThanElements: '$property must contain not more than $constraint1 elements',
//   containOneOrMoreMultiByteChars: '$property must contain one or more multibyte chars',
//   onlyASCIIChars: '$property must contain only ASCII characters',
//   onlyLetters: '$property must contain only letters (a-zA-Z)',
//   onlyLettersAndNumbers: '$property must contain only letters and numbers',
//   matchRegularExpression: '$property must match $constraint1 regular expression',
//   notBeGreaterThan: '$property must not be greater than $constraint1',
//   notBeLessThan: '$property must not be less than $constraint1',
//   notBeEmpty: '$property should not be empty',
//   notBeEqualTo: '$property should not be equal to $constraint1',
//   notBeNullOrUndefined: '$property should not be null or undefined',
//   notBeFollowingValues: '$property should not be one of the following values: $constraint1',
//   notContainValues: '$property should not contain $constraint1 values',
//   notContainAString: '$property should not contain a $constraint1 string',
//   byteLengthRange: "$property's byte length must fall into ($constraint1, $constraint2) range",
//   allBeUnique: "All $property's elements must be unique",
//   eachValueIn: 'each value in ',
//   maxAllowedDateFor: 'maximal allowed date for $property is $constraint1',
//   minAllowedDate: 'minimal allowed date for $property is $constraint1',
//   nestedMustBeObjectArray: 'nested property $property must be either object or array',
// };

const Messages = {
  divisibleByConstraint: '$property должно делиться на $constraint1',
  negativeNumber: '$property должно быть отрицательным числом',
  positiveNumber: '$property должно быть положительным числом',
  greaterThan: '$property не должно быть больше, чем $constraint1',
  decoratorExpectsObjectAsValue: 'декоратор $IS_INSTANCE ожидает и объект как значение, но получил ложное значение.',
  notValidDecimalNumber: '$property не является допустимым десятичным числом.',
  BICOrSWIFT: '$property должен быть кодом BIC или SWIFT',
  booleanString: '$property должен быть логической строкой',
  booleanValue: '$property должен быть логическим значением',
  BTCAddress: '$property должен быть адрес BTC',
  creditCard: '$property должно быть отрицательным числом0',
  currency: '$property должно быть отрицательным числом1',
  dataUriFormat: '$property должно быть отрицательным числом2',
  dateInstance: '$property должно быть отрицательным числом3',
  firebasePushId: '$property должно быть отрицательным числом4',
  hashOfType: '$property должно быть отрицательным числом5',
  hexColor: '$property должно быть отрицательным числом6',
  hexNumber: '$property должно быть отрицательным числом7',
  HSLColor: '$property должно быть отрицательным числом8',
  IDCardNumber: '$property должно быть отрицательным числом9',
  ISSN: '$property должно быть положительным числом0',
  JsonString: '$property должно быть положительным числом1',
  JwtString: '$property должно быть положительным числом2',
  latitudeStringOrNumber: '$property должно быть положительным числом3',
  latitudeLongitudeString: '$property должно быть положительным числом4',
  longitudeStringOrNumber: '$property должно быть положительным числом5',
  lowercaseString: '$property должно быть положительным числом6',
  MACAddress: '$property должно быть положительным числом7',
  mongodbId: '$property должно быть положительным числом8',
  nonEmptyObject: '$property должно быть положительным числом9',
  numberToTheSpecifiedConstraint: '$property не должно быть больше, чем $constraint10',
  numberString: '$property не должно быть больше, чем $constraint11',
  phoneNumber: '$property не должно быть больше, чем $constraint12',
  port: '$property не должно быть больше, чем $constraint13',
  postalCode: '$property не должно быть больше, чем $constraint14',
  semanticVersioningSpecification: '$property не должно быть больше, чем $constraint15',
  string: '$property не должно быть больше, чем $constraint16',
  validDomainName: '$property не должно быть больше, чем $constraint17',
  validEnumValue: '$property не должно быть больше, чем $constraint18',
  ISO8601DateString: '$property не должно быть больше, чем $constraint19',
  alpha2Code: 'декоратор $IS_INSTANCE ожидает и объект как значение, но получил ложное значение.0',
  alpha3Code: 'декоратор $IS_INSTANCE ожидает и объект как значение, но получил ложное значение.1',
  validPhoneNumber: 'декоратор $IS_INSTANCE ожидает и объект как значение, но получил ложное значение.2',
  timeInHHMM: 'декоратор $IS_INSTANCE ожидает и объект как значение, но получил ложное значение.3',
  array: 'декоратор $IS_INSTANCE ожидает и объект как значение, но получил ложное значение.4',
  EAN: 'декоратор $IS_INSTANCE ожидает и объект как значение, но получил ложное значение.5',
  email: 'декоратор $IS_INSTANCE ожидает и объект как значение, но получил ложное значение.6',
  ethereumAddress: 'декоратор $IS_INSTANCE ожидает и объект как значение, но получил ложное значение.7',
  IBAN: '$property должен быть IBAN',
  instanceOf: '$property должен быть экземпляром $constraint1',
  integerNumber: '$property должен быть целым числом',
  ipAddress: '$property должен быть IP-адресом',
  ISBN: '$property должен быть ISBN',
  ISIN: '$property должен быть ISIN (идентификатор акции/ценной бумаги)',
  ISRC: '$property должен быть ISRC',
  object: '$property должен быть объектом',
  URLAddress: '$property должен быть URL-адресом',
  UUID: '$property должен быть UUID',
  base32: '$property должен быть экземпляром $constraint10',
  base64: '$property должен быть экземпляром $constraint11',
  divisibleBy: '$property должен быть экземпляром $constraint12',
  empty: '$property должен быть экземпляром $constraint13',
  equalTo: '$property должен быть экземпляром $constraint14',
  locale: '$property должен быть экземпляром $constraint15',
  longerThanOrEqualToAndShorter: '$property должен быть экземпляром $constraint16',
  longerThanOrEqualTo: '$property должен быть экземпляром $constraint17',
  magnetUriFormat: '$property должен быть экземпляром $constraint18',
  MIMEType: '$property должен быть экземпляром $constraint19',
  followingValues: '$property должен быть целым числом0',
  RFC3339date: '$property должен быть целым числом1',
  RGBColor: '$property должен быть целым числом2',
  shorterThanOrEqualTo: '$property должен быть целым числом3',
  uppercase: '$property должен быть целым числом4',
  octalNumber: '$property должен быть целым числом5',
  passportNumber: '$property должен быть целым числом6',
  containValues: '$property должен быть целым числом7',
  containAString: '$property должен быть целым числом8',
  fullWidthAndHalfWidthChars: '$property должен быть целым числом9',
  fullWidthChars: '$property должен быть IP-адресом0',
  halfWidthChars: '$property должен быть IP-адресом1',
  surrogatePairChars: '$property должен быть IP-адресом2',
  atLeastElements: '$property должен быть IP-адресом3',
  notMoreThanElements: '$property должен быть IP-адресом4',
  containOneOrMoreMultiByteChars: '$property должен быть IP-адресом5',
  onlyASCIIChars: '$property должен быть IP-адресом6',
  onlyLetters: '$property должен содержать только буквы (a-zA-Z)',
  onlyLettersAndNumbers: '$property должен содержать только буквы и цифры',
  matchRegularExpression: '$property должен соответствовать регулярному выражению $constraint1',
  notBeGreaterThan: '$property не должен превышать $constraint1',
  notBeLessThan: '$property должен не должно быть меньше $constraint1',
  notBeEmpty: '$property не должно быть пустым',
  notBeEqualTo: '$property не должно быть равно $constraint1',
  notBeNullOrUndefined: '$property не должно быть нулевым или неопределенным',
  notBeFollowingValues: '$property не должно быть одним из следующих значений: $constraint1 ',
  notContainValues: '$property не должен содержать значения $constraint1',
  notContainAString: '$property не должен содержать строку $constraint1',
  byteLengthRange: 'длина $property в байтах должна попадать в диапазон ($constraint1, $constraint2)',
  allBeUnique: 'все элементы $property должны быть уникальными',
  eachValueIn: 'каждое значение in ',
  maxAllowedDateFor: 'максимальная допустимая дата для $property — $constraint1',
  minAllowedDate: 'минимально допустимая дата для $property — $constraint1',
  nestedMustBeObjectArray: 'вложенное свойство $property должно быть либо объектом, либо массивом',
};

export default Messages;
