import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import History from "./History";
import bs from "./assets/backspace.png"

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [history, setHistory] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const handleClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay("");
    //console.log("cleared")
  };

  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
    //console.log("deleteed")
  };

  const handleEvaluate = () => {
    try {
      const result = eval(display);
      setHistory([display + " = " + result, ...history]);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const toggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };
  const handleClearHistory = () => {
    setHistory([]);
    console.log('Clear History button clicked');
  
  };

  return (
    <animated.div
      style={fadeIn}
      className="container col-12 col-sm-8 col-md-6 col-lg-4 my-4 p-5 border rounded shadow-lg bg-dark"
    >
      <div className="row">
        <div className="sm-col-12 md-col-5">
          <div className="display p-4 fs-1 bg-dark text-white text-end rounded mb-3">
            {display}
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={handleClear}
              >
                AC
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("%")}
              >
                %
              </button>
            </div>
            <div className="col-3 mb-2">
              <div class="rounded-circle bg-secondary p-3">
              <img src={bs} width="48px"alt="clear"
              onClick={handleDelete}
              />
              </div>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("/")}
              >
                /
              </button>
            </div>
            </div>
            <div className="row">
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("7")}
              >
                7
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("8")}
              >
                8
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("9")}
              >
                9
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("*")}
              >
                X
              </button>
            </div>
            </div>
            <div className="row">
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("4")}
              >
                4
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("5")}
              >
                5
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("6")}
              >
                6
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("-")}
              >
                -
              </button>
            </div>
            </div>
            <div className="row">
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("1")}
              >
                1
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("2")}
              >
                2
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("3")}
              >
                3
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("+")}
              >
                +
              </button>
            </div>
            </div>
            <div className="row">
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("00")}
              >
                00
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("0")}
              >
                0
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick(".")}
              >
                .
              </button>
            </div>
            <div className="col-3 mb-2">
              <button
                className="btn btn-warning w-100 fs-2 rounded-circle p-3"
                onClick={handleEvaluate}
              >
                =
              </button>
            </div>
            </div>
            </div>
        
      </div>
    </animated.div>
  );
};

export default Calculator;
