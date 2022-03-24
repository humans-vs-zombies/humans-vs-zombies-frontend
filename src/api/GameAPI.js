import AuthInterceptor from "../utils/AuthInterceptor";

// Switch between localhost and remote host
const API_URL = "https://humans-vs-zombies-backend.herokuapp.com";//"http://localhost:8080"; // "https://humans-vs-zombies-backend.herokuapp.com"

export const GameAPI = {
    getGames() {
        return AuthInterceptor.get(API_URL + "/api/v1/game")
    },

    getGame(id) {
        return AuthInterceptor.get(API_URL + "/api/v1/game/" + id)
    },

    postGame(name, participants, dateFrom, dateTo, description) {
        const testGame = {
            "name": name,
            "state": "CONFIGURATION",
            "participants": participants,
            "dateFrom": dateFrom,
            "dateTo": dateTo,
            "players": [],
            "description": description
          }

        return AuthInterceptor.post(API_URL + "/api/v1/game", testGame)
    },

    deleteGame(id) {
        return AuthInterceptor.delete(API_URL + "/api/v1/game/" + id)
    }
}
