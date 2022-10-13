import { Cart } from "./cart"

export interface Order {
    id?: string
    userId: string,
    orderQuantity: number,
    orderedItems: Cart[],
    orderTotalPrice: number,
    orderAddress: string,
    orderDate: string,
    paymentMethod: string,
    orderStatus: string
}