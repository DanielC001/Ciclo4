import React from "react";
 
import {  Nav,  Navbar,  NavbarBrand,  NavbarText,  NavItem,  NavLink } from "reactstrap";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <Navbar color="primary"  expand="md">
      <div className="navbar-brand" style={{color:"#ffff"}}    >
   <h1>WF</h1>
  </div>
        <NavbarBrand style={{color:"#ffff"}}  href="">Gestión de Proyectos</NavbarBrand>
        <Nav className="mr-auto" navbar>

          <NavItem>
            <NavLink style={{color:"#ffff"}}  href="/admin/registros">Registros</NavLink>
          </NavItem>

          <NavItem>
            <NavLink style={{color:"#ffff"}}  href="/admin/proyectos">Proyectos</NavLink>
          </NavItem>

        </Nav>

        <Link to='/admin/actualizar'>
          <NavbarText>
            <div>
              <button type="button" class="btn btn-success">Actualizar usuario</button>   
            </div>
          </NavbarText>
        </Link>
      </Navbar>
    </div>
  );
};

export default Header;