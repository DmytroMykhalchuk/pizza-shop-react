import { axiosErrorHandler, axiosResponseHandlerWithAuth, instance } from "./api";

export const profileApi = {
    async telegramAppLogin(initData: string) {
        return instance.post(`/auth/login-mini-app`, { init_data: initData, })
            .then(axiosResponseHandlerWithAuth)
            .catch(axiosErrorHandler);
    },
};