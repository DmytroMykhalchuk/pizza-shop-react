import { axiosErrorHandler, axiosResponseHandler, instance } from "./api";

export const notificationApi = {
    async getNotifications() {
        return instance.post(`/noifications/`)
            .then(axiosResponseHandler)
            .catch(axiosErrorHandler);
    },

    async getNotification(notificationId: number) {
        return instance.post(`/noifications/${notificationId}`)
            .then(axiosResponseHandler)
            .catch(axiosErrorHandler);
    },

    async delete(notificationId: number) {
        return instance.delete(`/noifications/${notificationId}`)
            .then(axiosResponseHandler)
            .catch(axiosErrorHandler);
    },
};