import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDish } from "../../store/dish/dishSelector";
import { useEffect } from "react";
import { requireDish } from "../../store/dish/dishReducer";
import { Box, Stack, Typography } from "@mui/material";
import { BodyProductPage } from "./Layout/BodyProductPage";
import { HeaderProductPage } from "./Layout/HeaderProductPage";

type ProductIndexPageType = {
};

export const ProductIndexPage: React.FC<ProductIndexPageType> = ({ }) => {
    const dispatch: any = useDispatch();

    const paramsDishId = useParams().dishId;
    const dishId = (paramsDishId || 0) as number;

    const dish = useSelector(getDish);

    useEffect(() => {
        dish?.id !== dishId && dispatch(requireDish(dishId));
    }, []);

    if (!dish) {
        return null;
    }

    return (
        <Stack spacing={2} flex={1}>
            <Stack spacing={1}>
                <HeaderProductPage dishId={dish.id} />
                <Stack alignItems={'center'} justifyContent={'center'} bgcolor={'#F4F4F3'}>
                    <Box
                        component={'img'}
                        src={dish?.image}
                        alt={dish?.name}
                        width={'100%'}
                    />
                </Stack>
            </Stack>
            <Stack spacing={2} flex={1} px={1} pb={'120px'}>
                <div>
                    <Typography variant="h5">{dish?.name}</Typography>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography variant="body1" color={"grey"}>{dish?.category.name}</Typography>
                    </Stack>
                </div>
                <BodyProductPage dish={dish} />
            </Stack>
        </Stack>
    );
};