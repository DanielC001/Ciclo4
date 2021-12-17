import React from "react";
import Header from "../components/Headers/HeaderPublico";
import Footer from "../components/Footer";
import { Col, Row } from "reactstrap";

const Layout = ({ children }) => {
    return (
        <div className="mainContainer">
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}

export default Layout;