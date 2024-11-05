import { Route, Routes } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
import { CustomRoutes } from './CustomRoutes';
import { CartRoutes } from './CartRoutes';
import { ProfileRoutes } from './ProfileRoutes';
import { CategoryRoutes } from './CategoryRoutes';

type AppRootRoutesType = {
};

export const AppRootRoutes: React.FC<AppRootRoutesType> = ({ }) => (
    <Routes>
        {/* <Route path='/custom/*' element={<CustomRoutes />} /> */}
        <Route path='/cart/*' element={<CartRoutes />} />
        <Route path='/profile/*' element={<ProfileRoutes />} />
        <Route path='/categories/*' element={<CategoryRoutes />} />
        <Route path='/*' element={<HomeRoutes />} />
    </Routes>
)