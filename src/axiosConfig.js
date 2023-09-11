import axios from 'axios';

const axiosConfig = () => {
    let dynamicBaseURL = process.env.REACT_APP_BASEURL_PROD_MODE
    if (process.env.NODE_ENV === 'development'){
        dynamicBaseURL = process.env.REACT_APP_BASEURL_DEV_MODE
    }else{
        dynamicBaseURL = process.env.REACT_APP_BASEURL_PROD_MODE
    }
    const instance = axios.create({
        baseURL: dynamicBaseURL,
        responseType: 'json',
        withCredentials: false,
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return instance;
};

export default axiosConfig();