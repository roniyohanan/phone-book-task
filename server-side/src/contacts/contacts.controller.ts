import { Request, Response } from 'express';
import { ContactsManager } from './contacts.manager';

export class ContactsController {
  static async getAll(_req: Request, res: Response): Promise<void> {
    res.json(await ContactsManager.getAll());
  }

  static async getById(req: Request, res: Response): Promise<void> {
    res.json(await ContactsManager.getById(req.params.id));
  }

  static async getByName(req: Request, res: Response): Promise<void> {
    res.json(await ContactsManager.getByName(req.params.name));
  }

  static async create(req: Request, res: Response): Promise<void> {
    res.json(await ContactsManager.create(req.body));
  }
}
