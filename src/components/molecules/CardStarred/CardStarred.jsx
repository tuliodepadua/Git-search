import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles.scss';

function CardStarred({ items }) {
  console.log(items);
  return items.map((item) => (
    <Col key={item.id} md="4" className="respos">
      <Col md="12" className="respos__content">
        <Row>
          <Col md="12" className="respos__header">
            {item.name}
          </Col>
        </Row>
        <Row>
          <Col md="12" className="respos__description">
            {item.description}
          </Col>
        </Row>
      </Col>
    </Col>
  ));
}

export default CardStarred;
