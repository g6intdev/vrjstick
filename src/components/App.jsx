import { React, useContext } from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Pnewevent from "./pages/Pnewevent";
import Peventbc from "./pages/Peventbc";
import We2indivIdDash from "./ewrap/We2indivIdDash";
import Pe2idInput from "./pages/Pe2idInput";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={"/ is not allowed"} />
        <Route path="/event/bc" element={<Peventbc />} />
        <Route path="/event/new" element={<Pnewevent />} />
        <Route path="/e2" element={<Pe2idInput />} />
        <Route path="/e2/:eventId" element={<We2indivIdDash />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App