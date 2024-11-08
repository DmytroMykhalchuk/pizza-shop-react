import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { getOrders } from '../../store/order/orderSelector';
import { List, ListItem, ListItemButton, Stack, Typography } from '@mui/material';
import { requireOrders } from '../../store/order/orderReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type OrdersPageType = {
};

export const OrdersPage: React.FC<OrdersPageType> = ({ }) => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const orders = useSelector(getOrders);

    useEffect(() => {
        orders || dispatch(requireOrders());
    }, []);

    const onOpenLink = (orderId: number) => {
        navigate(orderId.toString());
    };

    return (
        <Stack flex={1} spacing={1}>
            <List>
                {
                    orders?.map(order => (
                        <ListItem
                            key={order.id}
                            secondaryAction={<ArrowForwardIosOutlinedIcon color='primary' />}
                            disablePadding
                            divider
                        >
                            <ListItemButton role={undefined} onClick={() => onOpenLink(order.id)} dense>
                                <Stack>
                                    <Typography variant="h6">Order: {order.id}</Typography>
                                    <Typography variant="caption" >{order.address}</Typography>
                                    <Typography variant="caption" >{order.deliveryType}</Typography>
                                    <Typography variant="caption" >{order.status}</Typography>
                                    <Typography variant="caption" >{order.total}$</Typography>
                                </Stack>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Stack>
    );
};