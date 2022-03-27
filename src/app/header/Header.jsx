import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import KeycloakService from '../../services/KeycloakService'

const Header = () => {
    const { userType } = useSelector(state => state.sessionReducer)

    return (
        <>
            <header className="app-header border-b-4 border-blue-800 grid grid-cols-3">
                <h1 className='col-start-2'>Human vs. Zombies</h1>

                { KeycloakService.getLoggedIn() && 
                <h2 className='col-start-1 row-start-1'>Welcome {KeycloakService.getGivenName()}</h2>
                }
                
                {!KeycloakService.getLoggedIn() && (
                    <button className="text-red-700 col-start-3 row-start-1" type="button" onClick={() => KeycloakService.login()}>Login</button> 
                )}
                {KeycloakService.getLoggedIn() && (
                    <button className="text-red-700 col-start-3 row-start-1" type="button" onClick={() => KeycloakService.logout()}>Logout</button> 
                )}
            </header>
        </>
    )
}


export default Header