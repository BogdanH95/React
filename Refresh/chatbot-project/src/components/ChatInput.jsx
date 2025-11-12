import { useState } from 'react';
import './ChatInput.css';

export function ChatInput({ onSubmit })
{
    const [inputText, setInputText] = useState("");

    function saveInputChange(event) { setInputText(event.target.value); }

    function sendMessage()
    {
        onSubmit(inputText);
        setInputText("");
    }

    return (
        <div className="chat-input-container">
            <input
                className="chat-input"
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputChange}
                value={inputText}
                onKeyUp={(e) =>
                {
                    if (e.key === 'Enter')
                    {
                        sendMessage();
                    }
                    if (e.key == 'Escape')
                    {
                        setInputText("");
                    }
                }}
            />

            <button
                className="chat-send-button"
                onClick={sendMessage}
            >Send</button>
        </div>

    );
}