import React, { useState } from "react";
import MessageInputNo from "./messageNoUse"; 

function ChatAppNoUseCallback() {
  const [messages, setMessages] = useState([
    { type: "incoming", text: "Hello 👋" }
  ]);

  const [input, setInput] = useState("");

  // ❌ Normal function (re-created every render)
  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "outgoing", text: input }
    ]);

    setInput("");
  };

  // ❌ Normal function
  const simulateIncoming = () => {
    setMessages((prev) => [
      ...prev,
      { type: "incoming", text: "New message from server ❌" }
    ]);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h3>Chat Application (No useCallback, No memo)</h3>

      <div style={{ border: "1px solid gray", padding: "10px", minHeight: "200px" }}>
        {messages.map((msg, index) => (
          <p
            key={index}
            style={{
              textAlign: msg.type === "incoming" ? "left" : "right"
            }}
          >
            {msg.text}
          </p>
        ))}
      </div>

      <br />

     

      {/* <button onClick={sendMessage}>Send</button> */}

      <br /><br />

      <button onClick={simulateIncoming}>
        Simulate New Incoming Message
      </button>
         <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <MessageInputNo sendMessage={sendMessage} />
    </div>
  );
}

export default ChatAppNoUseCallback;
