import { React, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';

import logo from "../../assets/react.svg"

function Eeventloggedinnavbar({ setAuth }) {

  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          NTSテスト
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">{'　'}
          <Button variant="default" onClick={() => {

            localStorage.clear();

            setAuth("false")
            // Object.keys(Cookies.get()).forEach(function (cookieName) {
            //   Cookies.remove(cookieName)
            // });
            navigate("./")

          }}>
            ログアウト
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Eeventloggedinnavbar