import axios from "axios"

export const unsplash_api = axios.create({
    baseURL: "https://api.unsplash.com/",
})


unsplash_api.defaults.headers.common.Authorization = `Client-ID ${process.env.unsplash_client_id}
`