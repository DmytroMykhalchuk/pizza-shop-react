import { Button, Stack, SxProps, Typography } from '@mui/material';
import { getThemeMode } from '../../store/app/appSelector';
import { toggleThemeMode } from '../../store/app/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

type HomePageType = {
};

export const HomePage: React.FC<HomePageType> = ({ }) => {
    const dispatch: any = useDispatch();
    const { t: translation } = useTranslation();
    
    
    const mode = useSelector(getThemeMode)

    const toggleThee = () => {
        dispatch(toggleThemeMode(mode))
    };


    
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={styles.stack}>
            <Typography variant="h1" color={'inherit'}>Home</Typography>
            <Button variant="text" color="primary" onClick={toggleThee}>
                {translation('hello_world')}
            </Button>
        </Stack>
    );
};

const styles = {
    stack: {
        color: 'fpage.main',
        height: '100vh',
    } as SxProps,
};