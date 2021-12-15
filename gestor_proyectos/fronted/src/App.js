import './App.css'
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Layouts
import LayoutPublico from "./layout/publicLayout";
import LayoutPrivado from "./layout/privateLayout";
import LayoutAdmin from "./layout/admin";
import LayoutLider from "./layout/lider";
//Paginas
import Login from './pages/login';
import Pagina1 from './pages/pagina1';
import Registro from './pages/registro';
import ActualizarUsuario from './pages/actualizarUsuarios'

import ProyectoAdmin from './pages/admin/proyectos'
import ProyectoRegistros from './pages/admin/registros'
import Actualizar from './pages/admin/actualizar'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={['/inicio']}>
                        <LayoutPrivado>
                            <Switch>
                                <Route path="/inicio">
                                    <Pagina1></Pagina1>
                                </Route>
                            </Switch>
                        </LayoutPrivado>
                    </Route>
                    <Route path={['/admin/actualizar/:idUsuario','/admin/proyectos','/admin/registros','/admin/actualizar']}>
                        <LayoutAdmin>
                            <Switch>
                                <Route exact path="/admin/proyectos">
                                    <ProyectoAdmin></ProyectoAdmin>
                                </Route>
                                <Route exact path="/admin/registros">
                                    <ProyectoRegistros></ProyectoRegistros>
                                </Route>
                                <Route exact path="/admin/actualizar">
                                    <ActualizarUsuario/>
                                </Route>    
                                <Route exact path="/admin/actualizar/:idUsuario" component={Actualizar}>
                                </Route>
                            </Switch>
                        </LayoutAdmin>
                    </Route>
                    <Route path={['/lider']}>
                        <LayoutLider>
                            <Switch>
                                <Route path="/lider">
                                    <Pagina1></Pagina1>
                                </Route>
                            </Switch>
                        </LayoutLider>
                    </Route>
                    <Route path={['/login','registro', '/']}>
                        <LayoutPublico>
                            <Switch>
                                <Route path="/login">
                                    <Login></Login>
                                </Route>
                                <Route path="/registro">
                                    <Registro></Registro>
                                </Route>
                                <Route path='/'>
                                    <Home></Home>
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