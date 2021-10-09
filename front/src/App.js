import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'

import './App.css';

const App = () => {
    // if (!localStorage.getItem('username')) return <LoginForm />;
  
    return (
      <ChatEngine
        height="100vh"
        projectID="39552509-2f97-42c8-970a-4897f31900ff"
        userName="pawat.th@ku.th"
        userSecret="bank27563"
        renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
      />
    );
  };

export default App;