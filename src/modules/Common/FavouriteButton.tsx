import { IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

type FavouriteButtonType = {
    isFavourite: boolean;
    toggleFavourite: () => void;
};

export const FavouriteButton: React.FC<FavouriteButtonType> = ({ isFavourite, toggleFavourite }) => {


    const targetHeart = isFavourite
        ? <FavoriteOutlinedIcon color="primary" />
        : <FavoriteBorderOutlinedIcon />;
        
    return (
        <IconButton aria-label="to favorite" onClick={toggleFavourite} >
            {targetHeart}
        </IconButton>
    );
};