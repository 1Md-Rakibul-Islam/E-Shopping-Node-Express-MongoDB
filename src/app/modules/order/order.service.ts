import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// create a new order
const createOrderIntoDb = async (orderData: TOrder) => {

    const result = await Order.create(orderData);

    return result;
};

// get all orders
const getAllOrdersIntoDb = async () => {
    const result = await Order.find({});

    return result;
};

// get single order by user emeil
const getSingleOrderIntoDb = async (email: string) => {

    const result = await Order.find({ email: email });

    return result;
}

export const OrderServices = {
    createOrderIntoDb,
    getAllOrdersIntoDb,
    getSingleOrderIntoDb,
}