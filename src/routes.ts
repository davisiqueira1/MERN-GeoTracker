import { Router } from "express";
import { deliverieController } from "./controllers/DeliverieController";

const router = Router();

router.use("/deliveries", deliverieController);

export { router };
