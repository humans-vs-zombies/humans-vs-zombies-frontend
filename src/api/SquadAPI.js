import AuthInterceptor from "../utils/AuthInterceptor";

const API_URL = "https://humans-vs-zombies-backend.herokuapp.com";

const ROOT_URI = (gameId) => API_URL + "/api/v1/game/" + gameId + "/squads"

export const SquadAPI = {

    getSquadsFilteredByGameId(gameId) {
        return AuthInterceptor.get(ROOT_URI(gameId))
    }

}