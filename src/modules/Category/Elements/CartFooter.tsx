import { Paper, Stack, Button, SxProps, Typography } from "@mui/material";
import { useState } from "react";
import { cartKey } from "../../../constants/storageConstants";
import { CartActions } from "./CartActions";
import { AddedToCartMessage } from "./AddedToCartMessage";
import { useDispatch } from "react-redux";
import { addToCartDish } from "../../../store/cartReducer/cartReducer";

type CartFooterType = {
    dishPropeties: {
        dishId: number;
        sizeId: number;
    }
};

export const CartFooter: React.FC<CartFooterType> = ({ dishPropeties }) => {
    const dispatch: any = useDispatch();

    const [count, setCount] = useState(1);
    const [isItemAdded, setIsItemAdded] = useState(false);

    const increaseCount = () => {
        setCount((prev: number) => prev + 1);
    };

    const decreaseCount = () => {
        if (count != 1) {
            setCount((prev: number) => prev - 1);
        }
    };

    const onSaveToCart = () => {
        const cartData = {
            ...dishPropeties,
            count,
        };

        dispatch(addToCartDish(cartData));

        toggleIsItemAdded();
    };

    const toggleIsItemAdded = () => {
        setIsItemAdded((prev: boolean) => !prev);
    };

    const targetComponent = isItemAdded
        ? <AddedToCartMessage showOrderActions={toggleIsItemAdded} />
        : <CartActions
            count={count}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
            onSaveToCart={onSaveToCart}
        />

    return (
        <Paper
            sx={styles.wrapper} elevation={3}>
            {targetComponent}
        </Paper>
    );
};

const styles = {
    wrapper: {
        position: 'fixed',
        bottom: 60,
        left: 0,
        right: 0,
        p: 2,
        height: 100,
    } as SxProps,
};