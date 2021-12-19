import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import { Card, Col, Form, Table, Row, CardBody, Button, CardHeader } from "reactstrap";
import { Link } from 'react-router-dom'

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
const Get_Users = (props) => {
    let idUsuario = props.match.params.idUsuario
    const { loading, error, data } = useQuery(GET_User);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const datos = data.getUsers.filter(
        user => user._id == idUsuario
    )
    console.log(datos)
    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Usuario
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead class="table-dark">
                                    <tr>
                                        <th>estado</th>
                                        <th>nombre</th>
                                        <th>apellido</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {datos.map(user => (
                                        <tr key={idUsuario}>
                                            <td>
                                                {user.estado}
                                            </td>
                                            <td>
                                                {user.nombre}
                                            </td>
                                            <td>
                                                {user.apellido}
                                            </td>
                                            <td>
                                                {user.correo}
                                            </td>
                                            <td>
                                                {user.identificacion}
                                            </td>
                                            <td>
                                                <select id="inputState" class="form-control" aria-label="Default select example">
                                                    <option selected>Seleccione</option>
                                                    <option value="61b6893ef684ce366c16439f">Estudiante</option>
                                                    <option value="61b6894cf684ce366c1643a3">Lider</option>
                                                    <option value="61b6895ef684ce366c1643a7">Administrador</option>
                                                </select>
                                            </td>
                                            <td>
                                                <Button color="warning" size="sm" className="mr-1">Actualizar</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div >
    );
}


export default Get_Users
/*
import { Link } from 'react-router-dom'
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

const GET_USERS = (props) => {
    let idUsuario = props.match.params.idUsuario;
    const { loading, error, data } = useQuery(GET_User);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div class="tabla">
            <div class="titulo">
                <h1>Usuarios Registrados</h1>
            </div>
            <table class="table table-striped table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>estado</th>

                    </tr>
                </thead>
                <tbody>
                    {data.getUsers.map(user => (
                        <tr key={idUsuario}>
                            <th>
                                {user.estado}
                            </th>
                            <th>
                                <select id="inputState" class="form-control" aria-label="Default select example">
                                    <option selected>Seleccione</option>
                                    <option value="61b6893ef684ce366c16439f">Estudiante</option>
                                    <option value="61b6894cf684ce366c1643a3">Lider</option>
                                    <option value="61b6895ef684ce366c1643a7">Administrador</option>
                                </select>
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
export default GetUser */


/*
return (
        <div class="tabla">
            <table class="table table-striped table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>estado</th>

                    </tr>
                </thead>
                <tbody>
                    {data.getUsers.filter(user => (
                        <tr key={idUsuario}>
                            <th>
                                {user.estado}
                            </th>
                            <th>
                                <select id="inputState" class="form-control" aria-label="Default select example">
                                    <option selected>Seleccione</option>
                                    <option value="61b6893ef684ce366c16439f">Estudiante</option>
                                    <option value="61b6894cf684ce366c1643a3">Lider</option>
                                    <option value="61b6895ef684ce366c1643a7">Administrador</option>
                                </select>
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
*/ 