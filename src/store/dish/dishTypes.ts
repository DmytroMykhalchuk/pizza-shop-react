import { CategoryType } from "../category/categoryTypes";

export type DishType = {
    id: number;
    basePrice: number;
    image: string;
    name: string;
    description: string;
    detail: string;
    sizes: DishSizeType[];
    category: CategoryType;
};

export type FullDishType = {
    id: number;
    basePrice: number;
    image: string;
    name: string;
    description: string;
    detail: string;
    sizes: DishSizeType[];
    category: CategoryType;
    rating: number;
    voters: number;
    timeCooking: number;
};

export type DishSizeType = {
    id: number;
    name: string;
    dishId: number;
    priceMultiplier: number;
    diameterCm: number;
    weightMultiplier: number;
    sizeCode: string;
};