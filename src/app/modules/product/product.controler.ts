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

// delete single product
const updateSingleProduct = async (req: Request, res: Response) => {
    try {

        const { productId } = req.params;

        const productData = req.body;

        console.log(productData, productId);

        const result = await ProductServices.updateSingleProductIntoDb(productId, productData);

        res.status(200).json({
            success: true,
            message: result.modifiedCount > 0 ? "Product updated successfully" : "Product is not updated",
            data: result
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: (error as Error) || "Product deletion failed",
            error: error
        })

    };
}

// delete single product
const deleteSingleProduct = async (req: Request, res: Response) => {
    try {

        const { productId } = req.params;

        const result = await ProductServices.deleteSingleProductIntoDb(productId);

        res.status(200).json({
            success: true,
            message: result.deletedCount > 0 ? "Product deleted successfully" : "Product is not found",
            data: result
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: (error as Error) || "Product deletion failed",
            error: error
        })

    };
}

// 


export const ProductController = {
    createProduct,
    getAllProducts,
    updateSingleProduct,
    deleteSingleProduct,
}