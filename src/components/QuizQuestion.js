import "./QuizQuestion.css";
import BottomButtons from "./BottomButtons";
import QuestionButtons from "./QuestionButtons";
import React from "react";
import axios from "axios";
import { useState } from "react";
const quizQuestion = (props) => {
  const [color, setColor] = useState(false);
  const onClickHandler = (event) => {
    console.log(event.target.id);
    setColor(true);
  };
  const alphabetHolder = ["a", "b", "c", "d"];
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFinalResults, setFinalResults] = useState(false);
  const [showAnswer, setAnswers] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [changed, setChanged] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: false },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];
  const onSwitchNextQuestionHandler = (currentState) => {
    setCurrentQuestion(currentState);
    const config = {
      headers: {
        "X-Api-Key": "fPY6HjXZZuZchiAo8gwla8747daLHdz05mGYxzLO",
      },
    };
    axios.get("https://quizapi.io/api/v1/questions", config).then((res) => {
      console.log(res);
    });
  };
  const onSwitchBackQuestionHandler = (currentState) => {
    setCurrentQuestion(currentState);
  };
  const onCorrectAnswerHandler = () => {
    setScore(score + 1);
  };
  const onShowFinalResultsHandler = () => {
    setFinalResults(true);
  };
  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };
  const showQuestions = () => {
    setShowStartButton(false);
  };
  let varClass;
  // setChanged(false);
  const onBackNextResetColorsHandler = () => {
    setChanged(true);
  };

  return (
    <div className="questionHolder">
      {showFinalResults ? (
        <div className="finalResult">
          <p className="quizOverText">Quiz is over</p>
          <p className="scoreDisplayFinalResult">
            {score > 2 ? (
              <p className="scoreDisplayFinalResultChild">Yayy </p>
            ) : (
              <p className="scoreDisplayFinalResultChild">Aww </p>
            )}
            your score is {score} out of {questions.length}
          </p>{" "}
          <br />
          <button className="btn" onClick={resetQuiz}>
            Play Again
          </button>
          <button className="btn">Show Answers</button>
        </div>
      ) : (
        <div>
          {showStartButton ? (
            <div className="startButtonHolder">
              <div className="startButtonText">
                Ready to test your knowledge?
              </div>
              <div>
                <button
                  type="submit"
                  className="btn startButton"
                  onClick={showQuestions}
                >
                  Start Quiz
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="question">
                <div className="parent">
                  <h2 className="child">
                    Question{" "}
                    <span className="currentQuestion">
                      {currentQuestion + 1}
                    </span>
                    /{questions.length}
                  </h2>
                  <h2 className="child scoreChild">
                    Score {score}/{questions.length}
                  </h2>
                </div>
                <p className="quizQuestion">
                  {questions[currentQuestion].text}
                </p>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <div className="optionButtonHolder">
                      <QuestionButtons
                        options={option.text}
                        key={option.id}
                        correctAnswer={option.isCorrect}
                        onCorrectAnswer={onCorrectAnswerHandler}
                        currentQuestion={currentQuestion}
                        onSwitchNextQuestion={onSwitchNextQuestionHandler}
                        lengthOfQuestion={questions.length}
                        onShowFinalResult={onShowFinalResultsHandler}
                        varClass={varClass}
                        changed={changed}
                      ></QuestionButtons>
                    </div>
                  );
                })}
              </div>
              <BottomButtons
                lengthOfQuestion={questions.length}
                currentQuestion={currentQuestion}
                onSwitchNextQuestion={onSwitchNextQuestionHandler}
                onSwitchBackQuestion={onSwitchBackQuestionHandler}
                onBackNextResetColors={onBackNextResetColorsHandler}
              ></BottomButtons>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default quizQuestion;
