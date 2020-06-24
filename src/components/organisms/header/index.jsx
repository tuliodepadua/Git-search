import React, { useState, useEffect } from 'react';
import {
  Navbar,
  FormControl,
  Form,
  Button,
} from 'react-bootstrap';
import { FaGithub, FaSistrix } from 'react-icons/fa';
import './styles.scss';
import { useParams } from 'react-router';
import api from '../../../services/service';
import { useUser } from '../../../context/User';
import { usePages } from '../../../context/Pages';

function Header() {
  const [words, setWords] = useState('');
  const { user, setUser } = useUser();
  const { Pages, setPages } = usePages();
  const { id } = useParams();

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

  function handleClick() {
    if (words !== '') {
      if (Pages !== 'home') {
        setPages('home');
      }

      let userdata = sessionStorage.getItem(words);

      if (userdata) {
        setUser(JSON.parse(userdata));
      } else {
        api
          .get(`users/${words}`)
          .then((response) => {
            userdata = {
              profile: response.data,
            };

            setUser(userdata);

            sessionStorage.setItem(
              userdata.profile.login,
              JSON.stringify(userdata),
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  return (
    <Navbar variant="dark">
      <Navbar.Brand href="#home">
        <FaGithub className="navbar_icon" />
        Search Git
      </Navbar.Brand>

      <Form inline>
        <Form.Group>
          <FormControl
            type="text"
            placeholder="Buscar usuário"
            className="mr-sm-4"
            value={words}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <Button variant="outline-info" onClick={() => handleClick()}>
            <FaSistrix />
          </Button>
        </Form.Group>
      </Form>
    </Navbar>
  );
}

export default Header;
