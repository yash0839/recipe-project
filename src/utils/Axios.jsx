import axios from "axios";

const instance = axios.create({
    baseURL:"https://fakestoreapi.com/",
    // wirhcredentails:true
})

//App a request intercepter
instance.interceptors.request.use(
        function (config){
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
)

//App a responde intercepter
instance.interceptors.response.use(
    function (response){
        return response;
    },
    function (error){
        return Promise.reject(error);
    }
)

export default instance