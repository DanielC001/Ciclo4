import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, gql } from "@apollo/client";  
import { FormGroup,Label,Input,Form,Button} from "reactstrap";
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
 
const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',
    cache: new InMemoryCache()
});

 const CREATE_ROL = gql`
    mutation createRol($nombreRol: String!, $descripcion: String!) {
        createRol(nombreRol: $nombreRol, descripcion: $descripcion) {
            _id
            nombreRol
            descripcion
        }
    }
`;

 
const CreateRolForm = () => {
    const [createRol] = useMutation(CREATE_ROL);
    const [nombreRol, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createRol({
            variables: {
                _id: "",
                nombreRol: nombreRol,
                descripcion: descripcion

            }
        }).then(({ data }) => {
            setSuccess(`Rol ${data.createRol.nombreRol} creado con éxito`);
            setNombre("");
            setDescripcion("");
        }).catch((error) => {
            setError(error.message.replace("GraphQL error: ", ""));
        });
    }

    return (
        
        <ApolloProvider client={client}>   
        <Form inline onSubmit={handleSubmit}>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="nombreRol" className="mr-sm-2">Nombre</Label>
        <Input type="text" required className="form-control" value={nombreRol} onChange={(e) => setNombre(e.target.value)} />
      </FormGroup>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="descripción" className="mr-sm-2">descripción</Label>
          <input type="text" required className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </FormGroup>


        <Button type="submit" className="btn btn-success">Crear</Button>
      </Form>
                            {error && <p className="text-danger">{error}</p>}
                            {success && <p className="text-success">{success}</p>}
        </ApolloProvider>
    );
}

  function CreateRol() {
    return (
        <div>
           
            <ApolloProvider client={client}>
                <CreateRolForm />
            </ApolloProvider>
        </div>
    )
}


export default CreateRol;




        


 


