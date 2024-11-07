import { Grid, List, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getFavouriteDishIds, getHomePageDishes } from "../../../store/dish/dishSelector";
import { useEffect, useMemo } from "react";
import { requireHomePgeDishes, toggleFavouriteDish } from "../../../store/dish/dishReducer";
import { DishCardBox } from "./DishCardBox";
import { DishCard } from "../../Common/DishCard";
import { DishType } from "../../../store/dish/dishTypes";

type DishSectionsType = {
};

export const DishSections: React.FC<DishSectionsType> = ({ }) => {
    const dispatch: any = useDispatch();

    const homePageDishes = useSelector(getHomePageDishes);
    const favoriteDishIds = useSelector(getFavouriteDishIds)

    useEffect(() => {
        if (!(homePageDishes.favorites && homePageDishes.new && homePageDishes.popular))
            dispatch(requireHomePgeDishes(favoriteDishIds));
    }, []);


    const toggleFavourite = (dish: DishType) => {
        dispatch(toggleFavouriteDish(dish.id, favoriteDishIds, dish))
    };

    const newDishes = useMemo(() => {
        const listItems = [] as JSX.Element[];

        homePageDishes.new?.forEach(dish => {
            listItems.push(
                <DishCard
                    key={dish.id}
                    // toggleFavourite={() => toggleFavourite(dish.id)}
                    dish={dish} />
            );
        })

        return listItems;

    }, [homePageDishes.new, favoriteDishIds]);

    const popularDishes = useMemo(() => {
        const listItems = [] as JSX.Element[];

        homePageDishes.popular?.forEach(dish => {
            listItems.push(
                <DishCardBox
                    key={dish.id}
                    isFavorite={favoriteDishIds.includes(dish.id)}
                    toggleFavourite={() => toggleFavourite(dish)}
                    dish={dish} />
            );
        })

        return listItems;

    }, [homePageDishes.popular, favoriteDishIds]);

    const favoritesDishes = useMemo(() => {
        const listItems = [] as JSX.Element[];

        homePageDishes.favorites?.forEach(dish => {
            listItems.push(
                <DishCardBox
                    key={dish.id}
                    isFavorite={favoriteDishIds.includes(dish.id)}
                    toggleFavourite={() => toggleFavourite(dish)}
                    dish={dish} />
            );
        })

        return listItems;

    }, [homePageDishes.favorites]);

    console.log(homePageDishes.favorites)

    return (
        <Stack spacing={2}>
            {
                popularDishes.length > 0 && (
                    <>
                        <Typography variant="h5">Popular</Typography>
                        <Grid container>
                            {popularDishes}
                        </Grid>
                    </>
                )
            }
            {
                newDishes.length > 0 && (
                    <>
                        <Typography variant="h5">New</Typography>
                        <List dense sx={{ backgroundColor: 'background.paper', boxShadow: '0px 2px 20px 0px #0000001a' }}>
                            {newDishes}
                        </List>
                    </>
                )
            }
            {
                favoritesDishes.length > 0 && (
                    <>
                        <Typography variant="h5">Favorites</Typography>
                        <Grid container>
                            {favoritesDishes}
                        </Grid>
                    </>
                )
            }
        </Stack>
    );
};