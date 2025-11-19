import React,{useContext} from 'react'
import { loginContext } from './App'
import { Link, useNavigate } from 'react-router-dom'

export const Profile = () => {
    const navigate = useNavigate()
    const {user, setUser} = useContext(loginContext)
    const logout = () => {
       setUser(null)
       navigate("/")
    }
  return (
    <div>
        <h2>Profile page</h2>
        {
            user ? <div>
                <p>username : {user.username}</p>
                <p>password : {user.password}</p>
                <button onClick={logout}>Logout</button>
            </div> : <div>
                <p>no user found login to your account</p>
                <Link to={"/login"}>Login</Link>
                </div>
        }
    </div>
  )
}
