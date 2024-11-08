import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLanguageCode, getRedirectPath } from "../../store/app/appSelector";
import { changeAppLocale, removeRedirect } from "../../store/app/appReducer";
import { FullScreenLoader } from "./FullScreenLoader";
import { initCart } from "../../store/cart/cartReducer";
import { getIsAuthorized } from "../../store/profile/profileSelector";
import { login } from "../../store/profile/profileReducer";

type InitializingType = {
    children: ReactNode;
};

let tg = window.Telegram.WebApp;

export const Initializing: React.FC<InitializingType> = ({ children }) => {
    const dispatch: any = useDispatch();

    const languageCode = useSelector(getLanguageCode);
    const isAuthorized = useSelector(getIsAuthorized);

    const [isInited, setIsInited] = useState(false);

    useEffect(() => {
        tg.ready();
        tg.expand();

        console.log(isAuthorized)

        if (!isAuthorized) {
            console.log(tg.initData)
            dispatch(login(tg.initData));
        }
        if (!languageCode) {
            dispatch(changeAppLocale(tg.initDataUnsafe.user.language_code))
        } else {

        }
        dispatch(initCart());
        setIsInited(true);


    }, []);

    if (isInited && isAuthorized) {
    // if (isInited) {
        return children;
    }

    return (<FullScreenLoader />);

};