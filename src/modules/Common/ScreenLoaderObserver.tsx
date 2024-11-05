import { FullScreenLoader } from './FullScreenLoader';
import { getIsFetching } from '../../store/app/appSelector';
import { useSelector } from 'react-redux';

type ScreenLoaderObserverType = {
};

export const ScreenLoaderObserver: React.FC<ScreenLoaderObserverType> = ({ }) => {
    const isFetching = useSelector(getIsFetching);

    if (isFetching) {
        return (<FullScreenLoader />);
    }

    return null;
};