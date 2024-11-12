import { z } from "zod";

export const variantValidationSchema = z.object({
    type: z.enum(['Color', 'Size', 'Storage Capacity', 'Other']),
    value: z
        .string()
        .min(1, "Variant value is required"),
});

export const inventoryValidationSchema = z.object({
    quantity: z
        .number()
        .min(0, "Quantity must be 0 or greater"),
    inStock: z.boolean(),
});

export const productValidationSchema = z.object({
    id: z
        .string()
        .trim()
        .min(1, "Product ID is required"),
    name: z
        .string()
        .trim()
        .min(1, "Product name is required")
        .max(100, "Name must be 100 characters or less"),
    description: z
        .string()
        .optional()
        .default(""),
    price: z.number()
        .min(0, "Price must be 0 or greater")
        .transform((val) => Number(val.toFixed(2))),
    category: z.string()
        .trim()
        .min(1, "Product category is required"),
    tags: z.array(z.string())
        .default([]),
    variants: z.array(variantValidationSchema)
        .min(1, "Product must have at least one variant"),
    inventory: inventoryValidationSchema,
});


export default productValidationSchema;