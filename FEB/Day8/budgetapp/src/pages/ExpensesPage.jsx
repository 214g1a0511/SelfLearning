import React from 'react'
import { deleteItem, fetchData } from '../helper';
import { useLoaderData } from 'react-router-dom';
import Table from '../components/Table';
import { toast } from 'react-toastify';
export function expensesLoader() {
  const expenses=fetchData("expenses")

  return { expenses };
}
export async function expensesAction({request}){
    const data = await request.formData();
  const {_action,...values} = Object.fromEntries(data);
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
const ExpensesPage = () => {
    const {expenses}=useLoaderData()
  return (
    <div className='grid-lg'>
        <h1>All Expenses</h1>
        {expenses && expenses.length>0?(<div className='grid-md'>
            <h2>Recent Expenses <small>({expenses.length} Total)</small></h2>
            <Table expenses={expenses}/>

        </div>

        ):
            <p>There are no expenses to show !!</p>
        }
    </div>
  )
}

export default ExpensesPage