import '../../styles/Form.css'
import { Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';
import {useAuth} from '../../components/authContext';
import {useHistory} from 'react-router-dom'
import jwt_decode from 'jwt-decode';

const AUTH = gql`
mutation Mutation($correo: String!, $contrasena: String!) {
    autenticar(correo: $correo, contrasena: $contrasena) {
      token
    }
  }
`;
 
const Login = () => {
    const history=useHistory();
    const {setToken}=useAuth();
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
            setToken(data.autenticar.token);
            //localStorage.setItem('token',data.autenticar.token);
            setSuccess(`User ${data} creado con éxito`);
            setCorreo("");
            setContrasena("");
            const parametros = jwt_decode(localStorage.getItem('token'));
            //console.log(parametros.payload);
            if(parametros.payload.rol=="61be1225f649e84e1baec198"){
                history.push('/lider/proyectos')
            }
            if(parametros.payload.rol=="61bd26dce91bf9d9a63fe698"){
                history.push('/estudiante/proyectos')

            }
            if(parametros.payload.rol=="61b6895ef684ce366c1643a7"){
                history.push('/admin/proyectos')
            }

            //history.push('/admin/proyectos');
        }).catch((error) => {
            setError(error.message.replace("GraphQL error: ", ""));
        });
    }

    return (
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
                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}
            </div>
            
    );
}

function Autenticar() {
    return (
        <div>
                <Login />
        </div>
    )
}

export default Autenticar;