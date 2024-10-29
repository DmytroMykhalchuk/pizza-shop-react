import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../store/category/categorySelector";
import { useEffect } from "react";
import { requireCategories } from "../../../store/category/categoryReducer";
import styles from './../styles.module.scss';
import { NavLink, useNavigate } from "react-router-dom";
import { BaseLink } from "../../Common/BaseLink";
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
                <BaseLink to="/categories" label="Більше"/>
            </Stack>
            <Grid container columns={10}>
                {
                    categories?.map(category => (
                        <Grid className={styles.categoryGridItem}
                            key={category.id}
                            item
                            xs={2}
                            component={'button'}
                            onClick={() => onOpenCategory(category.id)}
                        >
                            <Paper className={styles.iconWrapper} >
                                <Box
                                    className={styles.iconWrapper__icon}
                                    component={'img'}
                                    alt={category.name}
                                    src={category.icon}
                                />
                            </Paper>
                            <Typography variant="body1" textAlign={'center'}>{category.name}</Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </Stack>
    );
};

