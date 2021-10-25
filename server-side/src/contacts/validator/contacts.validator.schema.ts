import * as Joi from 'joi';

const contactSchema = Joi.object({
  fullName: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  description: Joi.string().required(),
});

export const validateId = Joi.object({
  query: {},
  body: {},
  params: {
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  },
});

export const validateName = Joi.object({
  query: {},
  body: {},
  params: {
    name: Joi.string().required(),
  },
});

export const createContactSchema = Joi.object({
  body: contactSchema,
  query: {},
  params: {},
});
