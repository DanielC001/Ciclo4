import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, gql,createHttpLink} from "@apollo/client";
import { AuthContext } from './components/authContext';
import { setContext } from "@apollo/client/link/context";
//Layouts
import LayoutPublico from "./layout/publicLayout";
import LayoutAdmin from "./layout/admin";
import LayoutLider from "./layout/lider";
import LayoutEstudiante from "./layout/estudiante"

//Paginas

//publico
import ActualizarUsuarios from './pages/publico/actualizarUsuarios';
import Home from './pages/publico/home';
import Login from './pages/publico/login';
import Registro from './pages/publico/registro';

//admin
import ProyectoAdmin from './pages/admin/proyectos';
import ProyectoRegistros from './pages/admin/registros'
import Actualizar from './pages/admin/actualizar'
import ProyectoId from './pages/admin/proyectoId'
import Roles from './pages/admin/roles'
//estudiante
import Inicio from './pages/estudiante/proyectos'
import ProyectoEId from './pages/estudiante/proyectosId'
//Lider
import PaginaLider from './pages/lider/inicio'
import { useState } from 'react';

const httpLink = createHttpLink({
    uri:'http://localhost:5010/graphql'
});

const authLink = setContext((_,{headers})=>{
    const token = JSON.parse(localStorage.getItem('token'));
    return{
        headers:{
            ...headers,
            authorization:token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
});

function App() {
    const[authToken,setAuthToken]=useState('');

    const setToken=(token)=>{
        setAuthToken(token);
        if(token){
            localStorage.setItem('token',JSON.stringify(token));
        }
    };

    return (
        <ApolloProvider client={client}>
            <AuthContext.Provider value={{authToken,setAuthToken,setToken}}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route path={['/admin/actualizar/:idUsuario', '/admin/proyectos', '/admin/proyectos/:idProyecto', '/admin/registros', '/admin/actualizar', '/admin/roles']}>
                            <LayoutAdmin>
                                <Switch>
                                    <Route exact path="/admin/registros">
                                        <ProyectoRegistros></ProyectoRegistros>
                                    </Route>
                                    <Route exact path="/admin/actualizar/:idUsuario" component={Actualizar}>
                                    </Route>
                                    <Route exact path="/admin/actualizar">
                                        <ActualizarUsuarios />
                                    </Route>
                                    <Route exact path="/admin/proyectos/:idProyecto" component={ProyectoId}>
                                    </Route>
                                    <Route exact path="/admin/proyectos">
                                        <ProyectoAdmin></ProyectoAdmin>
                                    </Route>
                                    <Route exact path="/admin/roles">
                                        <Roles />
                                    </Route>
                                </Switch>
                            </LayoutAdmin>
                        </Route>
                        <Route path={['/lider/proyectos']}>
                            <LayoutLider>
                                <Switch>
                                    <Route path="/lider/proyectos">
                                        <PaginaLider />
                                    </Route>
                                </Switch>
                            </LayoutLider>
                        </Route>
                        <Route path={['/estudiante/proyectos']}>
                            <LayoutEstudiante>
                                <Switch>
                                    <Route path="/estudiante/proyectos">
                                        <Inicio />
                                    </Route>
                                </Switch>
                            </LayoutEstudiante>
                        </Route>
                        <Route path={['/login', 'registro', '/']}>
                            <LayoutPublico>
                                <Switch>
                                    <Route path="/login">
                                        <Login />
                                    </Route>
                                    <Route path="/registro">
                                        <Registro />
                                    </Route>
                                    <Route path='/'>
                                        <Home />
                                    </Route>
                                </Switch>
                            </LayoutPublico>
                        </Route>
                    </Switch>
                </Router>
            </div>
            </AuthContext.Provider>
        </ApolloProvider>
    );
}

export default App;