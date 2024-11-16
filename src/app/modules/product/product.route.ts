import express from 'express';
import { ProductController } from './product.controler';

const router = express.Router();

router.post("/", ProductController.createProduct);

router.get("/", ProductController.getProducts);

router.put("/:productId", ProductController.updateSingleProduct);

router.delete("/:productId", ProductController.deleteSingleProduct);

export const ProductRoutes = router;