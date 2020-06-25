import React from 'react';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
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
        return <CardRepository items={user.starred} />;

      default:
        break;
    }
  }

  return (
    <Container fluid className="body">
      <Row>
        <Col xs="12" sm="12" lg="3" xl="2">
          <Row>{user.profile && <CardUser />}</Row>
        </Col>
        <Col xs="12" sm="12" lg="9" xl="10" className="body__right">
          {Pages === 'loadRepositorios' && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
          <Row>{loadPage()}</Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
