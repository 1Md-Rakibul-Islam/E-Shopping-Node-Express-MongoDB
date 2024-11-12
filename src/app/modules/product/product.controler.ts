import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";

// create a new product controller
const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;

        const zodParseData = productValidationSchema.parse(productData);

        // create product
        const result = await ProductServices.createProductIntoDb(zodParseData);

        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error) || "Product creation failed",
            error: error
        })
    }
};

// get all products controller
const getAllProducts = async (req: Request, res: Response) => {
    try {

        const result = await ProductServices.getAllProductsIntoDb();

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


export const ProductController = {
    createProduct,
    getAllProducts,
}