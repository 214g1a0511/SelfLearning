import React from 'react'
import { fetchData } from '../helper'
import { Outlet, useLoaderData } from 'react-router-dom'
import Nav from '../components/Nav'
import footer from "../assets/wave.svg"
export function MainLoader(){
    const userName=fetchData("userName")
    return {userName}

}
const Main = () => {
    const {userName}=useLoaderData()
  return (
    <div className='layout'>
        <Nav userName={userName}/>
        <h1>{userName}</h1>

        <main>
        <Outlet/>
        </main>
        <img src={footer}/>

    </div>
  )
}

export default Main