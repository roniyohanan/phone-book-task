import { ContactModel } from './contacts.model';
import { Contact } from './contacts.interface';

export class ContactsRepository {
  static create(contact: Contact): Promise<Contact> {
    return ContactModel.create(contact);
  }

  static getById(id: string): Promise<Contact | null> {
    return ContactModel.findById(id).exec();
  }

  static getByName(name: string): Promise<Contact[]> {
    return ContactModel.find({ fullName: name }).exec();
  }

  static getAll(): Promise<Contact[]> {
    return ContactModel.find({}).exec();
  }
}
