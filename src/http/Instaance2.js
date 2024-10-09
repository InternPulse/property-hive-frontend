import axios from "axios";

const Instance2 = axios.create({
    baseURL: "https://express-api.propertyhive.com.ng/api/v1/",
    headers:{
        "Content-Type": "multipart/form-data"
    }
    // withCredentials:true
    
})

export default Instance2