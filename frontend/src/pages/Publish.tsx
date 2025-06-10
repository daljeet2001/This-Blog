
import Appbar from '../components/Appbar'
import axios from 'axios'
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import {useNavigate} from 'react-router-dom'
import {BACKEND_URL} from "../config"

const Publish = () => {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("")
    const navigate=useNavigate()
  return (
    <div>
      <Appbar/>
      <div className="flex flex-col items-center justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
            <input onChange={(e)=>{
                setTitle(e.target.value)
            }} type="text" className="w-full bg-gray-50 border border-gray-300  text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title"/>
        </div>
        <div className="mt-4 max-w-screen-lg w-full">
        <TextEditor onChange={(e)=>{
                setContent(e.target.value)
            }}/>
        <button  onClick={async()=>{
            const token = localStorage.getItem('token');
            const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content
            },{
                  headers: {
        Authorization: `Bearer ${token}`
}
            });
            navigate(`/blog/${response.data.id}`)
        }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Publish post
   </button>
        </div>


      </div>
    </div>
  )
}

export default Publish

function TextEditor({
  onChange,
}: {
  onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <form>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-gray-600">
          <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
            <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4"></div>
            <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4"></div>
          </div>
          <button
            type="button"
            data-tooltip-target="tooltip-fullscreen"
            className="p-2 text-gray-500 rounded-sm cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 19 19"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
              />
            </svg>
            <span className="sr-only">Full screen</span>
          </button>
        </div>
        <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
          <label htmlFor="editor" className="sr-only">
            Publish post
          </label>
          <textarea
            onChange={onChange}
            id="editor"
            rows={8}
            className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
    </form>
  );
}
