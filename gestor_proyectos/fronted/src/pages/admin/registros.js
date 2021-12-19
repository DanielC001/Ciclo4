import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import { Card, Col, Form, Table, Row, CardBody, Button, CardHeader } from "reactstrap";
import Toast from '../../components/Toast'

const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',
    cache: new InMemoryCache()
});

const GET_USUARIO = gql`
{
    getUsers {
        _id
        nombre
        apellido
        correo
        estado
      }
  }
  
`;

function GET_USUARIOS() {
    const { loading, error, data } = useQuery(GET_USUARIO);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        
    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Usuarios
                        </CardHeader>

                        <CardBody>
                            <Table responsive>
                                <thead className="table-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Correo</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.getUsers.map(({ _id, nombre, apellido, correo, estado }) => (
                                        <tr key={_id}>
                                            <td>{_id}</td>
                                            <td>{nombre}</td>
                                            <td>{apellido}</td>
                                            <td>{correo}</td>
                                            <td>{estado}</td>
                                            <td>
                                                <Button color="warning" size="sm" className="mr-1" id="liveToastBtn" >Editar</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

    )


}


function get_inscripcion() {

    return (
        <ApolloProvider client={client}>
            <GET_USUARIOS />
        </ApolloProvider>
    )


}

export default get_inscripcion;