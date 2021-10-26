export class ApplicationError extends Error {
  constructor(public status: number, public message: string) {
    super();
  }
}

export class ContactNotFound extends ApplicationError {
  constructor() {
    super(404, 'Contact not found');
  }
}
