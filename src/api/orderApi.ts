import { axiosErrorHandler, axiosResponseHandler, instance } from "./api";

export const orderApi = {
    async getOrders() {
        return instance.post('/orders')
            .then(axiosResponseHandler)
            .catch(axiosErrorHandler);
    },

    async getOrder(orderId: number) {
        return instance.post(`/orders/${orderId}`)
            .then(axiosResponseHandler)
            .catch(axiosErrorHandler);
    },
};