import GET_PROJECTS from '../proyectos/GetProject'
import '../../styles/Form.css'
const GetProject = () => {
    return (
        <div>
          <h1>GetProject</h1>
          <div className='contenido'>
            <GET_PROJECTS link='/estudiante/proyectos/'/>
          </div>
        </div>
    );
  }

export default GetProject;
