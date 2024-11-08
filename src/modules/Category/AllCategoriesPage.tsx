import { Box, Stack, Typography } from '@mui/material';
import { CategoryButton } from './UI/CategoryButton';
import { getCategories } from '../../store/category/categorySelector';
import { requireCategories } from '../../store/category/categoryReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BaseLink } from '../Common/BaseLink';

type AllCategoriesPageType = {
};

export const AllCategoriesPage: React.FC<AllCategoriesPageType> = ({ }) => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const categories = useSelector(getCategories);

    useEffect(() => {
        categories || dispatch(requireCategories());
    }, []);

    const onOpenCategoryLink = (event: React.MouseEvent) => {
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href') || "/";

        navigate(href);
    };

    return (
        <Stack spacing={2} p={1}>
            <Typography variant="h5">Alll categories</Typography>
            {
                categories?.map(category => (
                    <CategoryButton key={category.id} href={`/categories/${category.slug}`} onClick={onOpenCategoryLink}>
                        <Stack flex={1} textAlign={'center'}>
                            <Typography variant="h6">{category.name}</Typography>
                            <Typography variant="h6">{category.description}</Typography>
                        </Stack>
                        <Box
                            component={'img'}
                            src={category.icon}
                            alt={category.name}
                            height={80}
                        />
                    </CategoryButton>
                ))
            }
        </Stack>
    );
};