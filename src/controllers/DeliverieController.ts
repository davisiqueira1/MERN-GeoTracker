import { Router } from "express";
import deliverieService from "../services/DeliverieService";
import { CreateDeliverieType } from "@/types/DeliverieType";
import { ApiError } from "../errors/ApiError";

const router = Router();

router.get("/", async (req, res) => {
  const deliveries = await deliverieService.getDeliveries();
  res.json(deliveries);
});

router.post("/", async (req, res) => {
  const deliverie: CreateDeliverieType = {
    name: req.body.name,
    weight: req.body.weight,
    address: {
      street: req.body.address.street,
      number: req.body.address.number,
      neighborhood: req.body.address.neighborhood,
      complement: req.body.address.complement,
      city: req.body.address.city,
      state: req.body.address.state,
      country: req.body.address.country,
      geolocation: {
        latitude: req.body.address.geolocation.latitude,
        longitude: req.body.address.geolocation.longitude,
      },
    },
  };
  try {
    await deliverieService.createDeliverie(deliverie);
    res.status(201).send(deliverie);
  } catch (err) {
    console.log(err);
    const error = err as ApiError;
    res.status(error.statusCode).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await deliverieService.deleteDeliverie(id);
    res.send({ message: "Deliverie deleted" });
  } catch (err) {
    console.log(err);
    const error = err as ApiError;
    res.status(error.statusCode).send({ message: error.message });
  }
});

export { router as deliverieController };
