import './App.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/Todo';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Registration from './components/Registration';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import About from './components/About';
import TodoNote from './components/TodoNote';
import Logout from './components/Logout';


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Todos" element={<><Todo /></>} />
        <Route path="/Home" element={<><Home /></>} />
        <Route path="/About" element={<><About /></>} />
        <Route path="/Login" element={<><Login /></>} />
        <Route path="/Logout" element={<><Logout /></>} />
        <Route path="/TodoNote/:id" element={<><TodoNote /></>} />
        <Route path="/Registration" element={<><Registration /></>} />
        <Route path="*" element={<><PageNotFound /></>} /> 

      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
