import "./BottomButtons.css";
import React from "react";
const BottomButtons = (props) => {
  const currentQuestion = props.currentQuestion;
  const switchNextQuestion = () => {
    if (currentQuestion !== props.lengthOfQuestion - 1) {
      props.onSwitchNextQuestion(currentQuestion + 1);
    }
    props.onBackNextResetColors();
    console.log('working from next')
  };
  const switchBackQuestion = () => {
    if (currentQuestion !== 0) {
      props.onSwitchBackQuestion(currentQuestion - 1);
    }
    props.onBackNextResetColors();
    console.log('working from back')
  };
  return (
    <div className="navigationBtns">
      <button type="submit" className="backBtn" onClick={switchBackQuestion}>
        Back
      </button>
      <button type="submit" className="nextBtn" onClick={switchNextQuestion}>
        Next
      </button>
    </div>
  );
};

export default BottomButtons;
