import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles.scss';

function CardRepos({ item: { name, description } }) {
  return (
    <Col md="4" className="respos">
      <Col md="12" className="respos__content">
        <Row>
          <Col md="12" className="respos__header">
            {name}
          </Col>
        </Row>
        <Row>
          <Col md="12" className="respos__description">
            {description}
          </Col>
        </Row>
      </Col>
    </Col>
  );
}

export default CardRepos;
