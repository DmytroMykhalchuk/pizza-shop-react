import { FullScreenLoader } from '../modules/Common/FullScreenLoader';
import { ProfilePage } from '../modules/Profile/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

type ProfileRoutesType = {
};

export const ProfileRoutes: React.FC<ProfileRoutesType> = ({ }) => (
    <Routes>
        <Route path='/*' element={
            <Suspense fallback={<FullScreenLoader />}>
                <ProfilePage />
            </Suspense>
        } />
    </Routes>
)