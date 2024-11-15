import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {

    try {
        const orderData = req.body;

        // data validation
        const zodParseData = orderValidationSchema.parse(orderData);

        const result = await OrderServices.createOrderIntoDb(zodParseData);

        res.status(200).json({
            success: true,
            message: "Order created successfully",
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error) || "Order creation failed",
            error: error
        })
    }
};


export const OrderController = {
    createOrder,
}