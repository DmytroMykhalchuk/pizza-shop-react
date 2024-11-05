import { axiosErrorHandler, axiosResponseHandler, instance } from "./api";

export const dishApi = {
    async searchDishes(search: string) {
        return instance.post('/dishes/search', {
            params: {
                search,
            }
        })
            .then(axiosResponseHandler)
            .catch(axiosErrorHandler);
    },

    async getDish(dishId: number) {
        return instance.post(`/dishes/${dishId}`)
            .then(axiosResponseHandler)
            .catch(axiosErrorHandler);
    },
};