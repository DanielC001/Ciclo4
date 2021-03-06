import '../../styles/Form.css'
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery,gql  } from "@apollo/client";
import { queries } from "@testing-library/react";
import { get } from "jquery";
import { Table } from "reactstrap";
import Tarjetas from "../../components/Tarjetas"

/*const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',

    cache: new InMemoryCache()
  }); */

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

  function GET_PROJECTS({enlace}){
    const { loading, error, data } = useQuery(GET_PROJECT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
 
   
 const {getProjects,fechaTerminacion} = data;
 
 console.log(getProjects);
 

    return data.getProjects.map(({ _id, nombre, lider , objetivoGeneral,objetivoEspecifico,presupuesto,estadoIsActive,fechaTerminacion,fase,fechaInicio}) => (
      <div key={_id}>

        <Tarjetas nombre={nombre} general={objetivoGeneral} especifico={objetivoEspecifico} presupuesto={presupuesto} url={`${enlace}${_id}`}></Tarjetas>
      </div>
    ));      
  }

  const GetProject = ({link}) => {
    return (

          <div className='contenido'>
          <GET_PROJECTS enlace={link}></GET_PROJECTS>
          </div>
    );
  }

  export default GetProject;

    





