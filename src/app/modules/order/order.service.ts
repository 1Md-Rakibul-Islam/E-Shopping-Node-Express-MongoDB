import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// Create a new order
const createOrderIntoDb = async (orderData: TOrder) => {
  const { productId, quantity } = orderData;

  // Check if the product exists using the custom method
  const productInventory = await Product.isProductExists(productId);

  if (!productInventory) {
    throw new Error("Product not found in inventory");
  }

  const { inventory } = productInventory;

  // Check if the ordered quantity exceeds available quantity
  if (quantity > inventory.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  // Calculate updated inventory values
  const updatedQuantity = inventory.quantity - quantity;
  const inStock = updatedQuantity > 0;

  // Update inventory with atomic operation
  await Product.updateOne(
    { _id: productId },
    {
      $set: {
        "inventory.quantity": updatedQuantity,
        "inventory.inStock": inStock,
      },
    },
  );

  // Create the order
  const newOrder = await Order.create(orderData);

  return newOrder;
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
};

export const OrderServices = {
  createOrderIntoDb,
  getAllOrdersIntoDb,
  getSingleOrderIntoDb,
};
