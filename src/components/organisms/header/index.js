import React, { useState } from "react";
import { Navbar, FormControl, Nav, Form, Button } from "react-bootstrap";

import { FaGithub, FaSistrix } from "react-icons/fa";
import "./styles.scss";

import { api } from "../../../services/service";
function Header() {
  const [words, setWords] = useState("");

  const handleChange = (input) => {
    setWords(input.target.value);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && handleClick();
  };

  function handleClick() {
    api
      .get(`users/${words}`)
      .then(function (response) {
        console.log(response);
        console.log("Carro");
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>
        <FaGithub className='navbar_icon' />
        Search Git
      </Navbar.Brand>
      <Nav className='mr-auto'>
        {/* <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#features'>Features</Nav.Link>
        <Nav.Link href='#pricing'>Pricing</Nav.Link> */}
      </Nav>
      <Form inline>
        <FormControl
          type='text'
          placeholder='Buscar usuário'
          className='mr-sm-4'
          value={words}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <Button variant='outline-info' onClick={() => handleClick()}>
          <FaSistrix />
        </Button>
      </Form>
    </Navbar>
  );
}

export default Header;
