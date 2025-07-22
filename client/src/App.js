import './App.css';

import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/Todo';

function App() {
  return (
    <>

      <nav className="navbar bg-body-tertiary">
        <div>
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Main Menu
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Home</a></li>
                  <li><a className="dropdown-item" href="/Todo">page2</a></li>
                  <li><a className="dropdown-item" href="/">page3</a></li>
                </ul>
        </div>
      </nav>

      <p />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<Todo />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
