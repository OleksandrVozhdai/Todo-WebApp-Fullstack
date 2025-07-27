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
import { isAuthenticated } from './components/actions/Auth';
import { useEffect, useState } from 'react';


function App() {
  const [isAuth, setIsAuth] = useState(isAuthenticated());

  useEffect(() => {
    setIsAuth(isAuthenticated());
  },[isAuthenticated()])

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<><Home /></>} />
        <Route path="/About" element={<><About /></>} />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth}></Login>}/>
        <Route path="/Logout" element={isAuth ? <><Logout setIsAuth={setIsAuth}/></> : <Navigate to="/Login" replace /> } />
        <Route path ="/TodoNote/:id" element={isAuth ? <TodoNote /> : <Navigate to="/Login" replace />} />
        <Route path="/Registration" element={isAuth ? <Navigate to="/Logout" replace /> : <><Registration/></>} />
        <Route path="*" element={<><PageNotFound /></>} /> 
        <Route path="/Todos" element={isAuth ? <Todo /> : <Navigate to="/Login" replace />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
