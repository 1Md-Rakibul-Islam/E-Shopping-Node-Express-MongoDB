import { Product } from "./product.model";
import { TProduct } from "./product.interface";

// create product
const createProductIntoDb = async (productData: TProduct) => {

    const result = await Product.create(productData);

    return result;
};

// get all products
const getAllProductsIntoDb = async () => {

    const result = await Product.find({});

    return result;

};

export const ProductServices = {
    createProductIntoDb,
    getAllProductsIntoDb,
}