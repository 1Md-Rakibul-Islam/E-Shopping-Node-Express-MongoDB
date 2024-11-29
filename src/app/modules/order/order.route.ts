import express from "express";
import { OrderController } from "./order.controler";

const router = express.Router();

router.post("/", OrderController.createOrder);

router.get("/", OrderController.getOrder);

export const OrderRoutes = router;
