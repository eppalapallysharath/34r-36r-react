import React,{useReducer} from 'react'


const countReducer = (state, action)=>{
    // if(action.type === "inc"){
    //     return state + 1
    // }else if (action.type ==="dec"){
    //     return state-1
    // }
    // else if(action.type === "random"){
    //     return Math.random()
    // }
    switch(action.type){
        case "inc":
            return state + 1
        case "dec":
            return state - 1
        case "random":
            return Math.random()
    }
}

const initialState = 0



const initialStateSelect = {
    category:["Clothes", "Electronics"],
    subCategory:[]
}

const categoryReducer = (state, action) =>{
    console.log(state)
    switch(action.type){
        case "Clothes" :
            return  {...state, subCategory:["shirts", "t-shirt", "pants", "trackpants"]}
        case "Electronics":
            return {...state, subCategory:["laptops", "mobiles","tablets","cameras"]}
        default:
            return {...state,subCategory:[]}
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(countReducer, initialState)
    const [select, dispatchSelect] = useReducer(categoryReducer, initialStateSelect)

    const handleIncrement = () =>{
        dispatch({type:"inc"})
    }

       const handleDecrement = () =>{
        dispatch({type:"dec"})
    }

    console.log(select.subCategory)
  return (
    <div>
        <h2>Counter app </h2>
        <h5>Count value {state}</h5>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={()=>dispatch({type: "random"})}>more count</button>


        <div>
            <select onChange={(e)=>dispatchSelect({type:e.target.value})}>
                <option value="">select category</option>
               <option value="Clothes" >Clothes</option>
               <option value="Electronics" >Electronics</option>
               {/* {select.category.map((v,i) => <option value={v} key={i}>{v}</option>)} */}
            </select>

            <select>
                <option value=""> select something</option>
                {select.subCategory.map(v => <option value={v} key={v}>{v}</option>)}
            </select>
        </div>
    </div>
  )
}
