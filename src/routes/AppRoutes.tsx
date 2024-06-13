import { Route, Routes } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
import { CustomRoutes } from './CustomRoutes';
import { CartRoutes } from './CartRoutes';
import { ProfileRoutes } from './ProfileRoutes';

type AppRoutesType = {
};

export const AppRoutes: React.FC<AppRoutesType> = ({ }) => (
    <Routes>
        <Route path='/custom/*' element={<CustomRoutes />} />
        <Route path='/cart/*' element={<CartRoutes />} />
        <Route path='/profile/*' element={<ProfileRoutes />} />
        <Route path='/*' element={<HomeRoutes />} />
    </Routes>
)