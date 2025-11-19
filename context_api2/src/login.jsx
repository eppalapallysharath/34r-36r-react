import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dashboard } from './dashboard'
import {loginContext} from "./App"

export const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    const {setUser} = useContext(loginContext)
    
    const login = (e) => {
        e.preventDefault()
        const user = [{
            username:"tom1231",
            password:"tom@123"
        }, {
            username:"sharath123",
            password:"sharath@123"
        }
    ]

        const data = user.find((item) =>{return item.username  == username && item.password == password })
        if(data){
            alert("login successfully")
            setUser(data)
            navigate("/dashboard")
        }
        else{
            alert("invalid username or password")
        }

       
    }
  return (
    <div>
        <form onSubmit={login}>
            <p>Username</p>
            <input type='text' name='username' onChange={(e)=> setusername(e.target.value)} value={username} />
            <p>Password</p>
            <input type='password' name='password' onChange={(e)=> setpassword(e.target.value)} value={password}/>
            <div>
                <button>login</button>
            </div>
        </form>
    </div>
  )
}
