import { ProductRenz } from "./productRenz"

export interface Order {
    id?: string
    userId: string,
    orderQuantity: number,
    orderedItems: ProductRenz[],
    orderTotalPrice: number,
    orderAddress: string,
    orderDate: string,
    paymentMethod: string,
    orderStatus: string
}