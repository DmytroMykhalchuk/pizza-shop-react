import { Stack, SxProps } from '@mui/material';
import { HomeHeader } from './Elements/HomeHeader';
import { HomeSearch } from './Search/HomeSearch';
import { SearchDishes } from './Search/SearchDishes';
import { Categories } from './Elements/Categories';
import { HomeBanner } from './Elements/HomeBanner';
import { DishSections } from './Elements/DishSections';

let tg = window.Telegram.WebApp;

type HomePageType = {
};

export const HomePage: React.FC<HomePageType> = ({ }) => {
    return (
        <Stack sx={styles.stack}>
            <HomeHeader />
            <Stack flexGrow={1} px={1}>
                <HomeSearch />
                <Categories />
                <HomeBanner />
                {/* <SearchDishes /> */}
                <DishSections/>
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