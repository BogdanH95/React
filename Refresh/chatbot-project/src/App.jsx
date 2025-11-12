import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App()
{
  const [chatMessages, setChatMessages] = useState([
    { id: crypto.randomUUID(), message: "Hello!", sender: "user" },
    { id: crypto.randomUUID(), message: "Hello, how can I be of service today?", sender: "bot" }
  ]);

  async function addMessage(message)
  {
    const newMessage = { id: crypto.randomUUID(), message: message, sender: "user" }
    setChatMessages([...chatMessages, newMessage]);
    console.log(newMessage);

    const botMessage = { id: crypto.randomUUID(), message: "Thinking in Spanish...", sender: "bot", loading: true }
    setChatMessages((prevMessages) => [...prevMessages, botMessage]);

    const lowerMessage = message.toLowerCase();
    botMessage.message = await Chatbot.getResponseAsync(lowerMessage);
    botMessage.loading = false;
    setChatMessages(prev => prev.map(msg =>
      msg.id === botMessage.id ? botMessage : msg
    ))
  }

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />

      <ChatInput onSubmit={addMessage} />
    </div>
  );
}

export default App
