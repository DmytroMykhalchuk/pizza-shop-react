import { Box, Stack, Typography, IconButton, Paper, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCartDishes, getCartDishIds } from "../../../store/cart/cartSelector";
import { useEffect, useMemo } from "react";
import { removeDishFromCart, requireCartDishes } from "../../../store/cart/cartReducer";
import { FullScreenLoader } from "../../Common/FullScreenLoader";
import { CartType } from "../../../store/cart/cartTypes";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { DishSizeType, DishType } from "../../../store/dish/dishTypes";

type MappedDishType = DishType & {
    count: number;
    targetSize?: DishSizeType;
    amount: number;
};

type BasketViewType = {
    onPrevStep: () => void;
    onNextStep: () => void;
};

export const BasketView: React.FC<BasketViewType> = ({ onNextStep }) => {
    const dispatch: any = useDispatch();

    const cartDishIds = useSelector(getCartDishIds);
    const dishes = useSelector(getCartDishes);

    useEffect(() => {
        const dishIds = cartDishIds.map(item => item.dishId);
        dishIds.length && dispatch(requireCartDishes(dishIds))
    }, []);

    const calculatedCartDishes = useMemo(() => {
        if (!dishes) return {
            dishes: [],
            total: 0,
        };

        const mapepdDishIds = {} as { [id: number]: CartType };
        cartDishIds.forEach(item => {
            mapepdDishIds[item.dishId] = item;
        });

        const mappedDishes = {} as { [id: number]: DishType; };

        dishes.forEach(item => {
            mappedDishes[item.id] = item;
        })

        let total = 0;
        const calculatedDishMap = [] as MappedDishType[];

        cartDishIds.forEach(row => {
            const targetDish = mappedDishes[row.dishId];
            if (!targetDish) return;

            const targetSize = targetDish.sizes.find(size => size.id === row.sizeId);

            const count = row?.count || 1;
            const amount = targetDish.basePrice * (targetSize?.priceMultiplier || 1) * count;
            total += amount;

            calculatedDishMap.push({
                ...targetDish,
                count, targetSize, amount,
            });
        })
        return {
            dishes: calculatedDishMap,
            total: Math.round(total * 100) / 100,
        }
    }, [dishes, cartDishIds]);

    const onCancelDish = (dishId: number) => {
        dispatch(removeDishFromCart(dishId));
    };

    if (!dishes && cartDishIds.length) {
        return (<FullScreenLoader />);
    }

    if (!calculatedCartDishes?.total) {
        return (
            <Stack flex={1} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h4">Cart is empty</Typography>
            </Stack>
        )
    }

    return (
        <>
            <Stack spacing={2} flex={1} pb={1}>
                {
                    calculatedCartDishes.dishes.map(dish => {
                        return (
                            <Paper key={dish.id}>
                                <Stack direction={'row'} spacing={2}>
                                    <Box
                                        component={'img'}
                                        alt={dish.name}
                                        src={dish.image}
                                        width={120}
                                    />
                                    <Stack flex={1}>
                                        <Typography variant="h5">{dish.name}</Typography>
                                        <Typography variant="caption">{dish.count}x</Typography>
                                        <Typography variant="caption">{dish.targetSize?.name}</Typography>
                                        <Typography variant="caption">{dish.amount}$</Typography>
                                    </Stack>
                                    <Stack>
                                        <IconButton aria-label="cancel order" onClick={() => onCancelDish(dish.id)}>
                                            <CloseOutlinedIcon />
                                        </IconButton>
                                    </Stack>
                                </Stack>
                            </Paper>
                        )
                    })
                }
            </Stack>
            <Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography variant="subtitle2">Subtotal</Typography>
                    <Typography variant="subtitle2">{calculatedCartDishes.total} $</Typography>
                </Stack>
                {/* <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography variant="subtitle2">Discount</Typography>
                    <Typography variant="subtitle2">{calculatedCartDishes.total}$</Typography>
                </Stack> */}
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography variant="subtitle2">Deliviery</Typography>
                    <Typography variant="subtitle2">5 $</Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography variant="subtitle1">Total</Typography>
                    <Typography variant="subtitle1">{calculatedCartDishes.total + 5} $</Typography>
                </Stack>


                <Button size="large" variant="contained" color="secondary"
                    onClick={onNextStep}
                >
                    Continue
                </Button>
            </Stack>
        </>
    );
};