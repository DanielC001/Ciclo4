//import '../layout/styles.css'
import {Link} from 'react-router-dom'

function Login(){
    return(
        <div>
            <h1>Login</h1>
            <Link to="/inicio">
                <button>Entrar</button>
            </Link>

        </div>
    )
}
export default Login;