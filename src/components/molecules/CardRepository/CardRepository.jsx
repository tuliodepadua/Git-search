import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MdPublic, MdGroup, MdGrade } from 'react-icons/md';

import './styles.scss';

function CardRepository({ items }) {
  return items.map((item) => (
    <Col key={item.id} md="4" className="respos">
      <Col md="12" className="respos__content">
        <Row>
          <Col md="12" className="respos__header">
            <h4>{item.name}</h4>

            <a target="_blank" href={item.html_url}>
              <MdPublic />
            </a>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="respos__description">
            {item.description ? item.description : 'Sem descrição'}
          </Col>
          <Col md="12" className="respos__footer">
            <span>
              <b> Linguagem </b>
              {' '}
              {item.language}
            </span>
            <span>
              <MdGroup />
              {'  '}
              {item.watchers_count}
              {'  '}
              watchers
            </span>
            <span>
              <MdGrade />
              {' '}
              {item.stargazers_count}
              {' '}
              Stars
            </span>
          </Col>
        </Row>
      </Col>
    </Col>
  ));
}

export default CardRepository;
