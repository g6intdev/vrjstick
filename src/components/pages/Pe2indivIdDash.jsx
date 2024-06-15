import { React, useContext, useState } from "react";
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'

import Ebcdash from "../elements/Ebcdash";
import Eeventloggedinnavbar from "../elements/Eeventloggedinnavbar";
import EloginPassword from "../elements/EloginPassword";

function Pe2indivIdDash({ eventId }) {
  const [auth, setAuth] = useState("false");

  if (auth == false && localStorage.getItem("eventRole") != null) {
    setAuth(localStorage.getItem("eventAuth"))
  }

  if (auth == "master") {
    console.log(auth);
    localStorage.setItem("eventId", eventId)
    localStorage.setItem("eventRole", "master")
    return (
      <>
        <Eeventloggedinnavbar setAuth={setAuth} />
        <Container>
          <Ebcdash eventId={eventId} eventRole={auth} setAuth={setAuth} />
        </Container>
      </>
    )
  } else if (auth == "edit") {
    console.log(auth);
    localStorage.setItem("eventId", eventId)
    localStorage.setItem("eventRole", "edit")
    return (
      <>
        <Eeventloggedinnavbar setAuth={setAuth} />
        <Container>
          <Ebcdash eventId={eventId} eventRole={auth} setAuth={setAuth} />
        </Container>
      </>
    )
  } else {
    return (
      <Container>
        <EloginPassword eventId={eventId} setAuth={setAuth} />
      </Container>
    )
  }
}

export default Pe2indivIdDash