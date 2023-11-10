import React, { useState } from "react";
import Navbar from "./Navbar";
import "./styles/quiz.css";
import questions from "./quizData";
import LoadingBar from "react-top-loading-bar";
import { Snackbar } from "@mui/material";
import Footer from "./Footer";

function Quizarena() {
  // for setting questions of different subjects
  const [questionData, setQuestionData] = useState(() => {
    const data = questions.filter((data) => data.name === "JavaScript");
    return data;
  });
  // for selecting different subjects
  const [subSelected, setSubSelected] = useState("JavaScript");
  const getQuestion = (subject) => {
    const updatedArr = questions.filter((data) => data.name === subject);
    setProgress(progress + 40);
    setTimeout(() => {
      setProgress(100);
      setQuestionData(updatedArr);
      setSubSelected(subject);
      setShowResult(false);
      setCurrentQuestion(0);
      setScore(0);
    }, 1000);
    setAnsSelected(-1);
  };

  // for setting score
  const [score, setScore] = useState(0);
  // for changing questions
  const [open, setOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const changeQuestion = () => {
    if (ansSelected === -1) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 1200);
      return;
    }
    updateScore();
    if (currentQuestion < questionData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnsSelected(-1);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (ansSelected === questionData[currentQuestion].ans) {
      setScore(score + 1);
    }
  };
  // for showing results
  const [showResult, setShowResult] = useState(false);
  const tryAgain = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setAnsSelected(-1);
  };
  // for selecting ans
  const [ansSelected, setAnsSelected] = useState(-1);
  const selectAns = (index) => {
    setAnsSelected(index);
  };
  //for loading bar
  const [progress, setProgress] = useState(0);
  return (
    <div className="quizArena">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <div className="quiz_mainbody">
        <h1>Quiz Arena</h1>
        <div className="quizSub_selector">
          <div
            className={`quiz_sub ${
              subSelected === "JavaScript" ? "selected" : null
            }`}
            onClick={() => getQuestion("JavaScript")}
          >
            JavaScript
          </div>
          <div
            className={`quiz_sub ${
              subSelected === "ReactJs" ? "selected" : null
            }`}
            onClick={() => getQuestion("ReactJs")}
          >
            React Js
          </div>
          <div
            className={`quiz_sub ${subSelected === "CSS" ? "selected" : null}`}
            onClick={() => getQuestion("CSS")}
          >
            CSS
          </div>
          <div
            className={`quiz_sub ${subSelected === "HTML" ? "selected" : null}`}
            onClick={() => getQuestion("HTML")}
          >
            HTML
          </div>
        </div>
        <div className="quiz_holder">
          <div className="quiz_inner_holder">
            <h2>
              Question {currentQuestion + 1} of {questionData.length}:
            </h2>
            <div className="quiz_question">
              <h3>{questionData[currentQuestion].question}</h3>
            </div>
            <div className="quiz_options">
              {questionData[currentQuestion].options.map((opt, idx) => (
                <div
                  key={idx}
                  className={`option ${
                    ansSelected === idx ? "selectedAns" : null
                  }`}
                  onClick={() => selectAns(idx)}
                >
                  {opt}
                </div>
              ))}
            </div>
            <div className="nextBtn_holder">
              <button id="nextBtn" onClick={changeQuestion}>
                {currentQuestion === 4 ? "Finish" : "Next"}
              </button>
            </div>
            {/* div for showing result of the quize */}
            {showResult ? (
              <div className="result_card">
                <h4>Your score is: {score} / 5</h4>
                <button id="reset_btn" onClick={tryAgain}>
                  Try again
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Snackbar open={open} message="Please select an option" />
      <Footer />
    </div>
  );
}
export default Quizarena;
