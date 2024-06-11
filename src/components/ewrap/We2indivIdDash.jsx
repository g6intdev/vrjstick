import { React, useContext, useState } from "react";
import ReactDOM from 'react-dom';

import { useParams } from "react-router-dom"
import Pe2indivIdDash from "../pages/Pe2indivIdDash";

function We2indivIdDash() {
  const params = useParams();
  return (
    <Pe2indivIdDash eventId={params.eventId} />
  )
}

export default We2indivIdDash