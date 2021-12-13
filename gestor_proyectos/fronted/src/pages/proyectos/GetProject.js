import {ApolloClient, InMemoryCache, ApolloProvider, useQuery,gql  } from "@apollo/client";
import { queries } from "@testing-library/react";
import { get } from "jquery";
import { Table } from "reactstrap";

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

  function GET_PROJECTS(){
    const { loading, error, data } = useQuery(GET_PROJECT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
 
   
 const {getProjects,fechaTerminacion} = data;
 
 console.log(getProjects);
 

    return data.getProjects.map(({ _id, nombre, lider , objetivoGeneral,objetivoEspecifico,presupuesto,estadoIsActive,fechaTerminacion,fase,fechaInicio}) => (
      <div key={_id}>

<Table striped > 
<thead>

  <tr>
    <th>Nombre</th>
    <th>Lider</th>
    <th>Objetivo General</th>
    <th>Objetivo Especifico</th>
    <th>Presupuesto</th>
    <th>Estado</th>
    <th>Fecha de Terminacion</th>
    <th>Fase</th>
    <th>Fecha de Inicio</th>
  </tr>
</thead>

  <tbody>
    <tr>
      <td>{nombre}</td>
      <td>{lider._id}</td>
      <td>{objetivoGeneral}</td>
      <td>{objetivoEspecifico}</td>
      <td>{presupuesto}</td>
      <td>{ estadoIsActive ? "Activo" : "Inactivo"}</td>
      <td>{fechaTerminacion}</td>
      <td>{fase}</td>
      <td>{fechaInicio}</td>
    </tr>
  </tbody>
</Table>
       
      </div>
    ));      
  }

  const GetProject = () => {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>GetProject</h1>
          <GET_PROJECTS/>
        </div>
      </ApolloProvider>
    );
  }

  export default GetProject;

    





