import { React, useContext, useState } from "react";
import ReactDOM from 'react-dom';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'

import Eneweventsuccess from "../elements/Eneweventsuccess";

function Pnewevent() {

  const [getresponse, setResponse] = useState("");

  const onFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    console.log(formData);
    console.log(formDataObj);
    let newEventURL = import.meta.env.VITE_SERVERURL + "/api/event/createnewevent"
    let response = fetch(newEventURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataObj)
    }).then(
      function (response) {
        return response.json()
      }
    ).then(
      function (json) {
        console.log(json)
        setResponse(json._id)

      }
    ).catch(function (ex) {
      console.log(ex)
    })

  }

  return (
    <Container>
      <h2>イベントを作成</h2>
      <Form onSubmit={onFormSubmit} id="form">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>イベント名</Form.Label>
          <Form.Control type="text" placeholder="映画観賞会" name={"name"} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="masterPassword">
          <Form.Label>管理者用パスワード</Form.Label>
          <Form.Control type="password" placeholder="aoyamaSECRET123" name={"masterPassword"} />
          <Form.Text>管理用のパスワードです。ほかの人と共有しないでください。</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="editPassword">
          <Form.Label>入退場処理用パスワード</Form.Label>
          <Form.Control type="password" placeholder="aoyama123" name={"editPassword"} />
          <Form.Text>入退場処理用のパスワードです。</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="パスワードを記録しました" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          イベントを作成する
        </Button>
      </Form>

      {getresponse != "" ? <><hr /><Eneweventsuccess newID={getresponse} /></> : <></>}

      <hr />
      <Button variant="outline-primary" href="/e2">
        ログインに戻る
      </Button>

    </Container>

  )
}

export default Pnewevent