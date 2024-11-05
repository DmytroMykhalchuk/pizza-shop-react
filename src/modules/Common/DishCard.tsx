import { Box, ListItemButton, Stack, Typography } from '@mui/material';
import { DishType } from '../../store/dish/dishTypes';
import { useNavigate } from 'react-router-dom';

type DishCardType = {
    dish: DishType;
};

export const DishCard: React.FC<DishCardType> = ({ dish }) => {
    const navigate = useNavigate();

    const onOpenDish = (categoryId: number, dishId: number) => {
        navigate(`/categories/${categoryId}/${dishId}`);
    };

    return (
        <ListItemButton
            divider
            role={'link'}
            onClick={() => onOpenDish(dish.category.id, dish.id)}
        >
            <Stack direction={'row'} spacing={2} flex={1}>
                <Box
                    width={80}
                    height={80}
                    component={'img'}
                    alt={dish.name}
                    src={dish.image}
                />
                <Stack flex={1}>
                    <Stack spacing={2} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant="h6">{dish.name}</Typography>
                        <Typography variant="caption">{dish.basePrice} $</Typography>
                    </Stack>
                    <Typography variant="caption">{dish.description}</Typography>
                    <Typography variant="caption">{dish.sizes.map(item => item.sizeCode).join(', ')}</Typography>
                </Stack>
            </Stack>
        </ListItemButton>
    );
};