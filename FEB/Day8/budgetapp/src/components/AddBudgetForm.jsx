import React, { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { AlignCenter } from "lucide-react";

const AddBudgetForm = () => {
  const fetcher=useFetcher()
  const isSubmitting=fetcher.state==="submitting"
  const formRef=useRef()
  const focusRef=useRef()
  useEffect(()=>{
    if(!isSubmitting){
      formRef.current.reset()
      focusRef.current.focus()
    }

  },[isSubmitting])

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            placeholder="e.g, Groceries"
            required
            ref={focusRef}
          />
        </div>
        <div className="grid-xs">
            <label htmlFor="newBudgetAmount">Amount</label>
            <input type="number" step="0.01" inputMode="decimal" placeholder="e.g, ₹350" name="newBudgetAmount" id="newBudgetAmount"/>
        </div>
        <input type="hidden" name="_action" value="createBudget"/>
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>{
          isSubmitting?<span>Submitting...</span>:<span>Create Budget <FaIndianRupeeSign style={{AlignCenter}}/></span>}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
