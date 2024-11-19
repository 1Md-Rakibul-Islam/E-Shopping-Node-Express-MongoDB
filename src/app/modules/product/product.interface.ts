import { Model } from "mongoose"

export type TVariant = {
    type: string,
    value: string,
}

export type TInventory = {
    quantity: number,
    inStock: boolean,
}

export type TProduct = {
    save(): unknown
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    tags: string[],
    variants: TVariant[],
    inventory: TInventory
}

export interface ProductModel extends Model<TProduct> {
    isProductExists(id: string): Promise<TProduct | null>
}

