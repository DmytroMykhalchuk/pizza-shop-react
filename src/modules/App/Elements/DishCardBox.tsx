import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import { Box, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import { DishType } from '../../../store/dish/dishTypes';
import { FavouriteButton } from '../../Common/FavouriteButton';
import { useNavigate } from 'react-router-dom';

type DishCardBoxType = {
    dish: DishType;
    toggleFavourite: () => void;
    isFavorite: boolean
};

export const DishCardBox: React.FC<DishCardBoxType> = ({ dish, toggleFavourite, isFavorite }) => {
    const navigate = useNavigate();

    const onOpenDish = (categoryId: number, dishId: number) => {
        navigate(`/categories/${categoryId}/${dishId}`);
    };

    const targetIcon = dish.rating < 4
        ? <StarHalfIcon color='primary' fontSize='inherit' />
        : <StarIcon color='primary' fontSize='inherit' />;

    return (
        <Grid
            xs={6}
            item
            role={'link'}
            p={0.5}
            position={'relative'}
        >
            <Box position={'absolute'} right={2} top={2}>
                <FavouriteButton
                    isFavourite={isFavorite}
                    toggleFavourite={toggleFavourite}
                />
            </Box>
            {
                (dish.discount > 0 || dish.isNew) && <Box position={'absolute'} left={2} p={1} top={2}>
                    {dish.discount > 0 &&
                        <Typography variant="caption" color={'primary'}>🔥-{dish.discount}%</Typography>
                    }
                    {dish.isNew &&
                        <Typography variant="caption" color="success.light">💚 New</Typography>
                    }
                </Box>
            }
            <Paper sx={{ p: 1 }}>
                <Stack alignItems={'center'}>
                    <Box
                        width={120}
                        height={120}
                        component={'img'}
                        alt={dish.name}
                        src={dish.image}
                    />
                </Stack>
                <Stack flex={1}>
                    <Stack justifyContent={'space-between'} alignItems={'end'} direction={'row'}>
                        <Typography variant="h6">{dish.name}</Typography>
                        <Typography variant="caption" alignItems={'center'} display={'flex'} lineHeight={1}>{targetIcon}{dish.rating}</Typography>
                    </Stack>
                    <Typography variant="caption">{dish.sizes.map(item => item.sizeCode).join(', ')}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography variant="subtitle1">{dish.basePrice} $</Typography>
                    <IconButton aria-label="open" color='primary' size='small' onClick={() => onOpenDish(dish.category.id, dish.id)}>
                        <OpenInNewIcon />
                    </IconButton>
                </Stack>
            </Paper>
        </Grid>
    );
};