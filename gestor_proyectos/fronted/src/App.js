import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Layouts
import LayoutPublico from "./layout/publicLayout";
import LayoutAdmin from "./layout/admin";
import LayoutLider from "./layout/lider";
import LayoutEstudiante from "./layout/estudiante"

//Paginas

//publico
import ActualizarUsuarios from './pages/publico/actualizarUsuarios';
import Home from'./pages/publico/home';
import Login from'./pages/publico/login';
import Registro from'./pages/publico/registro';

//admin
import ProyectoAdmin from'./pages/admin/proyectos';
import ProyectoRegistros from './pages/admin/registros'
import Actualizar from './pages/admin/actualizar'
import ProyectoId from './pages/admin/proyectoId'
//lider
import Inicio from './pages/estudiante/inicio'
//estudiante
import PaginaLider from './pages/lider/inicio'


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={['/admin/actualizar/:idUsuario','/admin/proyectos','/admin/proyectos/:idProyecto','/admin/registros','/admin/actualizar']}>
                        <LayoutAdmin>
                            <Switch>
                                <Route exact path="/admin/registros">
                                    <ProyectoRegistros></ProyectoRegistros>
                                </Route>
                                <Route exact path="/admin/actualizar/:idUsuario" component={Actualizar}>
                                </Route> 
                                <Route exact path="/admin/actualizar">
                                    <ActualizarUsuarios/>
                                </Route> 
                                <Route exact path="/admin/proyectos/:idProyecto" component={ProyectoId}>
                                </Route>
                                <Route exact path="/admin/proyectos">
                                    <ProyectoAdmin></ProyectoAdmin>
                                </Route>
                            </Switch>
                        </LayoutAdmin>
                    </Route>
                    <Route path={['/lider/proyectos']}>
                        <LayoutLider>
                            <Switch>
                                <Route path="/lider/proyectos">
                                    <PaginaLider/>
                                </Route>
                            </Switch>
                        </LayoutLider>
                    </Route>
                    <Route path={['/estudiante/proyectos']}>
                        <LayoutEstudiante>
                            <Switch>
                                <Route path="/estudiante/proyectos">
                                    <Inicio/>
                                </Route>
                            </Switch>
                        </LayoutEstudiante>
                    </Route>
                    <Route path={['/login','registro', '/']}>
                        <LayoutPublico>
                            <Switch>
                                <Route path="/login">
                                    <Login/>
                                </Route>
                                <Route path="/registro">
                                    <Registro/>
                                </Route>
                                <Route path='/'>
                                    <Home/>
                                </Route>
                            </Switch>
                        </LayoutPublico>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;