import './App.css';
import {Routes, Route, HashRouter } from 'react-router-dom';
import Home from './home/Home';
import Game from './game/Game';
import NotFound from './notFound/NotFound';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <div className='rounded-xl shadow-xl p-5 w-64 bg-gradient-to-br from-indigo-500'>
            TailwindCSS test
          </div>
        </header>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/game" exact element={< Game />} />
          <Route path="*" element={< NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
