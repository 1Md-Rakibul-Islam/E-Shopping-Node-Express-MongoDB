
import { model, Schema } from "mongoose";
import { ProductModel, TProduct, TVariant } from "./product.interface";

const VariantSchema = new Schema<TVariant>({
    type: {
        type: String,
        required: true,
        enum: ['Color', 'Size', 'Storage Capacity', 'Other'],
    },
    value: {
        type: String,
        required: true
    }
});

const InventorySchema = new Schema({
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    inStock: {
        type: Boolean,
        required: true
    }
});

const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: [true, "Product name is required"],
        maxLength: 100,
        trim: true,
    },
    description: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: 0,
        get: (value: number) => Number.parseFloat(value.toFixed(2)),
    },
    category: {
        type: String,
        required: [true, "Product category is required"],
    },
    tags: {
        type: [String],
        default: [],
    },

    variants: {
        type: [VariantSchema],
        required: [true, "Product variants is required"],
    },
    inventory: {
        type: InventorySchema,
        required: [true, "Product inventory is required"],
    }
})


// create a custom static method
productSchema.statics.isProductExists = async function (id: string) {
    const existingProduct = await Product.findOne({ _id: id });

    return existingProduct;
}

export const Product = model<TProduct, ProductModel>("Product", productSchema)
