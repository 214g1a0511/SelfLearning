import logo from './logo.svg';
import './App.css';
import {useState,useRef,useEffect} from "react"
import removeUploadedFiles from 'multer/lib/remove-uploaded-files';
function App() {
  const [running,setRunning]=useState(false)
  const [timer,setTimer]=useState(0);
  const intervalId=useRef(null)
  const startTime=useRef(0)

  useEffect(()=>{
    if(running){
      intervalId.current=setInterval(()=>{
        setTimer(Date.now()-startTime.current
      )
      },10)
    }
    return ()=>{
      clearInterval(intervalId.current)
    }

  },[running])
  const startTimer=()=>{
    setRunning(true)
    startTime.current=Date.now()-timer
  }
  const stopTimer=()=>{
    setRunning(false)

  }
  const resetTimer=()=>{
    setTimer(0)
    setRunning(false)

  }
  const formatTimer=()=>{
    let hours=Math.floor(timer/(1000*60*60))
    let miuntes=Math.floor(timer/(1000*60)%60)
    let seconds=Math.floor(timer/1000)%60
    let millisecinds=Math.floor((timer%1000)%10)
    hours=String(hours).padStart(2,"0")
    miuntes=String(miuntes).padStart(2,"0")
    seconds=String(seconds).padStart(2,"0")
    millisecinds=String(millisecinds).padStart(2,"0")


    return `${hours}:${miuntes}:${seconds}:${millisecinds}`
  }
  return (
    <div className="App" >
      <div  style={{width:'200px', alignItems:'center' , margin:'auto', marginTop:'10px'}}>
      <h1>{formatTimer()}</h1>
      <div class="d-flex justify-content-between">
      <button  class=" btn btn-success"onClick={startTimer}>Start</button>
      <button class="btn btn-danger"onClick={stopTimer}>Stop</button>
      <button class="btn btn-primary" onClick={resetTimer}>Reset</button>
      </div>
      </div>
    </div>
  );
}

export default App;
