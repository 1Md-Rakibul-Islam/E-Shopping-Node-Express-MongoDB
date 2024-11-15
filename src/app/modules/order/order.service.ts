import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// create a new order
const createOrderIntoDb = async (orderData: TOrder) => {

    const result = await Order.create(orderData);

    return result;
};

// get all orders
const getAllOrders = async () => {
    const result = await Order.find({});

    return result;
};

// get single order by user emeil
const getSingleOrderByUser = async (userEmail: string) => {

    const result = await Order.find({ email: userEmail });

    return result;
}

export const OrderServices = {
    createOrderIntoDb,
    getAllOrders,
    getSingleOrderByUser,
}