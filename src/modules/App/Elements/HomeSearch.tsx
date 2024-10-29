import TextField from '@mui/material/TextField'
import { useState } from 'react';
import { FormControl, InputBase, OutlinedInput, Paper, IconButton, Divider } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { BaseDialog } from '../../Common/BaseDialog';
import { ShopFilterComponent } from './ShopFilterComponent';

export type ShopFilter = {
    hasBonus: boolean;
};

const defaultFilter = {
    hasBonus: false,
};

type HomeSearchType = {
};

export const HomeSearch: React.FC<HomeSearchType> = ({ }) => {
    const [search, setSearch] = useState('');
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [filter, setFilter] = useState<ShopFilter>(defaultFilter);

    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value);
    };

    const onSearch = () => { };

    const toggleFilter = () => {
        setIsOpenFilter((prev: boolean) => !prev);
    };

    const onCofirmFilter = () => {
        toggleFilter();
        onSearch();
    };

    const onCloseFilter = () => {
        setFilter(defaultFilter);
        toggleFilter();
    };

    const updateFilter = (filter: ShopFilter) => {
        setFilter(filter);
    };

    return (
        <>
            <Paper sx={{
                background: '#fff', borderRadius: 1, width: '80%',
                display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                translate: '0 -50%',
                margin: '0 auto',
            }}>
                <IconButton aria-label="search" onClick={onSearch}>
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Divider orientation='vertical' sx={{ height: '70%' }} />
                <IconButton aria-label="search" onClick={toggleFilter}>
                    <TuneIcon />
                </IconButton>
            </Paper>
            <BaseDialog
                isOpen={isOpenFilter}
                onCancel={onCloseFilter}
                onConfirm={onCofirmFilter}
                context={<ShopFilterComponent filter={filter} updateFilter={updateFilter} />}
                title='Filter'
                maxWidth='md'
                fullWidth
            />
        </>
    );
};