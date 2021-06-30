import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://jordan.ashton.fashion/api/goods/30/'
});

export const mainAPI = {
    getCommentsData(currentPage){
        debugger
        return instance.get(`comments?page=${currentPage}`)
            .then(response => {
                return response.data
            });
    },

    postComments(name, comment){
        return instance.post(`comments`, {
            name: name,
            text: comment
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
    })}
};

