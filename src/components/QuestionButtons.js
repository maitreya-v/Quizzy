import quizQuestion from "./QuizQuestion";
import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState } from "react";
import "./QuestionButtons.css";
const QuestionButtons = (props) => {
  const currentQuestion = props.currentQuestion;
  const [green, setGreen] = useState(false);
  const [red, setRed] = useState(false);
  const [colorClass,setColorClass] = useState('#9f8cca');  
  let className='btn '+'firstBtn '
  let variableClass;
  const [change,setChange]=useState(props.changed);
//   if(props.changed) setChange(true);
//   else setChange(false);
let changedprop = false;  
const [clicked,setClicked]=useState(props.changed);
changedprop=props.changed;
  console.log('work karja mere bhai');
  console.log(changedprop);
  const checkChanged=()=>{
   if(props.changed) setChange(props.changed);
      else setChange(!props.changed);
  }
  // console.log("from clicked")
  // console.log(clicked)
  const onClickCheckOptionButton = () => {
    // setGreen(false);
    // setRed(false);
    // variableClass='#9f8cca';
    setClicked(!props.changed);
    setChange(false);
    console.log(clicked);
    if (props.correctAnswer) {
      props.onCorrectAnswer();
    }
    if (currentQuestion > props.lengthOfQuestion) props.onShowFinalResult();
    // className='btn '+variableClass;
    // console.log('from buttons');
    // console.log(className);
    // console.log(colorClass)
  };
//   checkChanged();

  return (
    <button
      type="submit"
      className='btn'
      key={props.id}
      style={{backgroundColor:(clicked && !change?  (props.correctAnswer ? 'green' : 'red' ):'#9f8cca')}}
      onClick={onClickCheckOptionButton}
    >
      {props.options}
    </button>
  );
};

export default QuestionButtons;
