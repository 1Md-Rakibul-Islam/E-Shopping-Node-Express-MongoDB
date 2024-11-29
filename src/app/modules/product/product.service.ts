import { Product } from "./product.model";
import { TProduct } from "./product.interface";

// create product
const createProductIntoDb = async (productData: TProduct) => {
    const result = await Product.create(productData);

    return result;
};

// get all products
const getAllProductsIntoDb = async () => {
    const result = await Product.find();

    return result;
};

// get single product
const getSingleProductIntoDb = async (productId: string) => {
    const result = await Product.findById(productId);

    return result;
};

// single product update
const updateSingleProductIntoDb = async (
    productId: string,
    productData: TProduct,
) => {
    const result = await Product.updateOne(
        { _id: productId },
        { $set: productData },
    );

    return result;
};

// single product delete
const deleteSingleProductIntoDb = async (productId: string) => {
    const result = await Product.deleteOne({ _id: productId });

    return result;
};

// search product by name
const searchProductIntoDb = async (searchTerm: string) => {
    const result = await Product.find({ $text: { $search: searchTerm } });

    return result;
};

export const ProductServices = {
    createProductIntoDb,
    getAllProductsIntoDb,
    getSingleProductIntoDb,
    updateSingleProductIntoDb,
    deleteSingleProductIntoDb,
    searchProductIntoDb,
};
