import {ApolloClient, InMemoryCache, ApolloProvider, useQuery,gql  } from "@apollo/client";
import GET_PROJECTS from '../proyectos/GetProject'
//import Tarjetas from "../../components/Tarjetas"
import '../../styles/Form.css'
//import Tarjetas from "../components/Tarjetas"
//import Proyectos from "../pages/proyectos/GetProject"
const propi={nombre:"hola",general:"hola2"};
//<Tarjetas nombre="Hola" general="Hola2"></Tarjetas>
//import { queries } from "@testing-library/react";
//import { get } from "jquery";
//import { Table } from "reactstrap";


const GetProject = () => {
    return (
        <div>
          <h1>GetProject</h1>
          <div className='contenido'>
            <GET_PROJECTS link='/admin/proyectos/'/>
          </div>
        </div>
    );
  }

export default GetProject;
