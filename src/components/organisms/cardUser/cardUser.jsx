import React from 'react';
import {
  Container, Col, Row, Image, Nav,
} from 'react-bootstrap';
import { GoRepo, GoOrganization } from 'react-icons/go';

import { useUser } from '../../../context/User';
import { usePages } from '../../../context/Pages';
import api from '../../../services/service';
import './styles.scss';

export default function CardUser() {
  const { user, setUser } = useUser();
  const { Pages, setPages } = usePages();

  function validateInfoField(fieldValue, gridColumn, classe = '') {
    return fieldValue !== null ? (
      <Col md={gridColumn} className={classe}>
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

  function requestStarred() {
    if (user.starred) {
      setPages('starred');
    } else {
      api
        .get(`users/${user.profile.login}/starred`)
        .then((response) => {
          const userUpdate = user;
          userUpdate.starred = response.data;
          setUser(userUpdate);
          setPages('starred');
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
        <Col xs="4" sm="4" lg="12" xl="12" className="carduser__avatar">

          <Image
            src={user.profile.avatar_url}
            roundedCircle
            alt={`Avatar do perfil ${user.profile.name}`}
          />

          <Col md="12" className="carduser__navbar">
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link className={`BtnTheme ${Pages === 'repos' && 'BtnTheme--active'}`} onClick={() => requestRepos()}>Repos</Nav.Link>
              </Nav.Item>
              <Nav.Item>

                <Nav.Link className={`BtnTheme ${Pages === 'starred' && 'BtnTheme--active'}`} onClick={() => requestStarred()}>
                  Starred
                </Nav.Link>

              </Nav.Item>
            </Nav>
          </Col>
        </Col>
        <Col xs="8" sm="8" lg="12" xl="12" className="carduser__infos">
          <Row>
            <Col md="12">
              <h2>{user.profile.name}</h2>
            </Col>

            {validateInfoField(user.profile.company, '12', 'xs-removed')}
            {validateInfoField(user.profile.bio, '12', 'xs-removed')}
            {validateInfoField(user.profile.location, '12', 'xs-removed')}

            <Col md="12">
              <ul className="carduser__list">
                <li>
                  <GoOrganization />
                  {user.profile.followers}
                  {' '}
                  Seguidores
                  {' '}
                  {user.profile.following}
                  {' '}
                  Seguindo
                  {' '}
                </li>
                <li>
                  <GoRepo />
                  {user.profile.public_repos}
                  {' '}
                  Repositórios
                  {' '}
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
