import { Product } from "./product"

export interface Order {
    id?: string
    userId: string,
    orderQuantity: number,
    orderedItems: Product[],
    orderTotalPrice: number,
    orderAddress: string,
    orderDate: string,
    paymentMethod: string,
    orderStatus: string
}