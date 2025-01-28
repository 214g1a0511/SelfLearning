import React, { useState, useRef, useEffect } from "react";
import "./Quiz.css";
import { data } from "../../assets/Assets/data";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[0]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [timer, setTimer] = useState(0);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);
  const arr = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        arr[question.ans - 1].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
        setQuestion(data[index + 1]);
        setLock(false);
        arr.forEach((option) => {
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
        });
      }
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setTimer(0);
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    if (timer >= 60) {
      clearInterval(intervalId);
      if (index < data.length+1) {
        setIndex((prevIndex) => prevIndex + 1);
        setQuestion(data[index + 1]);
        setTimer(0);
        setLock(false);
        arr.forEach((option) => {
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
        });
      } else {
        setResult(true);
        setQuestion(null);
      }
    }

    return () => clearInterval(intervalId);
  }, [timer, index, data]);
  return (
    <div className="container">
      <div className="header">
        <h1>Quiz App</h1>{index+1===data.length?
<></>:<><h2>Time: {timer} sec</h2></>}
      </div>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>
              {question.option1}
            </li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>
              {question.option2}
            </li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>
              {question.option3}
            </li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>
              {question.option4}
            </li>
          </ul>
          <button onClick={() => next()}>Next</button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            Your Score is {score} out of {data.length}
          </h2>
          <button onClick={() => reset()}>Reset</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quiz;
