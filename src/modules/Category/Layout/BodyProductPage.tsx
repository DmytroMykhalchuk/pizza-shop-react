import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import { DishSizes } from '../Elements/DishSizes';
import { FullDishType } from '../../../store/dish/dishTypes';
import { PizzaHeaderProperty } from '../Elements/PizzaHeaderProperty';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { CartFooter } from '../Elements/CartFooter';

type BodyProductPageType = {
    dish: FullDishType;
};

export const BodyProductPage: React.FC<BodyProductPageType> = ({ dish }) => {
    const [selectedSizeId, setSelectedSizeId] = useState(dish.sizes[0].id);
    const [dishPrice, setDishPrice] = useState(dish.basePrice);

    const onSelectSize = (sizeId: number) => {
        setSelectedSizeId(sizeId);

        const targetSize = dish.sizes.find(size => size.id === sizeId);

        if (targetSize) {
            const price = Math.round(dish.basePrice * targetSize.priceMultiplier * 100) / 100;
            setDishPrice(price);
        }
    };

    return (
        <>
            <Stack direction={'row'} spacing={2} alignItems={'end'} justifyContent={'space-between'}>
                <Typography flex={1} variant="h5" color={'primary'} textAlign={'center'} fontWeight={600}>
                    ${dishPrice}
                </Typography>

                <PizzaHeaderProperty variant="body1">
                    <AccessTimeIcon color="primary" /> &nbsp;{dish?.timeCooking} хв
                </PizzaHeaderProperty>

                <PizzaHeaderProperty variant="body1">
                    <StarIcon color="primary" /> {dish?.rating}
                </PizzaHeaderProperty>
            </Stack>
            <DishSizes
                onSelectSize={onSelectSize}
                sizes={dish.sizes}
                selectedSizeId={selectedSizeId}
            />
            <Typography variant="body1">
                {dish.description}
            </Typography>

            <Typography variant="body1">
                {dish.detail}
            </Typography>
            <CartFooter dishPropeties={{
                dishId: dish.id,
                sizeId: selectedSizeId,
            }} />
        </>
    );
};