import express, { Request, Response } from 'express';
import cors from "cors";
import { ProductRoutes } from './app/modules/product/product.route';

const app = express()

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", ProductRoutes);



app.get('/', (req: Request, res: Response) => {

    const a = {
        name: "Inventory Management System",
        version: "1.0.0",
    }

    res.status(200).json({
        status: 200,
        data: a,
        message: "success"
    });
})

export default app;