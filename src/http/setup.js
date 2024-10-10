import axios from 'axios'

const Instance = axios.create({
    baseURL:'http://api.propertyhive.com.ng/',
    withCredentials:true
})

export default Instance