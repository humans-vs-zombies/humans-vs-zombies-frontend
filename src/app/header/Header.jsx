import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import UserService from '../../services/UserService'
import { useKeycloak } from '@react-keycloak/web'

const Header = () => {
    useKeycloak();

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
                {!UserService.getLoggedIn() && (
                    <button type="button" onClick={() => UserService.login()}>Login</button> 
                )}
                {!!UserService.getLoggedIn() && (
                    <button type="button" onClick={() => UserService.logout()}>Logout</button> 
                )}

                {!!UserService.getLoggedIn() && (
                    <p>
                            isLoggedIn: {UserService.getLoggedIn() ? "true" : "false"}
                            <br />
                            getPreferredUsername: {UserService.getPreferredUsername()}
                            <br />
                            getEmail: {UserService.getEmail()}
                            <br />
                            getEmailVerified: {UserService.getEmailVerified() ? "true" : "false"}
                            <br />
                            getName: {UserService.getName()}
                            <br />
                            getGivenName: {UserService.getGivenName()}
                            <br />
                            getFamilyName: {UserService.getFamilyName()}
                            <br />
                            hasRole("user"): {UserService.hasRole(["user"]) ? "true" : "false"}
                            <br />
                            hasRole("admin"): {UserService.hasRole(["admin"]) ? "true" : "false"}
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