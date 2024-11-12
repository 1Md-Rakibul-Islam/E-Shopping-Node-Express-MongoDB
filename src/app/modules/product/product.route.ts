import express from 'express';
import { ProductController } from './product.controler';

const router = express.Router();

router.post("/create-product", ProductController.createProduct);

router.get("/", ProductController.getAllProducts);

export const ProductRoutes = router;