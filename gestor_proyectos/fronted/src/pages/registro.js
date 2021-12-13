import '../styles/Form.css'
import { Link } from 'react-router-dom'


function Registro() {
    return (
        <div className="registro">
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Identificacion</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Tipo de usuario</label>
                    <select id="inputState" class="form-control" aria-label="Default select example">
                        <option selected>Seleccione</option>
                        <option value="1">Estudiante</option>
                        <option value="2">Lider</option>
                        <option value="3">Administrador</option>
                    </select>
                </div>
                <div class="col-12 sboton">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Registro;
