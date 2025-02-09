import React from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { FiArrowLeftCircle } from "react-icons/fi";

const Error = () => {
  const error=useRouteError();
  const navigate=useNavigate();
  return (
    <div className='error'>
      <h1>Uh oh! we've got a problem</h1>
      <p>{error.message||error.statusText}</p>
      <div className='flex-md'>
        <button className="btn btn--dark"onClick={()=>{
          navigate(-1)
        }}><FiArrowLeftCircle />
Go Back</button>
        <Link to="/" className='btn btn--dark'><IoHomeSharp />
        Go Home
        </Link>
      </div>
      
    </div>
  )
}

export default Error