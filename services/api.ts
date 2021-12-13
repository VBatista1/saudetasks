import axios from 'axios';
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

export const api = axios.create({
    baseURL:`https://gorest.co.in/public/v1/`,
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
})