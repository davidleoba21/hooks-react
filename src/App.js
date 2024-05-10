//import logo from './logo.svg';
import './App.css';
import Footer from "./componentes/Footer"
import Menuc from './componentes/Menuc';
import Persona  from './componentes/Persona';
import { Contador } from './componentes/Contador' 
import { Empleado } from './componentes/Empleado' 
import { Estado } from './componentes/Estado';

function App() {

  return (
    <div className="App">
      <Menuc/>
      <header className="App-header">
        <Contador/>
        <Empleado/>
        <Estado/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
