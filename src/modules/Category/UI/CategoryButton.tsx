import { Button, styled } from "@mui/material";

export const CategoryButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    justifyContent: 'space-between',
    gap: 2,
    p: 2,
    ':hover': {
        backgroundColor: theme.palette.secondary.dark,
    },
    borderWidth: 2,
    borderColor: theme.palette.divider,
    borderStyle: 'solid',
    borderRadius: 8,
}));