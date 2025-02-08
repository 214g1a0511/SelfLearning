import React from "react";
import { Form, NavLink } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

import home from "../assets/logomark.svg";
const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="go to home">
        <img src={home} height={30}></img>
        <span>Home </span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(e) => {
            if (!confirm("Delete user and all Data?")) {
              e.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <FaTrashAlt />

          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
