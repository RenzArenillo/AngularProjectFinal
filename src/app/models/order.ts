import { Product } from "./product"

export interface Order {
    id?: string
    userId: string,
    orderQuantity: number,
    orderedItems: Product[],
    orderTotalPrice: number,
    orderDate: string,
    orderStatus: string
}