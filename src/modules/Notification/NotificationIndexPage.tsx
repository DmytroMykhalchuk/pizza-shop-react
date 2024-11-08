import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../store/notification/notificationSelector";
import { useEffect } from "react";
import { requireNotifications } from "../../store/notification/notificationReducer";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NotificationMenu } from "./Elements/NotificationMenu";

type NotificationIndexPageType = {
};

export const NotificationIndexPage: React.FC<NotificationIndexPageType> = ({ }) => {
    const dispatch: any = useDispatch();

    const notifications = useSelector(getNotifications);

    useEffect(() => {
        notifications || dispatch(requireNotifications());
    }, []);


    if (Array.isArray(notifications) && !notifications?.length) {
        return (
            <Stack flex={1} p={2}>
                <Typography variant="h6" >
                    No notifcations
                </Typography>
            </Stack>
        );
    }

    return (
        <Stack p={2}>
            <Typography variant="h5">Notifications</Typography>
            <List>
                {notifications?.map(notification => (
                    <ListItem secondaryAction={<ArrowForwardIosIcon color="primary" />}>
                        <Stack direction={'row'}>
                            <Box flex={1}>
                                <Typography variant="h6">{notification.type}</Typography>
                                <Typography variant="body1">{notification.message}</Typography>
                                <Typography variant="caption">{notification.createdAt}</Typography>
                            </Box>
                            <NotificationMenu notificationId={notification.id} />
                        </Stack>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
};