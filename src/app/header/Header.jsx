import { useDispatch, useSelector } from 'react-redux'
import { NavLink} from 'react-router-dom'
import { sessionLoginAdminSetAction, sessionLoginUserSetAction, sessionLogoutSetAction } from '../../store/actions/sessionActions'


const Header = () => {

    const dispatch = useDispatch()
    const { loggedIn, userType } = useSelector(state => state.sessionReducer)

    const handleBtnLoginUserClick = event => {
        dispatch(sessionLoginUserSetAction("some user data"))
    }

    const handleBtnLoginAdminClick = event => {
        dispatch(sessionLoginAdminSetAction("some user data"))
    }

    const handleBtnLogoutClick = event => {
        dispatch(sessionLogoutSetAction())
    }
    
    return (
        <>
            <header className="app-header">
                <h1>Human vs. Zombies { (userType !== "") && `(${ userType })`}</h1>
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
                { !loggedIn && 
                <div>
                    <button type="button" onClick={ handleBtnLoginUserClick }>Login (as user)</button>
                    <button type="button" onClick={ handleBtnLoginAdminClick }>Login (as admin)</button>
                </div>
                }
                { loggedIn && 
                <button type="button" onClick={ handleBtnLogoutClick }>Logout</button>
                }
                <div className='rounded-xl shadow-xl p-5 bg-gradient-to-br from-indigo-500'>
                    TailwindCSS test (Header above ^)
                </div>
            </header>
        </>
    )
}


export default Header