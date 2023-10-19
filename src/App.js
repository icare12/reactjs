import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Registro from './Paginas/Registro';
import Home from './Paginas/Home';
import Loguearse from './Paginas/Loguearse';
import jesus_true from './img/mercadolibre.jpg';
import Rutas from './componentes/Rutas';
import Footer from './componentes/Footer';
import ProductosServicio from './Servicio/ProductosServicio';
function App() {

  return (
    <Router>
      <h1>Mercadito Libre</h1>
      <div className="App">
        <nav>
          <ul>
            <li>
            <Link to="/" element={<Home />}className='list'>
              Home
            </Link></li>
            <li>
            <Link to="/registro" element={<Registro />} className='list'>
              Registro
            </Link></li>
            <li>
            <Link to="/loguearse" element={<Loguearse />} className='list'>
              Loguearse
            </Link></li>
          </ul>
        </nav>
        <img src={jesus_true} className="AppLogo" alt="Cartel de mercadolibre"/> 
      </div>
      <Rutas/>
      <Footer/>
    </Router>
  );
}

export default App;
