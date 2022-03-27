import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import KeycloakService from '../../services/KeycloakService'

const Header = () => {
    const { userType } = useSelector(state => state.sessionReducer)

    return (
        <>
            <header className="app-header border-b-4 border-blue-800 grid grid-cols-[auto,_1fr,_auto] pt-8 px-4 pb-1 gap-4">
                <NavLink className="app-link col-start-2 justify-self-center self-end" to="/"><h1 className='text-3xl'>Human vs. Zombies</h1></NavLink>

                { KeycloakService.getLoggedIn() && 
                <h2 className='col-start-1 row-start-1 justify-self-center self-end text-2xl'>Welcome {KeycloakService.getGivenName()}</h2>
                }
                
                {!KeycloakService.getLoggedIn() && (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-fit justify-self-center col-start-3 row-start-1 justify-self-center self-end" type="button" onClick={() => KeycloakService.login()}>Login</button> 
                )}
                {KeycloakService.getLoggedIn() && (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-fit justify-self-center col-start-3 row-start-1 justify-self-center self-end" type="button" onClick={() => KeycloakService.logout()}>Logout</button> 
                )}
            </header>
        </>
    )
}


export default Header