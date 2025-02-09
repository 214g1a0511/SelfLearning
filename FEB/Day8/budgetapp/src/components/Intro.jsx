import React from "react";
import { Form } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import illustration from "../assets/illustration.jpg"
const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal Budgeting is the secret to financial Freedom. Start Your
          Journey Today
        </p>
        <Form method="post">
          <input
            type="text"
            placeholder="your name"
            name="userName"
            required
            autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark">
            Create Account
            <IoIosContact width={60} />
          </button>{" "}
        </Form>
      </div>
      <img src={illustration}/>
    </div>
  );
};

export default Intro;
