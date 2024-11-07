import { BaseLink } from '../../Common/BaseLink';
import { CategoryItem } from './CategoryItem';
import { getCategories } from '../../../store/category/categorySelector';
import { Grid, Stack, Typography } from '@mui/material';
import { requireCategories } from '../../../store/category/categoryReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
type CategoriesType = {
};

export const Categories: React.FC<CategoriesType> = ({ }) => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const categories = useSelector(getCategories);

    useEffect(() => {
        categories || dispatch(requireCategories());
    }, []);

    const onOpenCategory = (id: number) => {
        navigate('categories/' + id);
    };

    return (
        <Stack width={'100%'} px={2}>
            <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'space-between'}>
                <Typography variant="h6">Категорії</Typography>
                <BaseLink to="/categories" label="Більше" />
            </Stack>
            <Grid container columns={10}>
                {
                    categories?.map(category => (
                        <CategoryItem
                            key={category.id}
                            category={category}
                            onOpenCategory={() => onOpenCategory(category.id)}
                        />
                    ))
                }
            </Grid>
        </Stack>
    );
};

