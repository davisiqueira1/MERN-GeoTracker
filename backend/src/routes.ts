import { Router } from "express";
import { deliveryController } from "./controllers/DeliveryController";

const router = Router();

router.use("/deliveries", deliveryController);

export { router };
