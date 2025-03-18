import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ac4e9a559934416c9cded09fc56cfe71'
    }
})