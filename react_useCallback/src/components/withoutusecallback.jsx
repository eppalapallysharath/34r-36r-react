import React, { useState, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import "./style.css"
import { WithoutChildNames } from './withoutChildNames'

export const Withoutusecallback = () => {
    const [dark, setDark] = useState(false)
    const [name, setName] = useState("")
    const changeTheme = () =>{
        console.log("theme")
        setDark(!dark)
    }


    const handleNames = (e) =>{
        console.log("names")
        setName(e.target.value)
    }
    
    
    const namesArray = () =>{
        const convertArray = name.split(",")
        return convertArray
    }
    
    const memoFunction = useCallback(()=>{
        return namesArray
    },[name])


  return (
    <div className={dark ? "darkTheme" : "lightTheme"}>
        {
            dark ?  <Button variant='success' onClick={changeTheme}>Light</Button> :   <Button variant='dark' onClick={changeTheme}>Dark</Button>
        }
        <input type='text' name="names" placeholder='enter names with comma separated'  onChange={handleNames}/>
        <WithoutChildNames namesArray={memoFunction} />
    </div>
  )
}
