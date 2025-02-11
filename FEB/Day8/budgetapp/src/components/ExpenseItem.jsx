import React from "react";
import { formatCurrency,formatToLocaleDate, getAllMatchingItems } from "../helper";
import { Link, useFetcher } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const ExpenseItem = ({expense}) => {
    const fetcher=useFetcher()
    const budget=getAllMatchingItems({
        category:"budgets",
        key:"id",
        value:expense.budgetId,

    })[0]
    //console.log(budget)
  return <>
    <td>{expense.name}</td>
    <td>{formatCurrency(expense.amount)}</td>
    <td>{formatToLocaleDate(expense.createdAt)}</td>
    <td><Link to={`/budget/${budget.id}`} style={{"--accent":budget.color}}>{budget.name}</Link></td>
    <td>
    <fetcher.Form method="post">
        <input type="hidden" name="_action" value="deleteExpense"/>
        <input type="hidden" name="expenseId" value={expense.id}/>
        <button type="submit" className="btn btn--warning">
        <FaTrashAlt/>
        </button>
    </fetcher.Form>
    </td>
  </>;
};

export default ExpenseItem;
