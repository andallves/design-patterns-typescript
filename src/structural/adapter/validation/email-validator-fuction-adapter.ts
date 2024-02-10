import isEmail from 'validator/lib/isEmail';
import { EmailValidatorFnProtocol } from './email-validator-protocol';

export const emailValidatorFuctionAdapter: EmailValidatorFnProtocol = (
  email: string,
): boolean => {
  return isEmail(email);
};
