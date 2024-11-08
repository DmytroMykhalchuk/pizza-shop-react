import { FullScreenLoader } from '../modules/Common/FullScreenLoader';
import { HomePage } from '../modules/App/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { NotificationIndexPage } from '../modules/Notification/NotificationIndexPage';

type HomeRoutesType = {
};

export const HomeRoutes: React.FC<HomeRoutesType> = ({ }) => (
    <Routes>
        <Route path='/noifications' element={
            <Suspense fallback={<FullScreenLoader />}>
                <NotificationIndexPage />
            </Suspense>
        } />
        <Route path='/*' element={
            <Suspense fallback={<FullScreenLoader />}>
                <HomePage />
            </Suspense>
        } />
    </Routes>
)