import express, { Request, Response } from 'express';
import cors from "cors";
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

const app = express()

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", ProductRoutes);

app.use("/api/orders", OrderRoutes);


app.get('/', (req: Request, res: Response) => {

    const info = {
        name: "Inventory Management System",
        version: "1.0.0",
    }

    res.status(200).json({
        status: 200,
        data: info,
        message: "success"
    });
})

app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Route is not found",
    });
});

export default app;