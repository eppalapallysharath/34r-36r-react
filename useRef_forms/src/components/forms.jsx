import { useEffect, useState } from "react";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [userData, setUserData] = useState({})
  const [userList, setuserList] = useState(localStorage.getItem("users") || [])


    const handleSubmit = (e)=>{
        e.preventDefault()
        // setUserData({
        //     userName: username,
        //     e_mail: email,
        //     user_password: password,
        //     Gender: gender
        // })
        setUserData({
            username,
            email,
            password,
            gender
        })
        userList.push(userData)
        localStorage.setItem("users", JSON.stringify(userList))
    }

    

  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <fieldset>
          <legend>Register now</legend>
          <p>Register now</p>
          <div>
            <label> Enter username </label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label> Enter email </label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Select gender</label>
            <select onChange={(e) => setGender(e.target.value)}>
              <option disabled>chose gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label> Password </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        <button>Register Now</button>
        </fieldset>
      </form>
      <div>
        {/* <p>username {userData.userName}</p>
        <p>email {userData.e_mail}</p>
        <p>password {userData.user_password}</p>
        <p>gender {userData.Gender}</p> */}
        {/* <p>username {userData.username}</p>
        <p>email {userData.email}</p>
        <p>password {userData.password}</p>
        <p>gender {userData.gender}</p> */}

        {userList.map(ele=><li>{ele.username}</li>)}
      </div>
    </>
  );
};
