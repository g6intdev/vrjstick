import { React, useContext, useState } from "react";
import ReactDOM from 'react-dom';

import { redirect, Navigate } from "react-router-dom";

import Cookies from 'js-cookie'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'

import Ebcdash from "../elements/Ebcdash";
import Eeventloggedinnavbar from "../elements/Eeventloggedinnavbar";
import EloginPassword from "../elements/EloginPassword";

function Pe2idInput() {

  const [eventId, setEventId] = useState("");

  const onFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj.eventId);
    setEventId(formDataObj.eventId)
    console.log(eventId);
  }

  if (eventId != "") {
    console.log("/e2/" + eventId)
    return (
      <Navigate to={"/e2/" + eventId} />
    )
  } else {
    return (
      <>
        <Container>
          <h2>ログイン</h2>
          <Form onSubmit={onFormSubmit} id="form">
            <Form.Group className="mb-3" controlId="eventId">
              <Form.Label>イベントID</Form.Label>
              <Form.Control type="password" placeholder="aoyamaSECRET123" name={"eventId"} />
            </Form.Group>
            <Button variant="primary" type="submit">
              次へ
            </Button>
          </Form>
          <hr />
          <Button variant="outline-primary" href="/event/new">
            新しいイベントを作成
          </Button>
        </Container>
      </>
    )
  }
}

export default Pe2idInput