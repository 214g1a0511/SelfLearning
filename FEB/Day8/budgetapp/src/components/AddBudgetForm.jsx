import React from "react";
import { Form } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            placeholder="e.g, Groceries"
            required
          />
        </div>
        <div className="grid-xs">
            <label htmlFor="newBudgetAmount">Amount</label>
            <input type="number" step="0.01" inputMode="decimal" placeholder="e.g, ₹350" name="newBudgetAmount" id="newBudgetAmount"/>
        </div>
        <button type="submit" className="btn btn--dark">Create Budget <FaIndianRupeeSign />
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
