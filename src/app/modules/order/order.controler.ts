import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {

    try {
        const orderData = req.body;

        // data validation
        const zodParseData = orderValidationSchema.parse(orderData);

        const result = await OrderServices.createOrderIntoDb(zodParseData);

        console.log(result);

        res.status(200).json({
            success: true,
            message: "Order created successfully",
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message || "Order creation failed",
            error: error,
        })
    }
};

// get all orders/single order with query id controller
const getOrder = async (req: Request, res: Response) => {
    try {

        // query order
        const { email } = req.query;

        let result;

        if (email) {
            // get single order.
            result = await OrderServices.getSingleOrderIntoDb(String(email));

        } else {
            // get all orders.
            result = await OrderServices.getAllOrdersIntoDb();

        }

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: result
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: (error as Error) || "Products fetching failed",
            error: error
        })

    };
}

export const OrderController = {
    createOrder,
    getOrder,
}