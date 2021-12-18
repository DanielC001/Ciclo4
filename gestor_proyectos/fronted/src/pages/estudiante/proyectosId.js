import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import { Link } from 'react-router-dom'
import '../../styles/Form.css'
const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',
    cache: new InMemoryCache()
});

const GET_PROJECT = gql`
  {
    getProjects{
        _id  
        lider{_id}
        nombre 
        objetivoGeneral 
        objetivoEspecifico
        presupuesto
        estadoIsActive
        fechaTerminacion
        fase
        fechaInicio   
     
     }
        } 
  `;
  function comprobacion(x){
    if(x==true){
        return 'Inactivo'
    }else{
        return 'Activo'
    }
  }
const GET_PROJECTS= (props) => {
    let idProyecto = props.match.params.idProyecto
    const { loading, error, data } = useQuery(GET_PROJECT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        const datos = data.getProjects.filter(
            project=>project._id==idProyecto
        )
        console.log(datos)
    return (
        <div className='distribucion'>
            <div class="tabla2">
                <table class="table table-striped table-hover">
                    <thead class="table-dark">
                        <tr>
                            <th>id</th>
                            <th>nombre</th>
                            <th>Presupuesto</th>
                            <th>Estado</th>
                            <th>Fase</th>
                            <th colSpan="4">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>
                        {datos.map(project => (
                            <tr key={idProyecto}>
                                <th>
                                    {project._id}
                                </th>
                                <th>
                                    {project.nombre}
                                </th>
                                <th>
                                    {project.presupuesto}
                                </th>
                                <th>
                                    {project.estadoIsActive}
                                </th>
                                <th>
                                    {project.fase}
                                </th>
                                <th colspan="4">
                                    <div>
                                        <button className="btn btn-info botonTabla">Inscribirse</button>
                                        <button className="btn btn-info">Fase</button>
                                    </div>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="tabla2">
                    <table class="table table-striped table-hover">
                        <tr>
                            <th>hola1</th>
                            <th>hola1</th>
                            <th>hola1</th>
                            <th>hola1</th>
                            <th>hola1</th>
                        </tr>
                    </table>
                </div>
            </div>
    );
}


export default GET_PROJECTS