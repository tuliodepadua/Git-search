import React from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import { useUser } from "../../../context/User";

import "./styles.scss";
function CardUser() {
  const { user, setUser } = useUser();

  function normalizeField(fieldValue, grid) {
    return fieldValue !== null ? (
      <Col md={grid}>
        <p>{fieldValue}</p>
      </Col>
    ) : null;
  }

  return (
    <Container fluid className='carduser'>
      <Row>
        <Col md='12' className='carduser_avatar'>
          <Image
            src={user.profile.avatar_url}
            roundedCircle
            alt={`Avatar do perfil ${user.profile.name}`}
          />
        </Col>
        <Col md='12' className='carduser_infos'>
          <Row>
            <Col md='12'>
              <Button variant='info'>Repositórios</Button>
              <Button variant='info'>Info</Button>
            </Col>

            <Col md='12'>
              <h2>{user.profile.name}</h2>
            </Col>

            {normalizeField(user.profile.company, "12")}
            {normalizeField(user.profile.bio, "12")}
            {normalizeField(user.profile.location, "12")}

            {/* {user.profile.public_repos !== null && (
              <p>{user.profile.public_repos}</p>
            )}
            {user.profile.followers !== null && (
              <p>Seguidores: {user.profile.followers}</p>
            )}
            {user.profile.following !== null && (
              <p>Seguindo: {user.profile.following}</p>
            )} */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CardUser;
