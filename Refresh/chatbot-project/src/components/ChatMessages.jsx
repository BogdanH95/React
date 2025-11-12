import { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'

function ChatMessages({ chatMessages })
{
    const containerRef = useRef(null);
    useEffect(() =>
    {
        const containerElem = containerRef.current;
        if (containerElem)
        {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [chatMessages])

    return (
        <div
            ref={containerRef}
            className="chat-messages-container"
        >
            {chatMessages.map((chat) => (
                <ChatMessage
                    key={chat.id}
                    message={chat.message}
                    sender={chat.sender}
                    loading={chat.loading}
                />

            ))}
        </div>
    );
}

export default ChatMessages;