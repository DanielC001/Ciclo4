import '../styles/Form.css'
import Tarjetas from "../components/Tarjetas"
import Proyectos from "../pages/proyectos/GetProject"
const propi={nombre:"hola",general:"hola2"};
//<Tarjetas nombre="Hola" general="Hola2"></Tarjetas>
function Pagina1(){
    return(
        <div className="mainTarjeta">
            <ul className="contenido">
            <Proyectos></Proyectos>
            </ul >
        </div>
    )
}
export default Pagina1;