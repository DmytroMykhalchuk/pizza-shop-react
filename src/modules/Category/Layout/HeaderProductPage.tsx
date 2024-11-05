import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { getFavouriteDishes } from '../../../store/dish/dishSelector';
import { IconButton, Stack, Typography } from '@mui/material';
import { toggleFavouriteDish } from '../../../store/dish/dishReducer';
import { useDispatch, useSelector } from 'react-redux';

type HeaderProductPageType = {
    dishId: number;
};

export const HeaderProductPage: React.FC<HeaderProductPageType> = ({ dishId }) => {
    const dispatch: any = useDispatch();

    const favoriteDishes = useSelector(getFavouriteDishes);

    const targetHeart = favoriteDishes.includes(dishId)
        ? <FavoriteOutlinedIcon color="primary" />
        : <FavoriteBorderOutlinedIcon />;

    const toggleFavourite = () => {
        dispatch(toggleFavouriteDish(dishId,favoriteDishes))
    };

    return (
        <Stack direction={'row'} px={1} alignItems={'center'}>
            <Stack flex={1}></Stack>
            <Typography flex={8} variant="h6" textAlign={'center'}>Details</Typography>
            <Stack flex={1}>
                <IconButton aria-label="to favorite" onClick={toggleFavourite} >
                    {targetHeart}
                </IconButton>
            </Stack>
        </Stack>
    );
};