import { useRef, useState } from "react";


// controlled component
export const Example_formvalidations = () => {
  const nameRef = useRef("");
  const messageRef = useRef("");
  const nameErrorRef = useRef();
  const messageErrorRef = useRef();
  const successRef = useRef();

  function submit(e) {
    e.preventDefault();
    let nameError = "";
    if (nameRef.current.value.trim().length >= 3) {
      const trimname = nameRef.current.value.trim();
      for (const value of trimname) {
        const str = value.toLowerCase();
        if (str >= "a" && str <= "z") {
          continue;
        } else {
          nameError = "name has other characters like numbers and symbols";
        }
      }
    } else {
      nameError = "enter name greater than 3 characters";
    }
    let messageError = "";
    const trimMessage = messageRef.current.value.trim();
    if (trimMessage.length <= 5) {
      console.log("check message");
      messageError = "enter message greater than 5 characters";
    }

    if (nameError.length > 0 || messageError.length > 0) {
      nameErrorRef.current.style.color = "red";
      nameErrorRef.current.innerHTML = nameError;

      messageErrorRef.current.style.color = "red";
      messageErrorRef.current.innerHTML = messageError;

      successRef.current.style.color = "";
      successRef.current.innerText = "";
    } else {
      nameErrorRef.current.innerHTML = "";
      messageErrorRef.current.innerHTML = "";
      successRef.current.style.color = "green";
      successRef.current.innerText = "message sent successfully";
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>name</label>
          <input type="text" placeholder="enter your name" ref={nameRef} />
          <p ref={nameErrorRef}></p>
        </div>
        <div>
          <label>Enter your message</label>
          <textarea
            rows="3"
            cols="20"
            placeholder="enter message"
            ref={messageRef}
          ></textarea>
          <p ref={messageErrorRef}></p>
          <div>
            <button>send</button>
          </div>
          <p ref={successRef}></p>
        </div>
      </form>
    </div>
  );
};



// controlled component
export const Example_Controlled_component = () => {
    const [signup, setSignup] = useState({
        username:"",
        email:"",
        password:""
    })
    const [signupError, setSignupError] = useState({
        usernameError:"",
        emailError:"",
        passwordError:""
    })
    // const [formSuccess, setFormSuccess] = useState("")
    // const [count, setCount] =useState(0)

    // const inc = ()=>{
    //     setCount((prev)=> prev + 1)
    //     setCount((prev)=> prev + 1)
    //     setCount((prev)=> prev + 1)
    // }


    const handleChange = (e)=>{
        const {name, value} = e.target
        setSignup({...signup, [name]: value})
    }
    
    function handleSubmit (e){
        e.preventDefault()
        if(signup.email.length < 5 ){
            setSignupError((prev)=>{return {...prev, emailError : "please enter email greater than 5 characters"}})
        }else{
            setSignupError((prev)=> {return {...prev,emailError:""}})
        }
        if(signup.username.length < 3 ){
            setSignupError((prev)=> {return { ...prev, usernameError: "please enter password greater than 3 characters"}})
        }else{
            setSignupError((prev)=>  {return{...prev,usernameError:""}})
        }
        if(signup.password.length < 8  ){
            setSignupError((prev)=> {return {...prev, passwordError: "please enter password greater than 7 characters"}})
        }else{
            setSignupError((prev)=>{return {...prev, passwordError:""}})
        }
    }

    // const errorArray = Object.values(signupError)
    // let ready = false
    //     for(const v of  errorArray){
    //         if(v.length == 0){
    //             ready = false
    //             break; 
    //         }else{
    //             ready = true
    //         }
    //     }
    // console.log(ready)



    return <div>
        controlled component
        {/* <p>Count {count}</p>
        <button onClick={inc}>+</button> */}

        <form onSubmit={handleSubmit}>
            <div>
            <label>Username</label>
            <input type="text" name="username" onChange={(e)=>handleChange(e)}/>
            <p>{signupError.usernameError}</p>
            </div>
            <div>
            <label>Email</label>
            <input type="email" name="email" onChange={(e)=>handleChange(e)}/>
            <p>{signupError.emailError}</p>
            </div>
            <div>
            <label>Password</label>
            <input type="password" name="password" onChange={(e)=>handleChange(e)}/>
            <p>{signupError.passwordError}</p>
            </div>
            <button >signup</button>
            {/* <p>{ready ? "form is ready to submit" : "form is not ready"}</p> */}
        </form>
    </div>
}