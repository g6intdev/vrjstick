import { React, useContext, useState } from "react";
import ReactDOM from 'react-dom';

import Alert from 'react-bootstrap/Alert'

function EwrongPassword() {
  return (
    <Alert variant="warning" onClose={() => setShow(false)} dismissible >
      <p>wrong id or password. Try again.</p>
    </Alert>
  )
}

export default EwrongPassword