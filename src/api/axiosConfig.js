import axios from "axios";


export default axios.create({
    // baseURL:"htttps://9c96-103-106-239-104.ap.ngrok.io/", 
    // baseURL:"http://localhost:8080/",
    baseURL:"https://movie-api-backend-8dcu.onrender.com/",
    headers:{"ngrok-skip-browser-warning":"true"},
});