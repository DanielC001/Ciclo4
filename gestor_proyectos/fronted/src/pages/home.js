
import '../layout/styles.css'
import GetRol from './roles/GetRol';
import GetProject from './proyectos/GetProject'

import '../styles/styles.css'




function Home(){
    return(
        <div>

            <h1>Titulo</h1>
            <GetRol/>
            <GetProject/>
            
            

            <h1>Inicio</h1>

        </div>
    )
}
export default Home;