import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { bottomBar } from '../../constants/layoutConstants';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type AppFooterType = {
};

export const AppFooter: React.FC<AppFooterType> = ({ }) => {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const onChangeTab = (_: any, newValue: number) => {
        setValue(newValue);
        navigate(bottomBar[newValue]?.path || '/');
    };

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, }} elevation={3}>
            <BottomNavigation
                value={value}
                onChange={onChangeTab}
                sx={{ backgroundColor: 'secondary.main' }}
            >
                {bottomBar.map((item) => (
                    <BottomNavigationAction key={item.name} label={item.name} icon={<item.Icon />} />
                ))}
            </BottomNavigation>
        </Paper>
    );
};