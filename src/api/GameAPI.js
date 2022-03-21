//import { handleFirstResponse } from "../utils/apiUtils"
import AuthInterceptor from "../utils/AuthInterceptor";

// Switch between localhost and remote host
const API_URL = "https://humans-vs-zombies-backend.herokuapp.com";//"http://localhost:8080"; // "https://humans-vs-zombies-backend.herokuapp.com"

export const GameAPI = {
    getGames() {
        AuthInterceptor.get(API_URL + "/api/v1/game")
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }
}
