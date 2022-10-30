
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs'
import NoFound from './Pages/NoFound/NoFound'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar title="Tarea"/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/NoFound' element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
