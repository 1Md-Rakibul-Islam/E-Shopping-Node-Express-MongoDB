import express from 'express';
import { ProductController } from './product.controler';

const router = express.Router();

router.post("/create-product", ProductController.createProduct);

router.get("/", ProductController.getAllProducts);

router.get("/search", ProductController.searchProducts);

router.put("/:productId", ProductController.updateSingleProduct);

router.delete("/:productId", ProductController.deleteSingleProduct);

export const ProductRoutes = router;