import { getOrder } from '../../store/order/orderSelector';
import { requireOrder } from '../../store/order/orderReducer';
import { Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type OrderIndexPageType = {
};

export const OrderIndexPage: React.FC<OrderIndexPageType> = ({ }) => {
    const dispatch: any = useDispatch();

    const orderId = (useParams().orderId || 0) as number;

    const order = useSelector(getOrder);

    useEffect(() => {
        orderId !== order?.id && dispatch(requireOrder(orderId));
    }, []);

    if (!order) {
        return null;
    }

    return (
        <Stack flex={1} spacing={1}>
            <Stack>
                <Typography variant="h6">Order: {order.id}</Typography>
                <Typography variant="caption" >{order.address}</Typography>
                <Typography variant="caption" >{order.deliveryType}</Typography>
                <Typography variant="caption" >{order.status}</Typography>
                <Typography variant="caption" >{order.total}$</Typography>
            </Stack>
        </Stack>
    );
};