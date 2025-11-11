import { useState, useRef } from "react"
export function UserForm (){
    const [name, setName] = useState("") 
    const [number, setNumber] = useState("") 
    const [email, setEmail] = useState("") 
    const [userdata,setuserData] = useState({})
    const [error, setError] = useState(null)    

    function handleSubmit(e){
        e.preventDefault()
        setuserData({
            name,
            number,
            email
        })
        setEmail("")
        setNumber("")
        setName("")
    }

    const handleNumber = (e)=>{
        console.log(isNaN(Number(e.target.value)))
        if (!isNaN(Number(e.target.value))){
            const str = Number(e.target.value).toString()
            console.log(str.length)
            setNumber(Number(e.target.value))
            if(str.length >10){
                setError("enter number with 10digits only")
            }else if( str.length <10) {
                setError("enter 10 digit number")
            }
            else{
                setError(null)
            }
        }
    }

    return <>
        <form onSubmit={handleSubmit}>
        <h2>User form</h2>
        <input type="text" placeholder="enter name" name="name" onChange={(e)=>setName(e.target.value)} value={name} />
        <input type="text" placeholder="enter phone number" name="number" onChange={(e)=>handleNumber(e)} value={number}  />
        {error && <p style={{ color:"red" }}>{error}</p>}
        <input type="email" placeholder="enter email" name="email" onChange={(e)=>setEmail(e.target.value)}  value={email} />
        <button type="submit" > submit </button>
        </form>
        <div>
        <p>name {userdata?.name}</p>
        <p>number {userdata?.number}</p>
        <p>email {userdata?.email}</p>
        </div>
    </>
}

export const Uncontrolled = ()=>{
    const usernameRef = useRef()
    const passwordRef = useRef()
    const errRef = useRef() 
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        let isNumber = false
        let isAlpha = false
        for(const v of usernameRef.current.value){
            if(!(v>= "a" && v<= "z") || (v >= "A" && v <= "Z" )){
                isAlpha = true
            }else if ( v >= 0 && v <= 9){   
                isNumber = true
            }
        }
        if(!isAlpha && !isNumber){
           alert("enter username with numbers and alphabets")
        }



    }

    return <>
        <form onSubmit={handleSubmit}>
            <p>uncontrolled component</p>
            <input type="text" name="username" ref={usernameRef} />
            <input type="password" name="password"  ref={passwordRef} />
            <p ref={errRef}>hi</p>
            <button type="submit">submit</button>
        </form>
    </>
}
