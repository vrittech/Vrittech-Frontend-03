import axios from "axios"
import { errorToast } from "./toastify.service";

const SERVER_URL = import.meta.env.VITE_LOCAL_SERVER_URL;
const token = localStorage.getItem('jwt');

export const postData = async (url: string, data: any) => {
    try {
        const response = await axios.post(`${SERVER_URL}/${url}`, data);
        return response.data;
    } catch (error: any) {
        errorToast(error.response.data.message);
    }
}

export const postDataWithHeaders = async (url: string, data: any) => {
    try {
        const response = await axios.post(`${SERVER_URL}/${url}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error: any) {
        errorToast(error.response.data.message);
    }
}


export const patchDataWithHeaders = async (url: string, data: any) => {
    try {
        const response = await axios.patch(`${SERVER_URL}/${url}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error: any) {
        errorToast(error.response.data.message);
    }
}

export const getData = async (url: string) => {
    try {

        const response = await axios.get(`${SERVER_URL}/${url}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error: any) {
        errorToast(error.response.data.message);
    }
}

export const deleteData = async (url: string) => {
    try {

        const response = await axios.delete(`${SERVER_URL}/${url}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error: any) {
        errorToast(error.response.data.message);
    }
}