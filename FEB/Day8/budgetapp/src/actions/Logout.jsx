import React from 'react'
import { deleteItem } from '../helper'
import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

const Logout = () => {
    deleteItem({key:"userName"})
    deleteItem({key:"budgets"})
    deleteItem({key:"expenses"})

toast.success("You've deleted your account ")
  return redirect("/")
}

export default Logout