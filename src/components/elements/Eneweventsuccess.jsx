import { React, useContext, useState } from "react";
import ReactDOM from 'react-dom';

import Alert from 'react-bootstrap/Alert'
import Button from "react-bootstrap/Button";

function Eneweventsuccess({ newID = "" }) {
  return (
    <Alert variant="success">
      <Alert.Heading>イベントが作成されました。</Alert.Heading>
      <p>以下のイベントIDはとても大切なものです。パスワードと一緒に保管しておいてください。</p>
      <hr />
      <p>{newID}</p>
      <Button variant="outline-success" href={"/e2/" + newID}>
        このIDでログインする
      </Button>
    </Alert>
  )
}

export default Eneweventsuccess