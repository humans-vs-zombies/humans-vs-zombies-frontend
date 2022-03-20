import UserService from "../../../../services/UserService";


const TdDeleteGamesTable = ({ children, gameId }) => {

    const loggedIn = UserService.getLoggedIn()
    const hasAdminRole = UserService.hasRole(["admin"])

    const handleDeleteGameClick = event => {
        if (loggedIn && hasAdminRole) {
            console.log("Delete game with id: " + gameId);
        }
    }


    return (
        <td className="py-3 px-6 text-s text-left text-red-700 hover:underline" onClick={ handleDeleteGameClick }>{ children }</td>
    )
}


export default TdDeleteGamesTable
