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

  static async getByName(name: string): Promise<Contact[]> {
    const contacts = await ContactsRepository.getByName(name);
    if (contacts.length===0) throw new ContactNotFound();
    return contacts;
  }

  static create(contact: Contact): Promise<Contact> {
    return ContactsRepository.create(contact);
  }
}
