import '../../styles/Form.css'
import { Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',
    cache: new InMemoryCache()
});

const AUTH = gql`
mutation Mutation($correo: String!, $contrasena: String!) {
    autenticar(correo: $correo, contrasena: $contrasena) {
      token
    }
  }
`;
 
const Login = () => {
    const [autenticar] = useMutation(AUTH);
    const [correo, setCorreo] = useState("");
    const [contrasena,setContrasena] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        autenticar({
            variables: {
                correo:correo,
                contrasena:contrasena,
            }
        }).then(({ data }) => {
            //console.log(data)
            localStorage.setItem('token',data.autenticar.token);
            setSuccess(`User ${data} creado con éxito`);
            setCorreo("");
            setContrasena("");
        }).catch((error) => {
            setError(error.message.replace("GraphQL error: ", ""));
        });
    }

    return (

        <ApolloProvider client={client}>
            <div className="registro">
                <form class="row g-3" onSubmit={handleSubmit}>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Correo</label>
                        <input type="email" required class="form-control" id="inputEmail4" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Contraseña</label>
                        <input type="password" required class="form-control" id="inputPassword4" value={contrasena} onChange={(e) => setContrasena(e.target.value)}  />
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

function Autenticar() {
    return (
        <div>
            <ApolloProvider client={client}>
                <Login />
            </ApolloProvider>
        </div>
    )
}



export default Autenticar;
/*
import '../../styles/Form.css'
import { Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, gql } from "@apollo/client";  
import { FormGroup,Label,Input,Form,Button} from "reactstrap";
import { useState } from "react";

const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',
    cache: new InMemoryCache()
});

const AUTH = gql`
mutation Mutation($correo: String!, $contrasena: String!) {
    autenticar(correo: $correo, contrasena: $contrasena) {
      token
    }
  }
`;
const CreateLoginForm = () => {
    const [autenticar] = useMutation(AUTH);
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        autenticar({
            variables: {
                correo: correo,
                contrasena: contrasena
            }
        }).then(({ data }) => {
            console.log(data);
            setSuccess(`Login ${data.autenticar.correo} logueado con éxito`);
            setCorreo("");
            setContrasena("");
        }).catch((error) => {
            setError(error.message.replace("GraphQL error: ", ""));
        });
    }
        return (
            <ApolloProvider client={client}>
                <form onSubmit={{handleSubmit}}>
                    <div className="formulario">
                        <h1>Iniciar Sesión</h1>
                        <form className="estilos">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><b>Email</b></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={correo} onChange={(e) => setCorreo(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label"><b>Contraseña</b></label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={contrasena} onChange={(e) => setContrasena(e.target.value)}/>
                            </div>
                            <div className="texto">
                                <label className="form-check-label" for="exampleCheck1">¿No tienes cuenta aún? <Link to="/registro">Registrate</Link></label>
                            </div>
                            
                                <button className="btn btn-primary">Entrar</button>
    
                        </form>

                        <Link to="/lider/proyectos">
                            <button type='submit' className="btn btn-primary">Lider</button>
                        </Link>
                        <Link to="/admin/proyectos">
                            <button className="btn btn-primary">Administrador</button>
                        </Link>
                    </div>
                </form>
                            {error && <p className="text-danger">{error}</p>}
                            {success && <p className="text-success">{success}</p>}
            </ApolloProvider>

        )
    }

    function Login() {
        return (
            <div>
                <ApolloProvider client={client}>
                    <CreateLoginForm />
                </ApolloProvider>
            </div>
        )
    }
    export default Login;
*/
    