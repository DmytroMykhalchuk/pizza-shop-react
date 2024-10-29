import { instance } from "./api";

export const categoryApi = {
    async getCategories() {
        return instance.get('/categories')
            .then(response => {
                return response.data;
            }).catch(erorr => {
                return erorr?.response?.data;
            });
    }
};