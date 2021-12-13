import '../styles/Form.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className = "formulario">
            <h1>Iniciar Sesión</h1>
            <form className="estilos">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"><b>Email</b></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"><b>Contraseña</b></label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="texto">
                    <label class ="form-check-label" for="exampleCheck1">¿No tienes cuenta aún? <Link to="/registro">Registrate</Link></label>
                </div>
                <Link to="/inicio">
                <button class="btn btn-primary">Entrar</button>
                </Link>
            </form>
            

        </div>
    )
}
export default Login;