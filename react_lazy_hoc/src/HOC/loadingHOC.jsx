import React from 'react'

export const Loading = (Component)=>{
    return (props)=>{
        const {loading, ...prop} = props
        if(loading){
            console.log("loading")
            return <h3>Loading.....</h3>
        }
        console.log("no load")
        return <Component {...prop}/>
    }
}