import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ContactsController } from './contacts.controller';
import { ValidateRequest } from '../utils/joi';
import { validateId, validateName, createContactSchema } from './validator/contacts.validator.schema';

const ContactsRouter: Router = Router();

ContactsRouter.post('/', ValidateRequest(createContactSchema), wrapAsync(ContactsController.create));

ContactsRouter.get('/:name', ValidateRequest(validateName), wrapAsync(ContactsController.getByName));
ContactsRouter.get('/:id', ValidateRequest(validateId), wrapAsync(ContactsController.getById));
ContactsRouter.get('/', wrapAsync(ContactsController.getAll));

export { ContactsRouter };
