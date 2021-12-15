import {Link} from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import { Card, Col, Form, Table } from "reactstrap";
import '../../styles/Form.css'

const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',
    cache: new InMemoryCache()
});

const GET_User = gql`
{
    getUsers {
        _id
        nombre
        apellido
        correo
        identificacion
        rol{
            nombreRol
        }
        estado
      }
    }
`;

function GET_USERS() {
    const { loading, error, data } = useQuery(GET_User);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div class = "tabla">
            <div class="titulo">
            <h1>Usuarios Registrados</h1>
            </div>
            
            <table class="table table-striped table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Identificación</th>
                        <th>rol</th>
                        <th>estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.getUsers.map(user => (
                        <tr key={user._id}>
                            <th>
                                {user.nombre} 
                            </th>
                            <th>
                                {user.apellido} 
                            </th>
                            <th>
                                {user.correo} 
                            </th>
                            <th>
                                {user.identificacion}
                            </th>
                            <th>
                                {user.rol.nombreRol} 
                            </th>
                            <th>
                                {user.estado} 
                            </th>
                            <th>
                                <Link to={`/admin/actualizar/${user._id}`}>
                                <button className="btn btn-info">Actualizar</button>
                                </Link>
                            </th>
                        </tr>
                    ))}
                </tbody>
                </table>


        </div>
    );
}

function GetUser() {
    return (
        <div>
            <ApolloProvider client={client}>
                <GET_USERS />
            </ApolloProvider>
        </div>
    );
}
export default GetUser

/*
function registros(){
    return(
        <div >
            <h1>registro de usuarios</h1>
        </div>
    )
}
export default registros;
*/