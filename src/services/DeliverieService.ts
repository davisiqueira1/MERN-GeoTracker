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
    console.log(err);
    throw new ApiError("Error on create deliverie", 400);
  }
};

const deleteDeliverie = async (id: string) => {
  const deliverie = await Deliverie.findById(id);
  console.log(deliverie);
  if (!deliverie) throw new ApiError("Deliverie not found", 404);

  try {
    await deliverie.deleteOne();
  } catch (err) {
    console.log(err);
    throw new ApiError("Error on delete deliverie", 400);
  }
};

export default { getDeliveries, createDeliverie, deleteDeliverie };
