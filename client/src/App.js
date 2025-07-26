import './App.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/Todo';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Registration from './components/Registration';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import About from './components/About';


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/Todos" element={<><Todo /></>} />
        <Route path="/Home" element={<><Home /></>} />
        <Route path="/About" element={<><About /></>} />
        <Route path="/Login" element={<><Login /></>} />
        <Route path="/Registration" element={<><Registration /></>} />
        <Route path="*" element={<><PageNotFound /></>} /> 

      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
