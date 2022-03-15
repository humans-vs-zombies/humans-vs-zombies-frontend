import { handleFirstResponse } from "../utils/apiUtils"


export const GameAPI = {
    getGames() {
        //return fetch("http://localhost:8080/api/v1/game")
        return fetch("https://humans-vs-zombies-backend.herokuapp.com/api/v1/game")
        .then(handleFirstResponse)
    }
}
