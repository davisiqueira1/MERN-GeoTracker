import { CreateDeliveryType } from "@/types/DeliveryType";
import { Delivery } from "../models/Delivery";
import { ApiError } from "../errors/ApiError";

const getDeliveries = async () => {
  return await Delivery.find();
};

const createDelivery = async (delivery: CreateDeliveryType) => {
  try {
    const newDelivery = new Delivery(delivery);
    await newDelivery.save();
    return newDelivery;
  } catch (err) {
    throw new ApiError("Error on create delivery", 400);
  }
};

const deleteDelivery = async (id: string) => {
  const delivery = await Delivery.findById(id).catch((err) => {
    throw new ApiError(
      "Invalid id. It must be a 24 character hex string, 12 byte Uint8Array, or an integer",
      400
    );
  });
  console.log(delivery);

  if (!delivery) throw new ApiError("Delivery not found", 404);

  try {
    await delivery.deleteOne();
  } catch (err) {
    throw new ApiError("Error on delete delivery", 400);
  }
};

const deleteAllDeliveries = async () => {
  try {
    await Delivery.deleteMany({});
  } catch (err) {
    throw new ApiError("Error on delete all deliveries", 400);
  }
};

export default {
  getDeliveries,
  createDelivery,
  deleteDelivery,
  deleteAllDeliveries,
};
