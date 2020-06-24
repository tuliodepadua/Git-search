import React from "react";
import "./styles.scss";
import { Container, Col, Row } from "react-bootstrap";
import { useUser } from "../../../context/User";
import { usePgs } from "../../../context/Pgs";
import CardUser from "../cardUser/cardUser";

function Body() {
  const { user } = useUser();
  const { Pgs } = usePgs();

  return (
    <Container fluid>
      <Row>
        <Col md='2'>
          <Row>{user.profile && <CardUser />}</Row>
        </Col>
        <Col md='10'>
          <Row>
            {Pgs === "repos" &&
              user.repos.map((item, key) => <h2 key={key}>{item.name}</h2>)}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
