import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux';
import { deleteNotification } from '../../../store/notification/notificationReducer';
import { ListItemIcon, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type NotificationMenuType = {
    notificationId: number;
};

export const NotificationMenu: React.FC<NotificationMenuType> = ({ notificationId }) => {
    const dispatch: any = useDispatch();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };

    const onDeleteNotification = () => {
        dispatch(deleteNotification(notificationId));
        onClose();
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'home-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertIcon sx={{ color: 'fpage.dark' }} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={onDeleteNotification}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText></MenuItem>
            </Menu>
        </div>
    );
}