import Joi from 'joi';

export const ContactSchema = Joi.object({
    fullName: Joi.string()
        .min(3)
        .max(30)
        .required(),
    phone: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .required(),
    message: Joi.string()
        .min(3)
        .max(500)
        .required(),
});