import React, { useEffect } from "react";

function MessageInput(props) {
  // console.log("MessageInput rendered");
  const {func} = props 
  function f(){
    console.log("child rerender")

     console.log( func() + 100)
  }
 useEffect(
  ()=> f(), [func]
 )
  return (
    <div style={{ marginTop: "20px" }}>
      {/* <p>Child Component (No memo)</p>
      <button onClick={sendMessage}>
        Send from Child
      </button> */}
      
    </div>
  );
}

export default MessageInput;
