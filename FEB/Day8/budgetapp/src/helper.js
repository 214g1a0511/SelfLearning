import { Currency } from "lucide-react"

export const waait=()=>new Promise(res=>setTimeout(res,Math.random()*500))


const getRandomColor=()=>{
    const existingBudgetLength=fetchData("budgets")?.length??0
    return `${existingBudgetLength*34} 65% 50%`
}
export const fetchData=(key)=>{
    return JSON.parse(localStorage.getItem(key))
}
export const createBudget=({name,amount})=>{
    const newItem={
        id:crypto.randomUUID(),
        name:name,
        amount:+amount,
        createdAt:Date.now(),
        color:getRandomColor()

    }
    const existingBudgets=fetchData("budgets")??[]
    return localStorage.setItem("budgets",JSON.stringify([...existingBudgets,newItem]))
}
export const createExpense=({name,amount,budgetId})=>{
    const newItem={
        id:crypto.randomUUID(),
        name:name,
        amount:+amount,
        createdAt:Date.now(),
        budgetId:budgetId

    }
    const existingExpenses=fetchData("expenses")??[]
    return localStorage.setItem("expenses",JSON.stringify([...existingExpenses,newItem]))
}
export const calculateSpentByBudget=(budgetId)=>{
    const expenses=fetchData("expenses")??[]
    const budgetSpent=expenses.reduce((acc,expense)=>{
        if(expense.budgetId!==budgetId) return acc
        return acc+=expense.amount
    },0)
    return budgetSpent
}
export const getAllMatchingItems=({category,key,value})=>{
    const data=fetchData(category)??[]
    return data.filter((item)=>item[key]===value)
}
export const formatToLocaleDate=(epoch)=>
new Date(epoch).toLocaleDateString();
//console.log(epoch)

export const formatCurrency=(amt)=>{
    return amt.toLocaleString(undefined,{
        style:"currency",
        currency:'INR'
    })
}
export const formatPercentage=(amt)=>{
    return amt.toLocaleString(undefined,{
        style:"percent",
        minimumFractionsDigits:0,
    })
}
export const deleteItem=({key,id})=>{
    const existingData=fetchData(key)
    if(id){
        const newData=existingData.filter((item)=>item.id!==id)
        return localStorage.setItem(key,JSON.stringify(newData))
    }
    return localStorage.removeItem(key)
}