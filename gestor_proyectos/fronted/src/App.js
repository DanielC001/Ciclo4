import './App.css'
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutPublico from "./layout/publicLayout";
import LayoutPrivado from "./layout/privateLayout";
import Login from './pages/login';
import Pagina1 from './pages/pagina1';
import Registro from './pages/registro';

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