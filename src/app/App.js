import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './home/Home';
import Game from './game/Game';
import NotFound from './notFound/NotFound';
import Header from './header/Header';
import EditGame from './editGame/EditGame';
import NotAuthorized from './notAuthorized/NotAuthorized';
import AuthorizedRoute from '../utils/AuthorizedRoute'
import CreateGame from './createGame/CreateGame';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route element={<AuthorizedRoute roles={["user"]} />}>
            <Route path="/game" exact element={< Game />} />
          </Route>
          <Route element={<AuthorizedRoute roles={["admin"]} />}>
            <Route path="/game/create" exact element={ < CreateGame /> } />
            <Route path="/game/edit" exact element={ < EditGame /> } />
          </Route>
          <Route path="/notauthorized" exact element={ < NotAuthorized /> } />
          <Route path="*" element={< NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;