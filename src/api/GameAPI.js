import AuthInterceptor from "../utils/AuthInterceptor";

// Switch between localhost and remote host
const API_URL = "https://humans-vs-zombies-backend.herokuapp.com";//"http://localhost:8080"; // "https://humans-vs-zombies-backend.herokuapp.com"

export const GameAPI = {
    getGames() {
        return AuthInterceptor.get(API_URL + "/api/v1/game")
    },

    postGame() {
        const testGame = {
            "name": "Test game",
            "state": "CONFIGURATION",
            "participants": 25,
            "dateFrom": "2022-03-21T18:02:02.271Z",
            "dateTo": "2022-04-21T18:02:02.271Z",
            "players": [],
            "description": "Test description"
          }

        AuthInterceptor.post(API_URL + "/api/v1/game", testGame)
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
            console.error(error);
        })
    },

    deleteGame(id) {
        return AuthInterceptor.delete(API_URL + "/api/v1/game/" + id)
    }
}
