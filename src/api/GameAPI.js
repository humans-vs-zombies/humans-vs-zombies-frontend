import AuthInterceptor from "../utils/AuthInterceptor";

// Switch between localhost and remote host
const API_URL = "https://humans-vs-zombies-backend.herokuapp.com";//"http://localhost:8080"; // "https://humans-vs-zombies-backend.herokuapp.com"

export const GameAPI = {
    getGames(limit, offset) {
        return AuthInterceptor.get(API_URL + "/api/v1/game?limit=" + limit + "&offset=" + offset)
    },

    getGamesForAdmin(limit, offset) {
        return AuthInterceptor.get(API_URL + "/api/v1/game/for-admin?limit=" + limit + "&offset=" + offset)
    },

    getGamesFilteredByState(limit, offset, state) {
        return AuthInterceptor.get(API_URL + "/api/v1/game?limit=" + limit + "&offset=" + offset + "&state=" + state)
    },

    getGamesFilteredByConfiguration(limit, offset) {
        return AuthInterceptor.get(API_URL + "/api/v1/game/configuration?limit=" + limit + "&offset=" + offset)
    },

    getGame(id) {
        return AuthInterceptor.get(API_URL + "/api/v1/game/" + id)
    },

    postGame(name, participants, dateFrom, dateTo, description) {
        const newGame = {
            "name": name,
            "state": "CONFIGURATION",
            "participants": participants,
            "dateFrom": dateFrom,
            "dateTo": dateTo,
            "players": [],
            "description": description
          }

        return AuthInterceptor.post(API_URL + "/api/v1/game", newGame)
    },

    putGame(id, name, participants, dateFrom, dateTo, description, state) {
        const updatedGame = {
            "name": name,
            "participants": participants,
            "dateFrom": dateFrom,
            "dateTo": dateTo,
            "description": description,
            "state": state
          }

        return AuthInterceptor.put(API_URL + "/api/v1/game/" + id, updatedGame)
    },

    postNextGameState(id) {
        return AuthInterceptor.post(API_URL + "/api/v1/game/" + id + "/next-state")
    },

    deleteGame(id) {
        return AuthInterceptor.delete(API_URL + "/api/v1/game/" + id)
    }
}
