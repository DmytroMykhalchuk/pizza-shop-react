import { CustomPage } from '../modules/Custom/CustomPage';
import { FullScreenLoader } from '../modules/Common/FullScreenLoader';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

type CustomRoutesType = {
};

export const CustomRoutes: React.FC<CustomRoutesType> = ({ }) => (
    <Routes>
        <Route path='/*' element={
            <Suspense fallback={<FullScreenLoader />}>
                <CustomPage />
            </Suspense>
        } />
    </Routes>
)