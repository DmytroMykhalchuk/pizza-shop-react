import { useSelector } from "react-redux";
import { getSearchDishes } from "../../../store/dish/dishSelector";
import { List, Stack } from "@mui/material";
import { DishCard } from "../../Common/DishCard";
import { useMemo } from "react";

type SearchDishesType = {
};

export const SearchDishes: React.FC<SearchDishesType> = ({ }) => {
    const dishes = useSelector(getSearchDishes);

    const dishComponents = useMemo(() => {
        const listItems = [] as JSX.Element[];

        dishes?.forEach(dish => {
            listItems.push(<DishCard key={dish.id} dish={dish} />);
        })

        return listItems;

    }, [dishes]);

    return (
        <Stack>
            <List dense>
                {dishComponents}
            </List>
        </Stack>
    );
};