import './App.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/Todo';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Todo /></>} />
        <Route path="/Home" element={<><Home /></>} />
        <Route path="*" element={<h1 className="header-text">404 - Page not found</h1>} /> 

      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
