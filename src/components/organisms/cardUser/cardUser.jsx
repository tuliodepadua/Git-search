import React from 'react';
import {
  Container, Col, Row, Image, Nav,
} from 'react-bootstrap';
import { useUser } from '../../../context/User';
import { usePages } from '../../../context/Pages';
import api from '../../../services/service';

import './styles.scss';

export default function CardUser() {
  const { user, setUser } = useUser();
  const { Pages, setPages } = usePages();

  function validateInfoField(fieldValue, gridColumn) {
    return fieldValue !== null ? (
      <Col md={gridColumn}>
        <p>{fieldValue}</p>
      </Col>
    ) : null;
  }

  function requestRepos() {
    if (user.repos) {
      setPages('repos');
    } else {
      api
        .get(`users/${user.profile.login}/repos`)
        .then((response) => {
          const userUpdate = user;
          userUpdate.repos = response.data;
          setUser(userUpdate);
          setPages('repos');
          sessionStorage.setItem(
            userUpdate.profile.login,
            JSON.stringify(userUpdate),
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <Container fluid className="carduser">
      <Row>
        <Col md="12" className="carduser_avatar">
          <Image
            src={user.profile.avatar_url}
            roundedCircle
            alt={`Avatar do perfil ${user.profile.name}`}
          />
        </Col>
        <Col md="12" className="carduser_infos">
          <Row>
            <Col md="12">
              <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                  <Nav.Link onClick={() => requestRepos()}>Repos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => console.log('Starred')}>
                    Starred
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col md="12">
              <h2>{user.profile.name}</h2>
            </Col>

            {validateInfoField(user.profile.company, '12')}
            {validateInfoField(user.profile.bio, '12')}
            {validateInfoField(user.profile.location, '12')}

            {user.profile.public_repos !== null && (
              <p>{user.profile.public_repos}</p>
            )}
            {user.profile.followers !== null && (
              <p>
                Seguidores:
                {user.profile.followers}
              </p>
            )}
            {user.profile.following !== null && (
              <p>
                Seguindo:
                {user.profile.following}
              </p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
