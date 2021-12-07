import React from "react";
import Header from "../components/Header";
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