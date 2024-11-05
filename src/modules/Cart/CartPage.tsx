import { BasketView } from './Elements/BasketView';
import { OrderForm } from './Elements/OrderForm';
import { Stack } from '@mui/material';
import { useState } from 'react';

const stepComponents = {
    0: BasketView,
    1: OrderForm,
};

type CartPageType = {
};

export const CartPage: React.FC<CartPageType> = ({ }) => {
    const [step, setStep] = useState<0 | 1>(0);

    const onNextStep = () => {
        setStep(1);
    };

    const onPrevStep = () => {
        setStep(0);
    };

    const CurrentStep = stepComponents[step] ?? <></>;

    return (
        <Stack spacing={1} p={2} flex={1}>
            <CurrentStep onNextStep={onNextStep} onPrevStep={onPrevStep} />
        </Stack>
    );
};