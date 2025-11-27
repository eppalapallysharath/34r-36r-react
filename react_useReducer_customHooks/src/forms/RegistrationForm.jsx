import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Table } from "react-bootstrap";

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };

    case "email":
      return { ...state, email: action.payload };

    case "password":
      return { ...state, password: action.payload };

    case "adduser":
      return {
        ...state,
        users: [
          ...state.users,
          { id: uuidv4(),name: state.name, password: state.password, email: state.email },
        ],
        email: "",
        password: "",
        name: "",
      };

    default:
      return state;
  }
};
const initialState = {
  name: "",
  email: "",
  password: "",
  users: [],
};

export const RegistrationForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleCreateNew = (e) =>{
    e.preventDefault()
    dispatch({type:"adduser"})
  }

  return (
    <>
      <form>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
        />
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
        />
        <p>Password</p>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "password", payload: e.target.value })
          }
        />
        <div>
          <button onClick={handleCreateNew}>
            Create Account
          </button>
        </div>
      </form>
      <div>
       <p className="h3">List of registered users</p>
       <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {state.users.map(value => <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
            </tr>)}
          </tbody>
       </Table>
      </div>
    </>
  );
};
