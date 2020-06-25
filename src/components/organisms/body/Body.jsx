import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useUser } from '../../../context/User';
import { usePages } from '../../../context/Pages';
import CardUser from '../cardUser/cardUser';
import CardRepository from '../../molecules/CardRepository/CardRepository';

import './styles.scss';

function Body() {
  const { user } = useUser();
  const { Pages } = usePages();

  function loadPage() {
    switch (Pages) {
      case 'repos':
        return <CardRepository items={user.repos} />;
      case 'starred':
        console.log('starred');
        return <CardRepository items={user.starred} />;

      default:
        break;
    }
  }

  return (
    <Container fluid className="body">
      <Row>
        <Col md="2">
          <Row>{user.profile && <CardUser />}</Row>
        </Col>
        <Col md="10" className="body__right">
          <Row>
            {loadPage()}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
