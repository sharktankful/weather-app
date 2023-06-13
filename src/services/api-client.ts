import axios from "axios";

export default axios.create({
    params: {
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        key: '4804fdc8822fa5e64a5ad508c5a10e74'
    }
})