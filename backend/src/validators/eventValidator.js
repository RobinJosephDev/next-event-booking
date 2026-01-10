import Joi from "joi";

export const eventSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),
  description: Joi.string().allow("").max(1000), 
  date: Joi.date().iso().required(),
  venue: Joi.string().min(2).max(200).required(),
  price: Joi.number().min(0).required(),
  capacity: Joi.number().integer().min(1).required(),
});
