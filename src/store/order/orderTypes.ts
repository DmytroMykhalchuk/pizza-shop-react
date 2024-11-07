import { DishType } from "../dish/dishTypes";

export type OrderType = {
    id: number;
    deliveryType: string;
    paymentType: string;
    paidAt: string;
    invoiceLink: string;
    status: string;
    address: string;
    total: number;
};

export type FullOrderType = {
    id: number;
    deliveryType: string;
    paymentType: string;
    paidAt: string;
    invoiceLink: string;
    status: string;
    address: string;
    total: number;
    dishes: DishType[];
};

