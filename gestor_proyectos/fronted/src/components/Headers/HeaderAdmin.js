import React from "react";
import {BsFillPersonFill} from "react-icons/bs"
import {  Nav,  Navbar,  NavbarBrand,  NavbarText,  NavItem,  NavLink } from "reactstrap";
import {Link} from 'react-router-dom'
import {useAuth} from '../authContext'
const Header = () => {
  const {setToken} = useAuth();
  const EliminarToken=()=>{
    setToken(null);
  }
  return (
    <div>
      <Navbar color="primary"  expand="md">
      <div className="navbar-brand" style={{color:"#ffff"}}    >
   <h1>WF</h1>
  </div>
        <Nav className="mr-auto" navbar>

          <NavItem>
            <NavLink style={{color:"#ffff"}}  href="/admin/registros">Usuarios</NavLink>
          </NavItem>

          <NavItem>
            <NavLink style={{color:"#ffff"}}  href="/admin/proyectos">Proyectos</NavLink>
          </NavItem>

          <NavItem>
            <NavLink style={{color:"#ffff"}}  href="/admin/roles">Roles</NavLink>
          </NavItem>

        </Nav>

        <NavbarText>
          <div>
          <BsFillPersonFill size="30" color="white" />          
          </div>
        </NavbarText>
        <NavbarText>
            <div>
              <button type="button" className="btn btn-success" onClick={()=>EliminarToken()}>Cerrar Sesión</button>   
            </div>
          </NavbarText>
      </Navbar>
    </div>
  );
};

export default Header;