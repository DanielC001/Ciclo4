import '../styles/styles.css'
import React from "react";
import Header from "../components/Headers/HeaderPrivate";
import Footer from "../components/Footer";
import { Col, Row } from "reactstrap";
//import SideNavigation from "../components/SideNavigation";

const Layout = ({ children }) => {
    const styles = {
        contentDiv: {
            display: "flex",
        },
        contentMargin: {
            marginLeft: "10px",
            width: "100%",
        },
    };
    return (
        <div className="mainContainer">
                    <Header />
            <main>{children}</main>
        </div>
    );
}

export default Layout;