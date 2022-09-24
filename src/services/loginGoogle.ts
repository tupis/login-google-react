import axios from "axios";

const baseURL = "https://www.googleapis.com/oauth2/v3/userinfo"

const loginGoogle = axios.create({
    baseURL
})

export default loginGoogle;