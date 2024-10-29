import { AllCategoriesPage } from '../modules/Category/AllCategoriesPage';
import { CategoryIndexPage } from '../modules/Category/CategoryIndexPage';
import { FullScreenLoader } from '../modules/Common/FullScreenLoader';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

type CategoryRoutesType = {
};

export const CategoryRoutes: React.FC<CategoryRoutesType> = ({ }) => (
    <Routes>
        <Route path='/:categoryId' element={
            <Suspense fallback={<FullScreenLoader />}>
                <CategoryIndexPage />
            </Suspense>
        } />
        <Route path='/*' element={
            <Suspense fallback={<FullScreenLoader />}>
                <AllCategoriesPage />
            </Suspense>
        } />
    </Routes>
)