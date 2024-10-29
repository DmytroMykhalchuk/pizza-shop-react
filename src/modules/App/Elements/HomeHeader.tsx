import { Avatar, Box, Stack, Typography } from "@mui/material";
import { HomeMenu } from "./HomeMenu";
import styles from './../styles.module.scss';

const tg = window.Telegram.WebApp as any;

type HomeHeaderType = {
};

export const HomeHeader: React.FC<HomeHeaderType> = ({ }) => {
    const userName = tg?.initDataUnsafe?.user?.first_name || tg?.initDataUnsafe?.user?.username;
    
    return (
        <Stack className={styles.header} spacing={2}
            sx={{
                backgroundColor: 'primary.main'
            }}
        >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <HomeMenu />
                <Avatar alt={tg?.initDataUnsafe?.user?.username || ''} src={tg?.initDataUnsafe?.user?.photo_url} />
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