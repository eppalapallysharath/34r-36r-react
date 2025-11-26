import React from "react";

function MessageInputNo({ sendMessage }) {
  console.log("MessageInput rendered");

  return (
    <div style={{ marginTop: "20px" }}>
      <p>Child Component</p>
      <button onClick={sendMessage}>
        Send from Child
      </button>
    </div>
  );
}

export default MessageInputNo;
