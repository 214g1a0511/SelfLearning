export const waait=()=>new Promise(res=>setTimeout(res,Math.random()*2000))


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
    const existingItems=fetchData("budgets")??[]
    return localStorage.setItem("budgets",JSON.stringify([...existingItems,newItem]))
}
export const deleteItem=({key})=>{
    return localStorage.removeItem(key)
}