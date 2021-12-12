import React from "react";
import Header from "../components/HeaderPrivate";
 
import { Col, Row } from "reactstrap";
import SideNavigation from "../components/SideNavigation";

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
        <>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <div style={styles.contentDiv}>
                <SideNavigation />
                <main style={styles.contentMargin}>
                    <h1 style={{ padding: "20%" }}>{children}</h1>
                </main>
            </div>        

        </>
    );
}

export default Layout;