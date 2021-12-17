import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import { Card , Col, Form, Table,Row,CardBody,Button,CardHeader } from "reactstrap";
 


const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',
    cache: new InMemoryCache()
});

const GET_INSCRIPCION = gql`
{
    getInscripciones {
      _id
      idProyecto {
        _id
        nombre
      }
      idEstudiante {
        _id
        nombre
        apellido
      }
      aceptadoIsActive
      fechaIngreso
      fechaEgreso
    }
  }
  
`;

function GET_INSCRIPCIONES(){
const { loading, error, data } = useQuery(GET_INSCRIPCION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        
<div className="animated fadeIn">
        <Row>
            <Col xs="12" lg="12">
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> Inscripciones
                    </CardHeader>

                    <CardBody>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>ID Proyecto</th>
                                    <th>ID Estudiante</th>
                                    <th>Aceptado</th>
                                    <th>Fecha Ingreso</th>
                                    <th>Fecha Egreso</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.getInscripciones.map(({ _id, idProyecto, idEstudiante, aceptadoIsActive, fechaIngreso, fechaEgreso }) => (
                                    <tr key={_id}>
                                        <td>{_id}</td>
                                        <td>{idProyecto.nombre}</td>
                                        <td>{idEstudiante.nombre}-{idEstudiante.apellido}</td>
                                        <td>{ aceptadoIsActive ? "Activo" : "Inactivo"}</td>
                                        <td>{fechaIngreso}</td>
                                        <td>{fechaEgreso}</td>
                                        <td>
                                            <Button color="warning" size="sm" className="mr-1">Editar</Button>
                                            <Button color="danger" size="sm">Eliminar</Button>
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


function get_inscripcion(){

return(
    <ApolloProvider client={client}>
        <GET_INSCRIPCIONES />
    </ApolloProvider>
)


}

export default get_inscripcion;


 