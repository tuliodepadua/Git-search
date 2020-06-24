import React from "react";
import { Container, Col, Row, Image, Nav } from "react-bootstrap";
import { useUser } from "../../../context/User";
import { useInteractions } from "../../../context/Interactions";
import { api } from "../../../services/service";

import "./styles.scss";
function CardUser() {
  const { user, setUser } = useUser();
  const { Interactions, setInteractions } = useInteractions();

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
              <Nav className='justify-content-center' activeKey='/home'>
                <Nav.Item>
                  <Nav.Link onClick={() => requestRepos()}>Repos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => console.log("Starred")}>
                    Starred
                  </Nav.Link>
                </Nav.Item>
              </Nav>
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

  function requestRepos() {
    if (user.repos) {
      console.log("Existe o atributo repositorio");
    } else {
      api
        .get(`users/${user.profile.login}/repos`)
        .then(function (response) {
          let userUpdate = user;
          userUpdate.repos = response.data;
          setUser(userUpdate);
          //   setInteractions(userUpdate);
          sessionStorage.setItem(
            userUpdate.profile.login,
            JSON.stringify(userUpdate)
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}

export default CardUser;
