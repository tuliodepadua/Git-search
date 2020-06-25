import React, { useEffect } from 'react';
import {
  Row, Col, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import { MdPublic, MdRemoveRedEye, MdGrade } from 'react-icons/md';

import './styles.scss';

function CardRepository({ items }) {
  useEffect(() => {

  }, []);

  return items.map((item) => (
    <Col key={item.id} xs="12" sm="6" lg="6" xl="4" className="repository">
      <Col md="12" className="repository__content">
        <Row>
          <Col md="12" className="repository__header">
            <h4>{item.name}</h4>

            <OverlayTrigger
              key={`tooltip-${item.id}`}
              placement="top"
              overlay={(
                <Tooltip id={`tooltip-${item.id}`}>
                  Acessar o repositório
                </Tooltip>
                  )}
            >
              <a target="_blank" href={item.html_url}>
                <MdPublic />
              </a>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="repository__description">
            {item.description ? item.description : 'Sem descrição'}
          </Col>
          <Col md="12" className="repository__footer">
            <ul>
              {item.language && <li>{`Linguagem: ${item.language}`}</li>}
              <li>
                <MdRemoveRedEye />
                {'  '}
                {item.watchers_count}
                {'  '}
                watchers
              </li>
              <li>
                <MdGrade />
                {' '}
                {item.stargazers_count}
                {' '}
                Stars
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Col>
  ));
}

export default CardRepository;
