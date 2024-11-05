import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { profileMenu } from '../../constants/layoutConstants';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
    const navigate = useNavigate();

    const onOpenLink = (path: string) => {
        navigate(path);
    }

    return (
        <Stack spacing={2} p={1}>
            <Typography variant="h6">Profile</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {profileMenu.map((item) => (
                    <ListItem
                        key={item.path}
                        secondaryAction={<ArrowForwardIosOutlinedIcon color='primary' />}
                        disablePadding
                        divider
                    >
                        <ListItemButton role={undefined} onClick={() => onOpenLink(item.path)} dense>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                )
                )}
            </List>
        </Stack>
    );
}