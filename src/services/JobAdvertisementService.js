import axios from "axios";


export default class JobAdvertisementService {
    findByIsActive(){
    return axios.get ("http://localhost:8080/api/jobadvertisements/findByIsActive")
    }
}

