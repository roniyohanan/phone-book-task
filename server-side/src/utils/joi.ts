/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as Joi from 'joi';
import { Request } from 'express';
import { wrapValidator } from './wrapper';

export const defaultValidationOptions: Joi.ValidationOptions = {
  abortEarly: false,
  allowUnknown: false,
  convert: true,
};

const normalizeRequest = (req: any, value: any): void => {
  const { body, query, params } = value;
  req.body = body;
  req.query = query;
  req.params = params;
};

export const ValidateRequest = (schema: Joi.ObjectSchema<any>, options: Joi.ValidationOptions = defaultValidationOptions) => {
  const validator = async (req: Request): Promise<void> => {
    const { error, value } = schema.unknown().validate(req, options);
    if (error) {
      throw error;
    }

    if (options.convert) {
      normalizeRequest(req, value);
    }
  };

  return wrapValidator(validator);
};
