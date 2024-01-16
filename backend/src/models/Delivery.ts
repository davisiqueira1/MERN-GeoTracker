import { Schema, model } from "mongoose";

const deliverySchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  address: {
    street: String,
    number: Number,
    neighborhood: String,
    complement: String,
    city: String,
    state: String,
    country: String,
    geolocation: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
  },
});

const deliveryModel = model("Delivery", deliverySchema);
export { deliveryModel as Delivery };
