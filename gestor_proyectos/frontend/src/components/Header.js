import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import {  Nav,  Navbar,  NavbarBrand,  NavbarText,  NavItem,  NavLink,img} from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="primary"  expand="md">
      <a class="navbar-brand" style={{color:"#ffff"}}    href="#">
   <h1>WF</h1>
  </a>
        <NavbarBrand style={{color:"#ffff"}}  href="/">Gestión de Proyectos</NavbarBrand>
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

        <NavbarText>
          <div>
          <AiOutlineUser size="30" color="white" />          
          </div>
         
        </NavbarText>
        
      </Navbar>
    </div>
  );
};

export default Header;