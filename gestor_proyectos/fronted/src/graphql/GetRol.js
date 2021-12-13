import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";  
import { Card, CardTitle, Col, Form , Table } from "reactstrap";
 
const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',
    cache: new InMemoryCache()
});

const GET_ROL = gql`
{
    getRols { 
        _id
        nombreRol
        descripcion
      }
    }
`;

function GET_ROLS() {
    const { loading, error, data } = useQuery(GET_ROL);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            <Col xs="5" md="5">
                <Card body>
                    <CardTitle> <h1>Roles</h1></CardTitle>
                    <Table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.getRols.map(rol => (
                                <tr key={rol._id}>

                              <th>
                              <input type="text" name="nombreRol" value={rol.nombreRol} onChange={(e) => {
                              client.mutate({
                              mutation: gql`
                              mutation{
                              updateRol(_id: "${rol._id}", nombreRol: "${e.target.value}"){
                              _id
                              nombreRol
                              descripcion
                              }
                              }`})
                              }} />
                              </th>

                              <th>
                              <input type="text" name="descripcion" value={rol.descripcion} onChange={(e) => {
                              client.mutate({
                              mutation: gql`
                              mutation{
                              updateRol(_id: "${rol._id}", descripcion: "${e.target.value}"){
                              _id
                              nombreRol
                              descripcion
                              }
                              }`})
                              }} />
                              </th>

                                    <th>

                                        <Form>
                                            <th>
                                                <button className="btn btn-danger" >Actualizar</button>
                                                <button onClick={() => {
                                                    client.mutate({
                                                        mutation: gql`
                                            mutation{
                                                deleteRol(_id: "${rol._id}"){
                                                    _id
                                                    nombreRol
                                                    descripcion
                                                } } ` })

                                                }}>Eliminar</button>

                                            </th>
                                        </Form>

                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card>
            </Col>
        </div>
    );
}

function GetRol() {
    return (
        <div>
            <ApolloProvider client={client}>
                <GET_ROLS />
            </ApolloProvider>
        </div>
    );
}
export default GetRol

