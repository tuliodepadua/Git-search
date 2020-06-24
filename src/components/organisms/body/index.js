import React from "react";
import "./styles.scss";
import { Container, Col, Row } from "react-bootstrap";
import { useUser } from "../../../context/User";
import CardUser from "../cardUser/cardUser";

function Body() {
  const { user } = useUser();

  return (
    <Container fluid>
      <Row>
        <Col md='2'>
          <Row>{user.profile && <CardUser />}</Row>
        </Col>
        <Col md='10'></Col>
      </Row>
    </Container>
  );
}

export default Body;
