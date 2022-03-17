import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './home/Home';
import Game from './game/Game';
import NotFound from './notFound/NotFound';
import Header from './header/Header';
import EditGame from './editGame/EditGame';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/game" exact element={< Game />} />
          <Route path="/game/edit" exact element={ < EditGame /> } />
          <Route path="*" element={< NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
