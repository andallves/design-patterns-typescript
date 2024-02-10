import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFuctionAdapter } from './validation/email-validator-fuction-adapter';

function validateEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
) {
  emailValidator.isEmail(email)
    ? console.log('Email valid')
    : console.log('Email invalid');
}

function validateEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
) {
  emailValidator(email)
    ? console.log('Email valid')
    : console.log('Email invalid');
}

validateEmailClass(new EmailValidatorClassAdapter(), 'andrealves@gmail.com');
validateEmailFn(emailValidatorFuctionAdapter, 'andrealves@gmail.com');
