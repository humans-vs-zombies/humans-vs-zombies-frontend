import { handleFirstResponse } from "../utils/apiUtils"


export const GamesAPI = {
    getGames() {
        return fetch("https://humans-vs-zombies-backend.herokuapp.com/api/v1/game")
        .then(handleFirstResponse)
    }
}