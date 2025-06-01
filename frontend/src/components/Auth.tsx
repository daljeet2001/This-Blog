import {Link,useNavigate} from 'react-router-dom';
import type {SignupInput} from '@daljeet2001/common-blog'
import type { ChangeEvent } from "react";
import axios from 'axios'
import {useState} from "react";
import {BACKEND_URL} from '../config'
export const Auth=({type}:{type:"signup" | "signin"})=>{
    const navigate=useNavigate();
    const [postInputs,SetpostInputs]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    });

    async function sendRequest(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs);
            const jwt=response.data;
            localStorage.setItem("token",jwt);
            navigate("/blogs");
        }catch(e){
            alert("Error while signing up")
        }
    }


    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <div>
                <div className="text-3xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-400">

                   {type==="signin"?"Don't have an account?":"Already have an account"}
                    <Link className="pl-2 underline" to={type==="signin"?"/signup":"/signin"}>
                    {type==="signin"?"Sign up":"Sign in"}</Link>
                </div>
            </div>
            {type==="signup"?<LabelledInput label="Name" placeholder="Daljeet Singh" onChange={(e)=>{
                SetpostInputs({
                    ...postInputs,
                    name:e.target.value
                })
            }}/>:null}
            <LabelledInput label="Email" placeholder="daljeet@gmail.com" onChange={(e)=>{
                SetpostInputs({
                    ...postInputs,
                    email:e.target.value
                })
            }}/>
            <LabelledInput type={"password"} label="Password" placeholder="648486" onChange={(e)=>{
                SetpostInputs({
                    ...postInputs,
                    password:e.target.value
                })
            }}/>
            <button onClick={sendRequest} type="button" className=" mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm
             px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup"?"Sign up" : "Sign in"}</button>
            </div>

        </div>
    </div>
}

interface LabelledInputType{
    label:string,
    placeholder:string,
    onChange:(e:any)=>void,
    type?:string
}

function LabelledInput({ label,placeholder,onChange,type}:LabelledInputType){
    return  <div>
            <label htmlFor="first_name" className=" mt-2 block mb-2 text-sm font-medium text-black">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
            placeholder={placeholder} required />
        </div>
}
