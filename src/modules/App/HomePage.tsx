import { Button, Stack, SxProps, Typography } from '@mui/material';
import { getThemeMode } from '../../store/app/appSelector';
import { toggleThemeMode } from '../../store/app/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { HomeHeader } from './Elements/HomeHeader';
import { HomeSearch } from './Elements/HomeSearch';
import { Categories } from './Elements/Categories';

let tg = window.Telegram.WebApp;

type HomePageType = {
};

export const HomePage: React.FC<HomePageType> = ({ }) => {
    const dispatch: any = useDispatch();
    const { t: translation } = useTranslation();


    const mode = useSelector(getThemeMode)

    const toggleThee = () => {
        // dispatch(toggleThemeMode(mode))
        console.log(4)
    };


    return (
        <Stack sx={styles.stack}>
            <HomeHeader />
            <Stack bgcolor={'whitesmoke'} flexGrow={1}>
                <HomeSearch />
                <Categories />
                <br />
                {/* <p>{tg?.initDataUnsafe?.user?.id}</p> // уникальный идентификатор пользователя
            <p>{tg?.initDataUnsafe?.user?.isBot}</p> // бот ли пользователь (true/false)
            <p>{tg?.initDataUnsafe?.user?.first_name}</p> // имя пользователя
            <p>{tg?.initDataUnsafe?.user?.last_name}</p> // "фамилия" пользователя
            <p>{tg?.initDataUnsafe?.user?.username}</p> // username пользователя
            <p>{tg?.initDataUnsafe?.user?.language_code}</p> // код языка пользователя */}
                <br />
            </Stack>
        </Stack>
    );
};

const styles = {
    stack: {
        color: 'fpage.main',
        height: '100%'
    } as SxProps,
};