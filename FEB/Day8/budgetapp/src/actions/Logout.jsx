import React from 'react'
import { deleteItem } from '../helper'
import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

const Logout = () => {
    deleteItem({key:"userName"})
toast.warn("You're account has been deleted")
  return redirect("/")
}

export default Logout