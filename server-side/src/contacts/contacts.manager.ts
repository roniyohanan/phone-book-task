import { ContactNotFound } from '../utils/errors/errors';
import { Contact } from './contacts.interface';
import { ContactsRepository } from './contacts.repositoty';

export class ContactsManager {
  static getAll(): Promise<Contact[]> {
    return ContactsRepository.getAll();
  }

  static async getById(id: string): Promise<Contact> {
    const contact = await ContactsRepository.getById(id);
    if (!contact) throw new ContactNotFound();
    return contact;
  }

  static getByName(name: string): Promise<Contact[]> {
    return ContactsRepository.getByName(name);
  }

  static create(contact: Contact): Promise<Contact> {
    return ContactsRepository.create(contact);
  }
}
