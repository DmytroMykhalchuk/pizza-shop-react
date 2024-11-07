import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryDishes } from "../../store/category/categorySelector";
import { List, Stack } from "@mui/material";
import { useEffect } from "react";
import { requireCategoryDishes } from "../../store/category/categoryReducer";
import { DishCard } from "../Common/DishCard";

type CategoryIndexPageType = {
};

export const CategoryIndexPage: React.FC<CategoryIndexPageType> = ({ }) => {
    const dispatch: any = useDispatch();

    const categorySlug = useParams()?.categorySlug || '';

    const dishes = useSelector(getCategoryDishes);

    useEffect(() => {
        dishes || dispatch(requireCategoryDishes(categorySlug));
    }, []);

    return (
        <Stack flex={1}>
            <List dense>
                {
                    dishes?.map(dish => (
                        <DishCard key={dish.id} dish={dish} />
                    ))
                }
            </List>
        </Stack>
    );
};