import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender, loading })
{
    return (
        < >
            <div className={` ${sender === "bot"
                ? "chat-message-bot"
                : "chat-message-user"}`}>
                {sender === "bot" && (
                    <img
                        src={RobotProfileImage}
                        className="chat-message-profile"
                    />
                )}
                {
                    loading
                        ? (<span class="loader "></span>)
                        : (<div className="message-text">{message}</div>)
                }
                {sender === "user" && (
                    <img
                        src={UserProfileImage}
                        className="chat-message-profile"
                    />
                )}

            </div>
        </>
    )
}