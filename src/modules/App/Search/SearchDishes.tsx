import { useDispatch, useSelector } from "react-redux";
import { getFavouriteDishIds, getSearchDishes } from "../../../store/dish/dishSelector";
import { Grid } from "@mui/material";
import { useMemo } from "react";
import { DishCardBox } from "../Elements/DishCardBox";
import { toggleFavouriteDish } from "../../../store/dish/dishReducer";

type SearchDishesType = {
};

export const SearchDishes: React.FC<SearchDishesType> = ({ }) => {
    const dispatch: any = useDispatch();

    const dishes = useSelector(getSearchDishes);
    const favoriteDishIds = useSelector(getFavouriteDishIds);

    const toggleFavourite = (dishId: number) => {
        dispatch(toggleFavouriteDish(dishId, favoriteDishIds))
    };
    const dishComponents = useMemo(() => {
        const listItems = [] as JSX.Element[];

        dishes?.forEach(dish => {
            listItems.push(<DishCardBox toggleFavourite={() => toggleFavourite(dish.id)} key={dish.id} dish={dish} />);
        })

        return listItems;

    }, [dishes]);

    return (
        <Grid container>
            {dishComponents}
        </Grid>
    );
};