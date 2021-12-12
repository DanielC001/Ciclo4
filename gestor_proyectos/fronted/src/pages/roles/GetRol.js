
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery,gql  } from "@apollo/client";
import { queries } from "@testing-library/react";
import { get } from "jquery";
import { Card, CardTitle, Col, Table  } from "reactstrap";
import {   useMutation } from '@apollo/client';
import { useState } from "react";
 

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

if(loading) return <p>Loading...</p>;
if(error) return <p>Error :(</p>;


    
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
                            <td>{rol.nombreRol}</td>
                            <td>{rol.descripcion}</td>
                            <td>
                                <button onClick={() => {
                                    client.mutate({
                                        mutation: gql`
                                            mutation{
                                                deleteRol(_id: "${rol._id}"){
                                                    _id
                                                    nombreRol
                                                    descripcion
                                                }
                                            }
                                        `
                                    })
                                }}>Eliminar</button>
                            </td>
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

