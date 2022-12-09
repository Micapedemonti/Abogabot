import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Registro from './components/Registro/Registro';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';


const App = () => {
  return (
    
    <div className="App">
    <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route path = "/" element = {<Login/>}></Route>
        <Route path = "/registro" element = {<Registro/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
