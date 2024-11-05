import { Button, Stack, SxProps, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

type CartActionsType = {
    decreaseCount: () => void;
    increaseCount: () => void;
    onSaveToCart: () => void;
    count: number;
};

export const CartActions: React.FC<CartActionsType> = ({ decreaseCount, increaseCount, onSaveToCart, count }) => {

    return (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'row'} spacing={1} color={'primary.main'} alignItems={'center'}>
                <Button variant="outlined" color="inherit"
                    sx={styles.countButton}
                    onClick={decreaseCount}
                >
                    -
                </Button>
                <Typography variant="h5" color={'fpage.main'}>{count}</Typography>
                <Button variant="outlined" color="inherit"
                    sx={styles.countButton}
                    onClick={increaseCount}
                >
                    +
                </Button>
            </Stack>
            <Button variant="contained" color="primary"
                endIcon={<ShoppingCartOutlinedIcon />}
                size="large"
                sx={styles.buttonConfirm}
                onClick={onSaveToCart}
            >
                Add to cart
            </Button>
        </Stack>
    );
};

const styles = {
    wrapper: {
        position: 'fixed',
        bottom: 60,
        left: 0,
        right: 0,
        p: 2,
    } as SxProps,
    buttonConfirm: {
        fontSize: '1.1rem',
        p: 2,
        px: 4,
        borderRadius: 2,
    } as SxProps,
    countButton: {
        border: 'none',
        fontSize: '2rem',
    } as SxProps,
};