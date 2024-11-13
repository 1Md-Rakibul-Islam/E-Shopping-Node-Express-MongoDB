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

// single product update
const updateSingleProductIntoDb = async (productId: string, productData: TProduct) => {

    const result = await Product.updateOne(
        { id: productId },
        { $set: productData }
    );

    // console.log(result, productId, productData);

    return result;
};

// single product delete
const deleteSingleProductIntoDb = async (productId: string) => {

    const result = await Product.deleteOne({ id: productId });

    return result;
};

// search product by name
const searchProductIntoDb = async (searchTerm: string) => {

    // let query = {};

    // if (searchTerm) {
    //     query = { $text: { $search: searchTerm } };
    // }

    // const result = await Product.find(query, {
    //     score: { $meta: "textScore" }
    // }).sort({
    //     score: { $meta: "textScore" }
    // });

    const result = await Product.find({ $text: { $search: searchTerm } });

    return result;
}

export const ProductServices = {
    createProductIntoDb,
    getAllProductsIntoDb,
    updateSingleProductIntoDb,
    deleteSingleProductIntoDb,
    searchProductIntoDb
}