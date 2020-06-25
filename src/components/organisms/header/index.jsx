import React, { useState, useEffect } from 'react';
import {
  Navbar,
  FormControl,
  Form,
  Button,
  Col,
} from 'react-bootstrap';
import { FaGithub, FaSistrix } from 'react-icons/fa';
import './styles.scss';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import feedBackStatusError from '../../../services/helper';
import api from '../../../services/service';
import { useUser } from '../../../context/User';
import { usePages } from '../../../context/Pages';

function Header() {
  const [words, setWords] = useState('');
  const [FeedBack, setFeedBack] = useState('');
  const { user, setUser } = useUser();
  const { Pages, setPages } = usePages();
  const { id } = useParams();
  const history = useHistory();

  function handleClick() {
    if (words !== '') {
      if (Pages !== 'home') {
        setPages('home');
      }

      let userdata = sessionStorage.getItem(words);

      if (userdata) {
        setUser(JSON.parse(userdata));
        setFeedBack('');
        history.push(`/${words}`);
      } else {
        api
          .get(`users/${words}`)
          .then((response) => {
            userdata = {
              profile: response.data,
            };
            history.push(`/${words}`);
            setFeedBack('');
            setUser(userdata);

            sessionStorage.setItem(
              userdata.profile.login,
              JSON.stringify(userdata),
            );
          })
          .catch((error) => {
            setFeedBack(feedBackStatusError(error.response.status));
          });
      }
    }
  }

  useEffect(() => {
    if (id !== undefined && user.profile === undefined) {
      setWords(id);
      handleClick();
    }
  });

  const handleChange = (input) => {
    setWords(input.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
      e.preventDefault();
    }
  };

  const clearUserSelected = () => {
    history.push('/');
    setWords('');
    setUser({});
    setPages('home');
  };

  return (
    <Navbar variant="dark" className={`navbar ${Pages === 'inithome' && 'navbar--inicial'}`}>
      <Navbar.Brand className="navbar__brand" onClick={() => clearUserSelected()}>
        <FaGithub className="navbar__icon" />
        <span>Search Git</span>
      </Navbar.Brand>
      <Form inline className="navbar__findUser">
        <Form.Group>
          <FormControl
            type="text"
            placeholder="Buscar usuário"
            className="mr-sm-2"
            value={words}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <Button variant="outline-info" onClick={() => handleClick()}>
            <FaSistrix />
          </Button>
        </Form.Group>
      </Form>
      <Col className="mr-auto navbar__feedBackBusca">
        {FeedBack !== '' && <p>{FeedBack}</p>}
      </Col>

    </Navbar>
  );
}

export default Header;
