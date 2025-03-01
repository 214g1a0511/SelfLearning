import React from "react";
import { createBudget, createExpense, deleteItem, fetchData, waait } from "../helper";
import { Link, useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";

export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses=fetchData("expenses")

  return { userName, budgets,expenses };
}
export async function dashboardAction({ request }) {
    await waait();
  
  const data = await request.formData();
  const {_action,...values} = Object.fromEntries(data);
  if(_action==="newUser"){
    try {
      //throw new Error("done")
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account!!");
    }
  }
  if(_action==="createBudget"){

    try{
      //throw new Error("failed")
      createBudget({name:values.newBudget,amount:values.newBudgetAmount})
      return toast.success("Budget Created!")
    }
    catch(e){
      throw new Error("There was a problem creating your budget")
    }
  }
  if(_action==="createExpense"){

    try{
      //throw new Error("failed")
      createExpense({name:values.newExpense,amount:values.newExpenseAmount,budgetId:values.newExpenseBudget})
      return toast.success(`Expense ${values.newExpense} Created!`)
    }
    catch(e){
      throw new Error("There was a problem creating your budget")
    }
  }
  if(_action==="deleteExpense"){

    try{
      //throw new Error("failed")
      deleteItem({
        key:"expenses",
        id:values.expenseId,

      })
      return toast.success(`Expense Deleted!`)
    }
    catch(e){
      throw new Error("There was a problem deleting your budget")
    }
  }

  }
  
const Dashboard = () => {
  const { userName,budgets,expenses } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome Back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            { budgets && budgets.length>0?
            (<div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm/>
                <AddExpenseForm budgets={budgets}/>
              </div>
              <h2>Existing Budgets</h2>
              <div className="budgets">
                {budgets.map((budget)=>(
                  <BudgetItem key={budget.id} budget={budget}/>
                ))}
              </div>
              {expenses && expenses.length>0 && (
                <div className="grid-md">
                  <h1>Recent Expenses</h1>
                  <Table expenses={expenses.sort((a,b)=>b.createdAt-a.createdAt).slice(0,8)}/>
                    {expenses.length>8 &&<Link to="expenses" className="btn btn--dark">View All Expenses</Link>}
                  
                  </div>
              )}
            </div>):
            (
              <div className="grid-sm">
                <p>Personal Budgeting is the secret to financial Freedom. Start Your
                Journey Today</p>
                <p>Create a budget to get started!</p>
                <AddBudgetForm/>

              </div>
            )
            }
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
