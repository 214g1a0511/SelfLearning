import React from 'react'
import { fetchData } from '../helper'
import { useLoaderData } from 'react-router-dom'
export function dashboardLoader(){
    const userName=fetchData("userName")
    return {userName}

}
const Dashboard = () => {
    const {userName}=useLoaderData()
  return (
    <div>
    </div>
  )
}

export default Dashboard