import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email: string, password: string) => {
    const { data } = await $host.post('api/auth/register', {email, password})

    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email: string, password: string) => {
    const { data } = await $host.post('api/auth/login', {email, password})

    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('/api/auth/check',)

    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}