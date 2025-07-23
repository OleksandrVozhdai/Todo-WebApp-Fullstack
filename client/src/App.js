import './App.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/Todo';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <Todo />
    </>
  );
}

export default App;
