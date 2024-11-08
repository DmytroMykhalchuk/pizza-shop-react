import { FullScreenLoader } from '../modules/Common/FullScreenLoader';
import { ProfilePage } from '../modules/Profile/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { OrdersPage } from '../modules/Order/OrdersPage';
import { OrderIndexPage } from '../modules/Order/OrderIndexPage';
import { LanguagePage } from '../modules/Profile/LanguagePage';

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
        <Route path='/language' element={
            <Suspense fallback={<FullScreenLoader />}>
                <LanguagePage />
            </Suspense>
        } />

        <Route path='/*' element={
            <Suspense fallback={<FullScreenLoader />}>
                <ProfilePage />
            </Suspense>
        } />
    </Routes>
)