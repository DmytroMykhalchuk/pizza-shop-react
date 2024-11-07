import { getFavouriteDishIds } from '../../../store/dish/dishSelector';
import { Stack, Typography } from '@mui/material';
import { toggleFavouriteDish } from '../../../store/dish/dishReducer';
import { useDispatch, useSelector } from 'react-redux';
import { FavouriteButton } from '../../Common/FavouriteButton';

type HeaderProductPageType = {
    dishId: number;
};

export const HeaderProductPage: React.FC<HeaderProductPageType> = ({ dishId }) => {
    const dispatch: any = useDispatch();

    const favoriteDishIds = useSelector(getFavouriteDishIds);

    const toggleFavourite = () => {
        dispatch(toggleFavouriteDish(dishId, favoriteDishIds))
    };

    return (
        <Stack direction={'row'} px={1} alignItems={'center'}>
            <Stack flex={1}></Stack>
            <Typography flex={8} variant="h6" textAlign={'center'}>Details</Typography>
            <Stack flex={1}>
                <FavouriteButton
                    isFavourite={favoriteDishIds.includes(dishId)}
                    toggleFavourite={toggleFavourite}
                />
            </Stack>
        </Stack>
    );
};