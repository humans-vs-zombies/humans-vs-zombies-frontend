import { useDispatch, useSelector } from 'react-redux'
import { NavLink} from 'react-router-dom'
import { sessionLoginUserSetAction } from '../../store/actions/sessionActions'


const Header = () => {

    const dispatch = useDispatch()
    const { loggedIn } = useSelector(state => state.sessionReducer)

    const handleBtnLoginUserClick = event => {
        dispatch(sessionLoginUserSetAction("User"))
    }
    
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
                { !loggedIn && 
                <button type="button" onClick={ handleBtnLoginUserClick }>Login (as user)</button>
                }
                <div className='rounded-xl shadow-xl p-5 bg-gradient-to-br from-indigo-500'>
                    TailwindCSS test (Header above ^)
                </div>
            </header>
        </>
    )
}


export default Header