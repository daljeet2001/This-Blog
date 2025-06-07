import React from 'react'
import {Link} from 'react-router-dom'
import { Avatar } from './Blogcard'
const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-1 ">
     <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
        Medium
     </Link>
     <div  className="flex flex-col justify-center">
      <div>
      <Link to={'/publish'}>
     <button type="button" className=" mr-4 text-white bg-blue-700 hover:bg-blue-800
      focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2">Create</button></Link>

      <Avatar name="Daljeet"/>
      </div>
     </div>
    </div>
  )
}

export default Appbar
