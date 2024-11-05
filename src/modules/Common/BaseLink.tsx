import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

type BaseLinkType = {
    to: string;
    label: string;
};

export const BaseLink: React.FC<BaseLinkType> = ({ to, label }) => {

    return (
        <NavLink to={to}>
            <Typography variant="body1"
                sx={{ color: 'primary.dark' }}
            >
                {label}
            </Typography>
        </NavLink>
    );
};