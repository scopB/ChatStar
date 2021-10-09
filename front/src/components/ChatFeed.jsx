import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];


    console.log('asdasd ' , chats , userName , messages);

    return(
        <div>
            ChatFeed
        </div>
    )
}

// min 22.21

export default ChatFeed;