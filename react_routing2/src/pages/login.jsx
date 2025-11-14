import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const credential = {
      user: "sharath",
      pass: "sharath@12345",
    };
    if (username === credential.user && password === credential.pass) {
      toast.success("Login successfully");
      navigate("/products", {state:credential})
    } else {
      toast.error("invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <legend>Login</legend>
        <div>
          <label>UserName </label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Login</button>
      </fieldset>
    </form>
  );
};
