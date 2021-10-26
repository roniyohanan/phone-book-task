/* eslint-disable max-len */
import { HttpClient } from '../http.client';
import config from '../config';

const url = `${config.contactService.hostname}${config.contactService.endpoints.contact}`;

class ContactService {
  static getByName(name) {
    return HttpClient.get(`${url}/by-name/${name}`, null);
  }

  static getAll() {
    return HttpClient.get(url, null);
  }

  static create(contact) {
    return HttpClient.post(url, contact);
  }
}

export default ContactService;
