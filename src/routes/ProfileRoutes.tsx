import { FullScreenLoader } from '../modules/Common/FullScreenLoader';
import { ProfilePage } from '../modules/Profile/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { OrdersPage } from '../modules/Profile/OrdersPage';
import { OrderIndexPage } from '../modules/Profile/OrderIndexPage';

type ProfileRoutesType = {
};

export const ProfileRoutes: React.FC<ProfileRoutesType> = ({ }) => (
    <Routes>
        <Route path='/orders' element={
            <Suspense fallback={<FullScreenLoader />}>
                <OrdersPage />
            </Suspense>
        } />
        <Route path='/orders/:orderId' element={
            <Suspense fallback={<FullScreenLoader />}>
                <OrderIndexPage />
            </Suspense>
        } />
        <Route path='/*' element={
            <Suspense fallback={<FullScreenLoader />}>
                <ProfilePage />
            </Suspense>
        } />
    </Routes>
)