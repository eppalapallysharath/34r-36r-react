import React, { useState, useCallback } from "react";
import MessageInput from "./MessageInput";
 
function ChatApp() {
  const [messages, setMessages] = useState([
    { type: "incoming", text: "Hello 👋" }
  ]);

  const [input, setInput] = useState("");
  const [number, setNumber] = useState(1000);

console.log("parent")

  // ✅ useCallback still used here
  const sendMessage = useCallback(() => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "outgoing", text: input }
    ]);

    setInput("");
  }, [input]);

  // ✅ simulate new incoming message
  const simulateIncoming = useCallback(() => {
    setMessages((prev) => [
      ...prev,
      { type: "incoming", text: "New message from server ✅" }
    ]);
  }, []);

  function noMemoF(){
    console.log("hi")
    let num=0
    for(let i = 0; i <=number; i++){
        num += i
    }
    console.log(num)
    return num
  }

  const memof = useCallback(()=>{
    return noMemoF()
  },[number]) 

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h3>Chat Application (No React.memo)</h3>

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

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />

      <button onClick={sendMessage}>Send</button>

      <br /><br />

      <button onClick={simulateIncoming}>
        Simulate New Incoming Message
      </button>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
      <MessageInput sendMessage={sendMessage} func ={memof} />
    </div>
  );
}

export default ChatApp;
