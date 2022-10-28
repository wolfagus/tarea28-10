
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar title="Tarea"/>
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
