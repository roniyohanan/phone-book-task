/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { Contact } from './contacts.interface';

const contactSchema: mongoose.Schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  toJSON: {
    virtuals: true,
    transform(_doc, ret): void {
      delete ret._id;
    },
  },
  versionKey: false,
  id: true,
});

export const ContactModel = mongoose.model<Contact & mongoose.Document>('Contact', contactSchema);
