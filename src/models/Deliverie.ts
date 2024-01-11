import { Schema, model } from "mongoose";

const deliverieSchema = new Schema({
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

const deliverieModel = model("Deliverie", deliverieSchema);
export { deliverieModel as Deliverie };
