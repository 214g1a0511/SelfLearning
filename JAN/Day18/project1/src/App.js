import logo from "./logo.svg";
import "./App.css";
import { Input, HStack, AbsoluteCenter, Button, Stack } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { useState } from "react";
function App() {
  const [state, setState] = useState(false);

  const handleChange = () => {
    console.log(state);

    setState(true);
    console.log(state);
  };
  return (
    <div className="App">
      <h1>Login Form</h1>
          <div>
            <Input placeholder="Enter Email" width={500} />
          </div>
          <div>
            <Input placeholder="Enter Password" width={500} />
          </div>
          <div>
          <Button onClick={handleChange}>Send OTP</Button>
          </div>
          <br/>
          <div>
          {state ? (
            <PinInput>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
      ) : null}</div>
      
    </div>
  );
}

export default App;
