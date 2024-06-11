import { React, useContext, useState } from "react";
import ReactDOM from 'react-dom';

import Cookies from 'js-cookie'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'

import Ebcdash from "../elements/Ebcdash";
import Eeventloggedinnavbar from "../elements/Eeventloggedinnavbar";

function Peventbc() {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const [getresponse, setResponse] = useState("");
  const [gFormData, setgFormData] = useState("");
  const [allCookies, setAllCookies] = useState(Cookies.get());

  console.log(Cookies.get())

  if (allCookies._id != undefined && isLoggedIn == "false") {
    setIsLoggedIn(allCookies.role)
  }

  const onFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    console.log(formData);
    setgFormData(formDataObj);
    console.log(formDataObj);
    let newEventURL = import.meta.env.VITE_SERVERURL + "/api/event/" + formDataObj._id
    let response = fetch(newEventURL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
      function (response) {
        return response.json()
      }
    ).then(
      function (json) {
        console.log(json)
        setResponse(json)

      }
    )
  }

  function Idalert() {

    const [show, setShow] = useState(true);

    console.log(getresponse);
    console.log(gFormData)
    if (getresponse != "") {

      if (getresponse.masterPassword == gFormData.editPassword) {
        Cookies.set("id", getresponse._id)
        Cookies.set("eventName", getresponse.name)
        Cookies.set("role", "master")
        setIsLoggedIn("master");

      } else if (getresponse.editPassword == gFormData.editPassword) {
        Cookies.set("id", getresponse._id)
        Cookies.set("eventName", getresponse.name)
        Cookies.set("role", "edit")
        setIsLoggedIn("edit");
      } else {
        return (
          <>
            <hr />
            <Alert variant="warning" onClose={() => setShow(false)} dismissible>
              <p>wrong id or password. Try again.</p>
            </Alert>
          </>
        )
      }
    } else {
      return (
        <>
          <hr />
          <Alert variant="primary" onClose={() => setShow(false)} dismissible>
            <p>パスワードを入力してください</p>
          </Alert>
        </>
      )
    }
  }

  function LoginForm() {
    return (
      <>
        <Form onSubmit={onFormSubmit} id="form">
          <Form.Group className="mb-3" controlId="_id" >
            <Form.Label>イベントID</Form.Label>
            <Form.Control type="text" placeholder="24桁の16進数" name={"_id"} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="masterPassword">
            <Form.Label>パスワード</Form.Label>
            <Form.Control type="password" placeholder="aoyamaSECRET123" name={"editPassword"} />
          </Form.Group>
          <Button variant="primary" type="submit">
            ログイン
          </Button>
        </Form>
        <Idalert />
      </>
    )
  }

  if (isLoggedIn != "false") {
    return (
      <>
        <Eeventloggedinnavbar />
        <Container>
          <Ebcdash eventName={getresponse.name} eventRole={isLoggedIn} />
        </Container>
      </>
    )
  } else {
    return (
      <Container>
        <LoginForm />
      </Container>
    )
  }
}

export default Peventbc