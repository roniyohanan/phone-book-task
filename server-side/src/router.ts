import { Router } from 'express';
import { ContactsRouter } from './contacts/contacts.router';

const AppRouter: Router = Router();

AppRouter.use('/api/contacts', ContactsRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
