import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { bottomBar } from '../../constants/layoutConstants';
import { Paper } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getHasCartItems } from '../../store/cart/cartSelector';
import { IconWithBadge } from '../../modules/UI/IconWithBadge';
import { bottomBarHeight } from '../../constants/stylesConstant';

type AppFooterType = {
};

export const AppFooter: React.FC<AppFooterType> = ({ }) => {
    const navigate = useNavigate();
    const pathname = useLocation().pathname;

    const hasCartItems = useSelector(getHasCartItems);

    const [position, setPosition] = useState(0);

    useEffect(() => {
        Object.values(bottomBar).forEach((element, position) => {
            if (pathname.includes(element.path)) {
                setPosition(position);
            };
        });
    }, []);

    const onChangeTab = (_: any, newValue: number) => {
        setPosition(newValue);
        navigate(menu[newValue]?.path || '/');
    };

    const menu = useMemo(() => {
        bottomBar.cart.hasBadge = hasCartItems;

        return Object.values(bottomBar);
    }, [hasCartItems]);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: bottomBarHeight }} elevation={3}>
            <BottomNavigation
                value={position}
                onChange={onChangeTab}
                sx={{ backgroundColor: 'secondary.main' }}
            >
                {menu.map((item) => (
                    <BottomNavigationAction
                        key={item.id}
                        label={item.name}
                        sx={{
                            '& .MuiBottomNavigationAction-label': {
                                color: 'fpage.dark'
                            },
                        }}
                        icon={<IconWithBadge Icon={item.Icon} hasBadge={item.hasBadge} />}
                    />
                ))}
            </BottomNavigation>
        </Paper>
    );
};