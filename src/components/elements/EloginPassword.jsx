import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

import EwrongPassword from "./EwrongPassword"

function EloginPassword({ eventId, setAuth }) {

  const [currentState, setCurrentState] = useState("false")

  const navigate = useNavigate();

  const onFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    console.log(formData);
    console.log(formDataObj);
    let newEventURL = import.meta.env.VITE_SERVERURL + "/api/event/verify/" + eventId + "/" + formDataObj.masterPassword;
    let response = fetch(newEventURL, {
      method: 'GET',
    }).then(
      function (response) {
        return response.text()
      }
    ).then(
      function (text) {
        let txt = text;
        setCurrentState(txt);
        setAuth(txt)
        console.log(response);
        console.log(currentState)
        console.log(txt)
        console.log(currentState == "wrong")
        console.log(currentState)
      }

    )
  }

  return (
    <>
      <h2>ログインする</h2>
      <Form onSubmit={onFormSubmit} id="form">
        <Form.Group className="mb-3" controlId="masterPassword">
          <Form.Label>イベントID: {eventId}のパスワード</Form.Label>
          <Form.Control type="password" placeholder="aoyamaSECRET123" name={"masterPassword"} />
        </Form.Group>
        <Button variant="primary" type="submit">
          ログイン
        </Button>
      </Form>

      {currentState == "wrong" ? <><hr /><EwrongPassword /></> : <></>}

      <hr />
      <Button variant="outline-primary" onClick={() => {
        localStorage.clear();
        navigate("/e2");
      }} >
        ID入力へ戻る
      </Button>
    </>


  )
}

export default EloginPassword