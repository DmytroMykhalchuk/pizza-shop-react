import { axiosErrorHandler, axiosResponseHandler, instance } from "./api";

export const cartApi = {
    async getCartDishes(dishes: number[]) {
        return instance.post(`/dishes/range`, { dishes })
            .then(axiosResponseHandler)
            .catch(axiosErrorHandler);
    },
};