import React from "react";
import { AiOutlineUser } from "react-icons/ai";
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
            <NavLink style={{color:"#ffff"}}  href="/components/">Components</NavLink>
          </NavItem>


          <NavItem>
            <NavLink  style={{color:"#ffff"}}    href="https://github.com/Anderzon00/WebFear">
              GitHub
            </NavLink>
          </NavItem>
          
      

        </Nav>

        <Link to='/login'>
          <NavbarText>
            <div>
              <button type="button" class="btn btn-success">Iniciar Sesión</button>   
            </div>
          </NavbarText>
        </Link>

        

      </Navbar>
    </div>
  );
};

export default Header;