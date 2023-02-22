// import BottomButtons from './BottomButtons';
import React from "react";
import "./Card.css";
const Card = (props) => {
  return <div className="CardHolder">{props.children}</div>;
};
export default Card;
