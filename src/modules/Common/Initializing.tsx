import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLanguageCode, getRedirectPath } from "../../store/app/appSelector";
import { changeAppLocale, removeRedirect } from "../../store/app/appReducer";
import { FullScreenLoader } from "./FullScreenLoader";
import { initCart } from "../../store/cart/cartReducer";

type InitializingType = {
    children: ReactNode;
};

let tg = window.Telegram.WebApp;

export const Initializing: React.FC<InitializingType> = ({ children }) => {
    const dispatch: any = useDispatch();

    const languageCode = useSelector(getLanguageCode);

    const [isInited, setIsInited] = useState(false);

    useEffect(() => {
        tg.ready();
        tg.expand();


        if (!languageCode) {
            dispatch(changeAppLocale(tg.initDataUnsafe.user.language_code))
        }
        dispatch(initCart());
        setIsInited(true);


    }, []);

    if (isInited) {
        return children;
    }

    return (<FullScreenLoader />);

};