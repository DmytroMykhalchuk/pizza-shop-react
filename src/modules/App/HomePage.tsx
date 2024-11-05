import { Stack, SxProps} from '@mui/material';
import { HomeHeader } from './Elements/HomeHeader';
import { HomeSearch } from './Elements/HomeSearch';
import { SearchDishes } from './Elements/SearchDishes';

let tg = window.Telegram.WebApp;

type HomePageType = {
};

export const HomePage: React.FC<HomePageType> = ({ }) => {

    return (
        <Stack sx={styles.stack}>
            <HomeHeader />
            <Stack bgcolor={'whitesmoke'} flexGrow={1}>
                <HomeSearch />
                {/* <Categories /> */}
                <SearchDishes />
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