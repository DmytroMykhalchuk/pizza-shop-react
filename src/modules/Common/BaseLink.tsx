import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom';

type BaseLinkType = {
    to: string;
    label: string;
};

export const BaseLink: React.FC<BaseLinkType> = ({ to, label }) => {
    const navigate = useNavigate();

    const onNavigate = () => {
        navigate(to);
    };

    return (
        <Typography variant="body1"
            onClick={onNavigate}
            sx={{
                color:'#ffb500'
            }}
        >
            {label}
        </Typography>
    );
};