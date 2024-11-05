import { axiosErrorHandler, axiosResponseHandler, instance } from "./api";

export const categoryApi = {
    async getCategories() {
        return instance.get('/categories')
            .then(axiosResponseHandler)
            .catch(axiosErrorHandler);
    }
};