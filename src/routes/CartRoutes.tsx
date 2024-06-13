import { CartPage } from '../modules/Cart/CartPage';
import { FullScreenLoader } from '../modules/Common/FullScreenLoader';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

type CartRoutesType = {
};

export const CartRoutes: React.FC<CartRoutesType> = ({ }) => (
    <Routes>
        <Route path='/*' element={
            <Suspense fallback={<FullScreenLoader />}>
                <CartPage />
            </Suspense>
        } />
    </Routes>
)