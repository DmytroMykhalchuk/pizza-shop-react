import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MicrowaveOutlinedIcon from '@mui/icons-material/MicrowaveOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const darkMode = 'dark';
export const lightMode = 'light';

export const bottomBar = [
    {
        name: 'Home',
        Icon: HomeOutlinedIcon,
        path: '/',
    },
    {
        name: 'Custom',
        Icon: MicrowaveOutlinedIcon,
        path: '/custom/',
    },
    {
        name: 'Cart',
        Icon: ShoppingCartOutlinedIcon,
        path: '/cart/',
    },
    {
        name: 'Profile',
        Icon: PersonOutlineOutlinedIcon,
        path: '/profile/',
    },
];