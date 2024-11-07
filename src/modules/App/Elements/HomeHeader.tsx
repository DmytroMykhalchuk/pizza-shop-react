import { Avatar, Box, Stack, Typography, IconButton } from "@mui/material";
import { HomeMenu } from "./HomeMenu";
import styles from './../styles.module.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';

const tg = window.Telegram.WebApp as any;

type HomeHeaderType = {
};

export const HomeHeader: React.FC<HomeHeaderType> = ({ }) => {

    const onOpenNatifcation = () => { };

    const userName = tg?.initDataUnsafe?.user?.first_name || tg?.initDataUnsafe?.user?.username;

    return (
        <Stack className={styles.header} spacing={2}
            sx={{
                backgroundColor: 'secondary.main'
            }}
        >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <HomeMenu />
                <IconButton aria-label="notification" onClick={onOpenNatifcation}>
                    <NotificationsIcon />
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