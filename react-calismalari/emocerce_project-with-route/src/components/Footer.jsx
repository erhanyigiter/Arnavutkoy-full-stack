import React from "react";
import { Container, Row, Col } from "reactstrap";
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        position: "fixed",
        bottom: "0",
        width: "100%",
        padding: "20px 0",
      
      }}
    >
      <Container>
        <Row>
          <Col xs="9" className="text-center">
            <p>2024 copyright by erhanyigiter</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}