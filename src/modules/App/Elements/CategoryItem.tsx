import { Box, Grid, Paper, Typography } from "@mui/material";
import styles from '../styles.module.scss';
import { CategoryType } from "../../../store/category/categoryTypes";

type CategoryItemType = {
    category: CategoryType;
    onOpenCategory: () => void;
};

export const CategoryItem: React.FC<CategoryItemType> = ({ category, onOpenCategory }) => {
    return (
        <Grid className={styles.categoryGridItem}
            item
            xs={2}
            component={'button'}
            onClick={onOpenCategory}
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
    );
};