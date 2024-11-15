import express from 'express';
import { OrderController } from './order.controler';

const router = express.Router();

router.post("/create-order", OrderController.createOrder);

export const OrderRoutes = router;
