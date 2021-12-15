
 
 

import Index from './roles/Index';
import  GetProject from './proyectos/GetProject';       
import Inscripcion from './inscripciones/Inscripcion';               
 
 

 
 

import '../styles/styles.css'




function Home(){
    return(
        <div>             

            <h1>Inicio</h1>
            <Index/>
            <GetProject/>
            <Inscripcion/>
            
        


        </div>
    )
}
export default Home;