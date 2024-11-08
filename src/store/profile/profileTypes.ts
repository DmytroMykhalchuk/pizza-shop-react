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

export type TelegramWebAppInitData = {
    auth_date: string;
    hash: string;
    query_id: string;
    user: {
        allows_write_to_pm: boolean;
        first_name: string;
        id: number;
        language_code: string;
        last_name: string;
        username: string;
    };
};
