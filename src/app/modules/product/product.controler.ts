import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
    try {
        const { product: productData } = req.body;

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

export const ProductController = {
    createProduct,
}