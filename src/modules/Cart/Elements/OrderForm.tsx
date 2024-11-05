import { Button, Stack, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { CommonInput } from "../../Form/Elements/CommonInput";
import { useState } from "react";
import { CommonRadio } from "../../Form/Elements/CommonRadio";
import { methodPayments } from "../../../constants/formConstants";
import { useSelector } from "react-redux";
import { getCartDishIds } from "../../../store/cartReducer/cartSelector";

type OrderFormType = {
    onPrevStep: () => void;
    onNextStep: () => void;
};

export const OrderForm: React.FC<OrderFormType> = ({ onPrevStep }) => {
    const cartDishIds = useSelector(getCartDishIds);

    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(methodPayments[0].value);

    const onChangeAddress = (address: string) => {
        setAddress(address);
    };

    const onChangePaymentMethod = (method: string) => {
        setPaymentMethod(method);
    };

    const onConfirmOrder = () => {
        console.log(address, methodPayments, cartDishIds)
    };

    const isDisabledButton = !address;

    return (
        <Stack flex={1} spacing={2}>
            <Typography variant="h5">Оформлення замовлення</Typography>
            <Stack flex={1} spacing={2}>
                <CommonInput
                    label="Address"
                    onChange={onChangeAddress}
                    value={address}
                    minRows={3}
                    required
                />
                <CommonRadio
                    label="Payment method"
                    onChange={onChangePaymentMethod}
                    value={paymentMethod}
                    values={methodPayments}
                />
            </Stack>

            <Stack direction={'row'}>
                <IconButton aria-label="prev" onClick={onPrevStep}>
                    <ArrowBackIosNewOutlinedIcon />
                </IconButton>
                <Button size="large" variant="contained" color="secondary"
                    fullWidth
                    onClick={onConfirmOrder}
                    disabled={isDisabledButton}
                >
                    Pay for it
                </Button>
            </Stack>
        </Stack>
    );
};