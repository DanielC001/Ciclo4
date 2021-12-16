import '../../styles/Form.css'
import { Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',
    cache: new InMemoryCache()
});

const CREATE_USER = gql`
 mutation CreateUser($nombre: String!, $apellido: String!, $correo: String!, $identificacion: String!, $contrasena: String!, $rol: ID!) {
    createUser(nombre: $nombre, apellido: $apellido, correo: $correo, identificacion: $identificacion, contrasena: $contrasena, rol: $rol) {
      _id
      nombre
      apellido
    }
  }
`;


const Registro = () => {
    const [createUser] = useMutation(CREATE_USER);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [identificacion,setIdentifiacion] = useState("");
    const [contrasena,setContrasena] = useState("");
    const [rol,setRol] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser({
            variables: {
                _id: "",
                nombre: nombre,
                apellido: apellido,
                correo:correo,
                identificacion:identificacion,
                contrasena:contrasena,
                rol:rol
            }
        }).then(({ data }) => {
            setSuccess(`User ${data.createUser.nombre} creado con éxito`);
            setNombre("");
            setApellido("");
            setCorreo("");
            setIdentifiacion("");
            setContrasena("");
            setRol("")
        }).catch((error) => {
            setError(error.message.replace("GraphQL error: ", ""));
        });
    }

    return (

        <ApolloProvider client={client}>
            <div className="registro">
                <form class="row g-3" onSubmit={handleSubmit}>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Nombre</label>
                        <input type="text" required class="form-control" id="inputCity" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Apellido</label>
                        <input type="text" required class="form-control" id="inputCity" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Correo</label>
                        <input type="email" required class="form-control" id="inputEmail4" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Identificación</label>
                        <input type="text" required class="form-control" id="inputCity" value={identificacion} onChange={(e) => setIdentifiacion(e.target.value)} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Contraseña</label>
                        <input type="password" required class="form-control" id="inputPassword4" value={contrasena} onChange={(e) => setContrasena(e.target.value)}  />
                    </div>
                    <div class="col-md-6">
                        <label for="inputState" class="form-label">Tipo de usuario</label>
                        <select id="inputState" class="form-control" aria-label="Default select example" onChange={(e) => setRol(e.target.value)}>
                            <option selected>Seleccione</option>
                            <option value="61b6893ef684ce366c16439f">Estudiante</option>
                            <option value="61b6894cf684ce366c1643a3">Lider</option>
                            <option value="61b6895ef684ce366c1643a7">Administrador</option>
                        </select>
                    </div>
                    <div class="col-12 sboton">
                        <button type="submit" class="btn btn-primary">Crear</button>
                    </div>
                </form>
            </div>
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success}</p>}
        </ApolloProvider>
    );
}

function CreateUser() {
    return (
        <div>
            <ApolloProvider client={client}>
                <Registro />
            </ApolloProvider>
        </div>
    )
}



export default CreateUser;
