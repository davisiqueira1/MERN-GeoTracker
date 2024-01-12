import { CreateDeliverieType } from "@/types/DeliverieType";
import { Deliverie } from "../models/Deliverie";
import { ApiError } from "../errors/ApiError";

const getDeliveries = async () => {
  return await Deliverie.find();
};

const createDeliverie = async (deliverie: CreateDeliverieType) => {
  try {
    const newDeliverie = new Deliverie(deliverie);
    await newDeliverie.save();
    return newDeliverie;
  } catch (err) {
    throw new ApiError("Error on create deliverie", 400);
  }
};

const deleteDeliverie = async (id: string) => {
  const deliverie = await Deliverie.findById(id).catch((err) => {
    throw new ApiError(
      "Invalid id. It must be a 24 character hex string, 12 byte Uint8Array, or an integer",
      400
    );
  });
  console.log(deliverie);

  if (!deliverie) throw new ApiError("Deliverie not found", 404);

  try {
    await deliverie.deleteOne();
  } catch (err) {
    throw new ApiError("Error on delete deliverie", 400);
  }
};

export default { getDeliveries, createDeliverie, deleteDeliverie };
