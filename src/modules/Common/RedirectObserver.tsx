import { getRedirectPath } from '../../store/app/appSelector';
import { removeRedirect } from '../../store/app/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type RedirectObserverType = {
};

export const RedirectObserver: React.FC<RedirectObserverType> = ({ }) => {
    const navigate = useNavigate();
    const dispatch: any = useDispatch();

    const redirectPath = useSelector(getRedirectPath);

    useEffect(() => {
        if (!redirectPath) return;

        dispatch(removeRedirect());
        navigate(redirectPath);

        // eslint-disable-next-line
    }, [redirectPath]);
    
    return null;
};