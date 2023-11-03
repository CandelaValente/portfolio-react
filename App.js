import './App.css';
import {Nav} from './componentes/nav'
import { Inicio } from './componentes/inicio';
import { Proyectos } from './componentes/proyectos'
import { SobreMi } from './componentes/sobre-mi'
import { Contacto } from './componentes/contacto'


function App() {
  return (
    <>
      <Nav></Nav>
      <Inicio id="inicio"></Inicio>
      <Proyectos id="proyectos"></Proyectos>
      <SobreMi id="sobreMi"></SobreMi>
      <Contacto id="contacto"></Contacto>
    </>
  );
}

export default App;
