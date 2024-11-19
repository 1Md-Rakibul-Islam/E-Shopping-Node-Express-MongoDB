import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// create a new order
const createOrderIntoDb = async (orderData: TOrder) => {

    const { productId, quantity, } = orderData;

    // Check if product exists
    const productInventory = await Product.isProductExists(productId);

    console.log(productInventory);

    if (!productInventory) {
        throw new Error('Product not found in inventory');
    }

    // Check if there is enough stock in inventory
    if (quantity > productInventory.inventory.quantity) {
        throw new Error("Insufficient quantity available in inventory");
    };

    // update the inventory quantity and inStock status

    productInventory.inventory.quantity -= quantity;

    // if quantity is 0, set inStock to false
    if (productInventory.inventory.quantity === 0) {
        productInventory.inventory.inStock = false;
    }

    await productInventory.save();

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