import React from "react";
import { Form, Info } from "../../components/";
import "./styles.css";

const Body = ({ airline }) => {
  return <div>{airline.length ? <Form airline={airline} /> : <Info />}</div>;
};

export default Body;
