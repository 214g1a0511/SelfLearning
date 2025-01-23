import React, { useState } from "react";
import "./App.css";
import History from "./History";
import bs from "./assets/backspace.png";
import { RxCross2 } from "react-icons/rx";
const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [history, setHistory] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

 
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
    console.log("Clear History button clicked");
  };

  return (
    <div
      // style={fadeIn}
      className="container w-25 col-lg-6 p-2 border rounded shadow-lg bg-dark"
      style={{ border: "1px solid blue" }}
    >
      <div className="row">
        <div className="col-12 md-col-5" style={{ border: "1px solid red" }}>
          <div className="display p-4 fs-1 bg-dark text-white text-end rounded mb-3">
            {display}
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={handleClear}
              >
                AC
              </button>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("%")}
              >
                %
              </button>
            </div>
            <div className="col-3 p-2">
              <div class="rounded-circle bg-secondary p-3">
                <img src={bs} width="48px" alt="clear" onClick={handleDelete} />
              </div>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("/")}
              >
                /
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("7")}
              >
                7
              </button>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("8")}
              >
                8
              </button>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("9")}
              >
                9
              </button>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("*")}
              >
                <RxCross2 color="white" size='35px' />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("4")}
              >
                4
              </button>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("5")}
              >
                5
              </button>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("6")}
              >
                6
              </button>
            </div>
            <div className="col-3 p-2 align-center">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("-")}
              >
                -
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("1")}
              >
                1
              </button>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("2")}
              >
                2
              </button>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("3")}
              >
                3
              </button>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("+")}
              >
                +
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("00")}
              >
                00
              </button>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick("0")}
              >
                0
              </button>
            </div>
            <div className="col-3 p-2">
              <button
                className="btn btn-secondary w-100 fs-2 rounded-circle p-3"
                onClick={() => handleClick(".")}
              >
                .
              </button>
            </div>
            <div className="col-3 p-2">
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
    </div>
  );
};

export default Calculator;
/*import { IoArrowBackOutline } from "react-icons/io5";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { useState } from "react";

export default function App() {
  const [clicked, setClicked] = useState(false);
  const handleBackButton = () => {};
  const showHistory = () => {
    setClicked(true);
    console.log(clicked);
  };
  return (
    <div className="App">
      <div
        style={{
          width: "300px",
          height: "500px",
          border: "1px solid red",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid red",
            width: "100%",
          }}
        >
          <div style={{ fontSize: "45px" }} onClick={handleBackButton}>
            <IoArrowBackOutline />
          </div>

          <div style={{ fontSize: "45px" }} onClick={showHistory}>
            <PiDotsThreeOutlineFill />
          </div>
        </div>
      </div>
    </div>
  );
}*/