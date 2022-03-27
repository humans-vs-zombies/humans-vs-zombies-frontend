import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import KeycloakService from '../../services/KeycloakService'

const Header = () => {
    const { userType } = useSelector(state => state.sessionReducer)

    return (
        <>
            <header className="app-header">
                <h1>Human vs. Zombies</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink className="app-link" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="app-link" to="/game">Game</NavLink>
                        </li>
                    </ul>
                </nav>

                { KeycloakService.getLoggedIn() && 
                <p>Welcome {KeycloakService.getGivenName()}</p>
                }
                
                {!KeycloakService.getLoggedIn() && (
                    <button className="text-red-700" type="button" onClick={() => KeycloakService.login()}>Login</button> 
                )}
                {KeycloakService.getLoggedIn() && (
                    <button className="text-red-700" type="button" onClick={() => KeycloakService.logout()}>Logout</button> 
                )}

                <div className='rounded-xl shadow-xl p-5 bg-gradient-to-br from-indigo-500'>
                    TailwindCSS test (Header above ^)
                </div>
            </header>
        </>
    )
}


export default Header