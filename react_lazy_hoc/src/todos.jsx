import React, { useEffect, useState } from 'react'
import { TodoData } from './todoData'

import { Loading } from './HOC/loadingHOC';

const Data = Loading(TodoData)

export const Todos = () => {
    const [loading, setLoading] = useState(false);
    const [todoData, setTodoData] = useState([])


    function fetchTodos() {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json())
        .then(data=>{setTodoData(data), setLoading(false)})
        .catch(error=> {console.log(error),setLoading(false)})
    }

    useEffect(()=>{
        fetchTodos()
    },[])
    console.log(todoData)
  return (
    <div>todos
        {/* <TodoData data = {todoData}/> */}
        <Data loading={loading} data={todoData }/>
    </div>
  )
}
