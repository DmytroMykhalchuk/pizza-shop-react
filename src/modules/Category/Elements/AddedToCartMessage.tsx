import { Button, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from "react-router-dom";

type AddedToCartMessageType = {
    showOrderActions: () => void;
};

export const AddedToCartMessage: React.FC<AddedToCartMessageType> = ({ showOrderActions }) => {
    const navigate = useNavigate();

    const onOpenCart = () => {
        navigate('/cart');
    };

    return (
        <Stack>
            <Typography variant="h6" textAlign={'center'}>Successfully added to cart 💛</Typography>
            <Stack direction={'row'} spacing={2} justifyContent={'space-between'} >
                <Button size="large" color="primary" variant="outlined"
                    sx={{ flex: 1 }}
                    endIcon={<ShoppingBagOutlinedIcon />}
                    onClick={showOrderActions}
                >
                    Order More
                </Button>

                <Button size="large" color="primary" variant="contained"
                    sx={{ flex: 1 }}
                    endIcon={<ShoppingCartOutlinedIcon />}
                    onClick={onOpenCart}
                >
                    To cart
                </Button>
            </Stack>
        </Stack>
    );
};