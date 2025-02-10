import React, { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";

const AddExpenseForm = ( {budgets} ) => {
  const fetcher = useFetcher();
  const formRef = useRef();
  const focusRef = useRef();
  const isSubmitting = fetcher.state === "submitting";
  useEffect(() => {
    formRef.current.reset();
    focusRef.current.focus();
  }, [isSubmitting]);
  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Add new{" "}
        <span className="accent">
          {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
        </span>{" "}
        Expense
      </h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense">Expense Name</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g, Coffee"
              required
              ref={focusRef}
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">Amount</label>
            <input
              type="number"
              inputMode="decimal"
              step="0.01"
              placeholder="e.g, 12.33"
              name="newExpenseAmount"
              id="newExpenseAmount"
              required
            />
          </div>
        </div>
        <div className="grid-xs" hidden={budgets.length === 1}>
          <label htmlFor="newExpenseBudget">Budget Category</label>
          <select name="newExpenseBudget" id="newExpenseBudget" required>{
          budgets.sort((a,b)=>a.createdAt-b.createdAt)
          .map((budget)=>{
          return (
          <option key={budget.id} value={budget.id}>{budget.name}</option>
          )
        })
    }</select>
          
        </div>
        <input type="hidden" name="_action" value="createExpense" />
          <button
            type="submit"
            className="btn btn--dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <span>
                Add Expense <FaCirclePlus width={100} />
              </span>
            )}
          </button>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenseForm;
