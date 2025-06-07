import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

interface BlogCardProps{
    authorName:string;
    title:string;
    content:string;
    publishedDate:string,
    id:string,
}

const Blogcard = ({authorName,title,content,publishedDate,id}:BlogCardProps) => {
  return (<Link to={`/blog/${id}`}>
    <div className="border-b border-slate-200 pb-4 p-4 cursor-pointer"> 
        <div className="flex">
         <Avatar name={authorName}/> 
           <div className="font-extralight pl-2 text-sm flex flex-col justify-center">{authorName}</div>
           <div className="flex flex-col justify-center pl-2"><Circle/></div>
           <div className="pl-2 font-thin text-slate-500 text-sm flex flex-col justify-center">{publishedDate} </div>
        </div>
        <div className="text-xl font-semibold pt-2">
                {title}
        </div>
        <div className="text-md font-thin">
                {content.slice(0,100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length/100)}minute(s) read`}
        </div>
       
    </div>
    </Link>
  )
}

export default Blogcard

 export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-600 "></div>
}

 export function Avatar({name}:{name:string}){
    return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-200 rounded-full">
    <span className="text-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
    )
}

