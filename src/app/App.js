import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './home/Home';
import Game from './game/Game';
import NotFound from './notFound/NotFound';
import Header from './header/Header';
import EditGame from './editGame/EditGame';
import UserService from '../services/UserService';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import NotAuthorized from './notAuthorized/NotAuthorized';
import AuthorizedRoute from '../utils/AuthorizedRoute'

function App() {
  return (
    <ReactKeycloakProvider authClient={UserService._kc}
      initOptions={{
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
      }}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/game" exact element={< Game />} />
          
          <Route element={<AuthorizedRoute roles={["admin"]} />}>
            <Route path="/game/edit" exact element={ < EditGame /> } />
            <Route path='/testauthorizedendpoint' element={<h1>Hey there!</h1>}/>
          </Route>
          <Route path="/notauthorized" exact element={ < NotAuthorized /> } />
          <Route path="*" element={< NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ReactKeycloakProvider>
  );
}

export default App;