import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaFileAlt, FaGem, FaHeart, FaPencilAlt, FaProjectDiagram, FaSlidersH, FaUser, FaUserShield } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
 

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  // added styles 
  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}> Dashboard</MenuItem>
        <MenuItem icon={<FaUser />}>Usuarios</MenuItem>
        <MenuItem icon={<FaUserShield />}>Roles</MenuItem>
        <SubMenu title="Proyectos" icon={<FaSlidersH />}>
          <MenuItem>item</MenuItem>
          <MenuItem>item</MenuItem>
          <MenuItem>item</MenuItem>
        </SubMenu>
        <SubMenu title="Inscripción" icon={<FaPencilAlt />}>
          <MenuItem>item</MenuItem>
          <MenuItem>item</MenuItem>
        </SubMenu>
        <SubMenu title="Avances" icon={<FaFileAlt />}>
          <MenuItem>item</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideNavigation;