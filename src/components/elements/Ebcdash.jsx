import { React, useContext, useState } from "react";

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

function Ebcdash({ eventId, eventRole, setAuth }) {
  if (eventRole == "master") {
    return (
      <>
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          <p>イベント：{eventId}のイベント管理者としてログインしました。入退場処理やパスワードの変更などができます。</p>
        </Alert>

      </>

    )
  } else if (eventRole == "edit") {
    const [show, setShow] = useState(true);

    return (
      <>
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          <p>イベント：{eventId}にログインしました。入退場処理を始めることができます。カメラアプリを開いてQRコードをスキャンしてください。</p>
        </Alert>
      </>
    )

  } else {
    return (
      <a>エラーが発生しました。</a>
    )
  }
}

export default Ebcdash