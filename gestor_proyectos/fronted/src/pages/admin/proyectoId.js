import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import { Link } from 'react-router-dom'
import { Card, Col, Form, Table, Row, CardBody, Button, CardHeader } from "reactstrap";
//import '../../styles/Form.css'
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
function comprobacion(x) {
    if (x == true) {
        return 'Activo'
    } else if (x == false) {
        return 'Inactivo'
    } else {
        return 'nulo'
    }
}

function isNulo(x) {
    if (x == '') {
        return true;
    }
}

const GET_PROJECTS = (props) => {
    let idProyecto = props.match.params.idProyecto
    const { loading, error, data } = useQuery(GET_PROJECT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const datos = data.getProjects.filter(
        project => project._id == idProyecto
    )
    console.log(datos)
    return (
        <div>
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Editar Usuario
                            </CardHeader>

                            <CardBody>
                                <Table responsive>
                                    <thead className="table-dark">
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
                                                <td>
                                                    {project._id}
                                                </td>
                                                <td>
                                                    {project.nombre}
                                                </td>
                                                <td>
                                                    {project.presupuesto}
                                                </td>
                                                <td>
                                                    {comprobacion(project.estadoIsActive)}
                                                </td>
                                                <td>
                                                    {project.fase}
                                                </td>
                                                <td colSpan="4">
                                                    <button className="btn btn-info botonTabla" onClick={() => {
                                                        console.log("llamando")
                                                        client.mutate({
                                                            mutation: gql`
                                            mutation{
                                                updateProject(_id: "${project._id}", nombre: "projecto3",estadoIsActive:true){
                                                _id
                                            }
                                            }`})
                                                        window.location.reload();
                                                    }}
                                                    >Activar</button>
                                                    <button className="btn btn-info botonTabla" onClick={() => {
                                                        console.log("llamando")
                                                        client.mutate({
                                                            mutation: gql`
                                            mutation{
                                                updateProject(_id: "${project._id}", nombre: "projecto3",estadoIsActive:false){
                                                _id
                                            }
                                            }`

                                                        })
                                                        window.location.reload();
                                                    }}
                                                    >Desactivar</button>
                                                    <button className="btn btn-info">Fase</button>
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
        </div>
    );
}


export default GET_PROJECTS