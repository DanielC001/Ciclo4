import React from "react";
import {BsFillPersonFill} from "react-icons/bs"
import {  Nav,  Navbar,  NavbarBrand,  NavbarText,  NavItem,  NavLink } from "reactstrap";
import {Link} from 'react-router-dom'
import {useAuth} from '../authContext'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory();
  const {setAuthToken} = useAuth();
  const eliminarToken = () => {
    localStorage.clear();
    history.push('/login');
  };
  return (
    <div>
      <Navbar color="primary"  expand="md">
      <div className="navbar-brand" style={{color:"#ffff"}}    >
   <h1>WF</h1>
  </div>
        <NavbarBrand style={{color:"#ffff"}}  href="/lider/proyectos">Proyectos</NavbarBrand>
        <Nav className="mr-auto" navbar>

          <NavItem>
            <NavLink style={{color:"#ffff"}}  href="/components/">Estudiantes</NavLink>
          </NavItem>

          <NavItem>
            <NavLink style={{color:"#ffff"}}  href="/lider/proyectos">Mis proyectos</NavLink>
          </NavItem>


        </Nav>

        <NavbarText>
          <div>
          <BsFillPersonFill size="30" color="white" />          
          </div>
        </NavbarText>
        <NavbarText>
            <div>
              <button type="button" className="btn btn-success" onClick={()=>eliminarToken()}>Cerrar Sesión</button>   
            </div>
          </NavbarText>
        

      </Navbar>
    </div>
  );
};

export default Header;