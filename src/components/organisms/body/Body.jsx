import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useUser } from '../../../context/User';
import { usePages } from '../../../context/Pages';
import CardUser from '../cardUser/cardUser';
import CardRepos from '../../molecules/CardRepos/CardRepos';
import CardStarred from '../../molecules/CardStarred/CardStarred';
import './styles.scss';

function Body() {
  const { user } = useUser();
  const { Pages } = usePages();

  function loadPage() {
    switch (Pages) {
      case 'repos':
        return user.repos.map((item, index) => (
          <CardRepos key={index} item={item} />
        ));

      case 'starred':
        console.log('starred');
        return <CardStarred items={user.starred} />;

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
