import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MicrowaveOutlinedIcon from '@mui/icons-material/MicrowaveOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const darkMode = 'dark';
export const lightMode = 'light';

export const bottomBar = {
    home: {
        id: 'home',
        name: 'Home',
        Icon: HomeOutlinedIcon,
        path: '/',
        hasBadge: false,
    },
    custom: {
        id: 'categories',
        name: 'Categories',
        Icon: MicrowaveOutlinedIcon,
        path: '/categories/',
        hasBadge: false,
    },
    cart: {
        id: 'cart',
        name: 'Cart',
        Icon: ShoppingCartOutlinedIcon,
        path: '/cart/',
        hasBadge: false,
    },
    profile: {
        id: 'profile',
        name: 'Profile',
        Icon: PersonOutlineOutlinedIcon,
        path: '/profile/',
        hasBadge: false,
    },
};

export const profileMenu = [
    { label: 'Orders', path: '/profile/orders', },
];