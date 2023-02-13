import { PrismaClient } from "@prisma/client";
import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phone: Joi.string()
    .pattern(new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{4}$"))
    .required(),
  name: Joi.string().min(3).max(30).required(),
  message: Joi.string().min(10).max(500).required(),
});

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { listingId } = event.context.params;

  const { error, value } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }
  const { email, phone, name, message } = body;
  return prisma.message.create({
    data: {
      email,
      phone,
      name,
      message,
      listingId: parseInt(listingId),
    },
  });
});
