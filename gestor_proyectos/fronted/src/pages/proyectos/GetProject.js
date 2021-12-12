import {ApolloClient, InMemoryCache, ApolloProvider, useQuery,gql  } from "@apollo/client";
import { queries } from "@testing-library/react";
import { get } from "jquery";

const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',

    cache: new InMemoryCache()
  }); 

  const GET_PROJECT = gql`
  {
    getProjects{
      _id  
      lider{ _id }  
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
 
   

    return data.getProjects.map(({ _id, nombre, lider , objetivoGeneral,objetivoEspecifico,presupuesto,estadoIsActive,fechaTerminacion,fase,fechaInicio}) => (
      <div key={_id}>
        <p>{nombre}</p>   
        <p >ID LIDER: {lider._id} </p> 
        <p>{objetivoGeneral}</p>
     
        <p>{objetivoEspecifico[0]}</p>
        <p>{objetivoEspecifico[1]}</p>
        <p>{objetivoEspecifico[2]}</p>
        <p>{presupuesto}</p>
       
        <p>{ estadoIsActive ? "Activo" : "Inactivo"}</p>
        <p>{fechaTerminacion}</p>
        <p>{fase}</p> 
       
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

    





