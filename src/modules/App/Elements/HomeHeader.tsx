import { Box, Stack, Typography, IconButton, Badge } from "@mui/material";
import styles from './../styles.module.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from "react-redux";
import { getNotificationsCount } from "../../../store/profile/profileSelector";
import { useNavigate } from "react-router-dom";

const tg = window.Telegram.WebApp as any;

type HomeHeaderType = {
};

export const HomeHeader: React.FC<HomeHeaderType> = ({ }) => {
    const navigate = useNavigate();

    const notificationsCount = useSelector(getNotificationsCount);

    const onOpenNatifcation = () => {
        navigate('noifications');
    };

    const userName = tg?.initDataUnsafe?.user?.first_name || tg?.initDataUnsafe?.user?.username;

    return (
        <Stack className={styles.header} spacing={2}
            sx={{
                backgroundColor: 'secondary.main'
            }}
        >
            <Stack direction={'row'} justifyContent={'flex-end'} alignItems={'center'}>
                <IconButton aria-label="notification" onClick={onOpenNatifcation}>
                    <Badge badgeContent={notificationsCount} color="primary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Stack>

            <Box p={1} pb={5}>
                <Typography variant="h6" pb={1}>👋 Hey, {userName}!</Typography>
                <Typography variant="h5" component={'p'} fontWeight={600}>
                    Would you like some pizza?
                </Typography>
            </Box>
        </Stack>
    );
};