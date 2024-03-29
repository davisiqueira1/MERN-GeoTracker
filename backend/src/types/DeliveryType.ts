import { z } from "zod";

const deliverySchema = z.object({
  name: z.string(),
  weight: z.number(),
  address: z.object({
    street: z.string().optional(),
    number: z.number().optional(),
    neighborhood: z.string().optional(),
    complement: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    geolocation: z.object({
      latitude: z.number(),
      longitude: z.number(),
    }),
  }),
});

type CreateDeliveryType = z.infer<typeof deliverySchema>;

export { CreateDeliveryType };
