import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import KeycloakService from '../../services/KeycloakService'

const Header = () => {
    const { userType } = useSelector(state => state.sessionReducer)

    return (
        <>
            <header className="app-header">
                <h1>Human vs. Zombies {(userType !== "") && `(${userType})`}</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink className="app-link" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="app-link" to="/game">Game</NavLink>
                        </li>
                        <li>
                            <NavLink className="app-link" to="/testauthorizedendpoint">Go to authorized route (requires admin)</NavLink>
                        </li>
                    </ul>
                </nav>
                {!KeycloakService.getLoggedIn() && (
                    <button className="text-red-700" type="button" onClick={() => KeycloakService.login()}>Login</button> 
                )}
                {!!KeycloakService.getLoggedIn() && (
                    <button className="text-red-700" type="button" onClick={() => KeycloakService.logout()}>Logout</button> 
                )}

                {!!KeycloakService.getLoggedIn() && (
                    <p>
                            isLoggedIn: {KeycloakService.getLoggedIn() ? "true" : "false"}
                            <br />
                            getPreferredUsername: {KeycloakService.getPreferredUsername()}
                            <br />
                            getEmail: {KeycloakService.getEmail()}
                            <br />
                            getEmailVerified: {KeycloakService.getEmailVerified() ? "true" : "false"}
                            <br />
                            getName: {KeycloakService.getName()}
                            <br />
                            getGivenName: {KeycloakService.getGivenName()}
                            <br />
                            getFamilyName: {KeycloakService.getFamilyName()}
                            <br />
                            hasRole("user"): {KeycloakService.hasRole(["user"]) ? "true" : "false"}
                            <br />
                            hasRole("admin"): {KeycloakService.hasRole(["admin"]) ? "true" : "false"}
                    </p>
                )}

                {/*!loggedIn &&
                    <div>
                        <button type="button" onClick={handleBtnLoginUserClick}>Login (as user)</button>
                        <button type="button" onClick={handleBtnLoginAdminClick}>Login (as admin)</button>
                    </div>
                */}
                {/*loggedIn &&
                    <button type="button" onClick={handleBtnLogoutClick}>Logout</button>
                */}

                <div className='rounded-xl shadow-xl p-5 bg-gradient-to-br from-indigo-500'>
                    TailwindCSS test (Header above ^)
                </div>
            </header>
        </>
    )
}


export default Header