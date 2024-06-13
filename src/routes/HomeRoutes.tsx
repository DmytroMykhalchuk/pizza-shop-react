import { FullScreenLoader } from '../modules/Common/FullScreenLoader';
import { HomePage } from '../modules/App/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

type HomeRoutesType = {
};

export const HomeRoutes: React.FC<HomeRoutesType> = ({ }) => (
    <Routes>
        <Route path='/*' element={
            <Suspense fallback={<FullScreenLoader />}>
                <HomePage />
            </Suspense>
        } />
    </Routes>
)