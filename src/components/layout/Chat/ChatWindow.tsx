import React from 'react';
import styles from './chatWindow.module.scss';
import { Typography, Button, Icon } from '../../common';

interface Message {
  id: number;
  text: string;
  time: string;
  isSentByCurrentUser: boolean;
}

interface Friend {
  id: number;
  name: string;
  isOnline: boolean;
  avatar: string;
}

interface ChatWindowProps {
  selectedFriend: Friend | null;
  messages: Message[];
  currentUserAvatar: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ selectedFriend, messages, currentUserAvatar }) => {
  return (
    <div className={styles.chatWindow}>
      {selectedFriend ? (
        <>
          <div className={styles.chatHeader}>
            <img src={selectedFriend.avatar} alt={selectedFriend.name} className={styles.avatar} />
            <div className={styles.friendInfo}>
              <Typography className={styles.friendName} variant='caption'>{selectedFriend.name}</Typography>
              <Typography className={styles.friendStatus} variant='caption'>{selectedFriend.isOnline ? 'Online' : 'Offline'}</Typography>
            </div>
          </div>
          <div className={styles.chatMessages}>
            {messages.map(message => (
              <div key={message.id} className={`${styles.messageContainer} ${message.isSentByCurrentUser ? styles.sent : styles.received}`}>
                {!message.isSentByCurrentUser && (
                    <div className={styles.avatarHour}>
                        <img src={selectedFriend.avatar} alt={selectedFriend.name} className={styles.avatar} />
                        <Typography variant='caption' className={styles.messageTime}>{message.time}</Typography> 
                    </div>
                )}
                <div className={styles.chatMessage}>
                 <Typography variant='caption' className={styles.messageText}>{message.text}</Typography> 
           
                </div>
                {message.isSentByCurrentUser && (
                    <div className={styles.avatarHour}>
                        <img src={currentUserAvatar} alt="You" className={styles.avatar} />
                        <Typography variant='caption' className={styles.messageTime}>{message.time}</Typography> 
                    </div>
                  
                )}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <span><Icon iconDesign="FontAwesome5" iconId="FaSmileBeam" /></span> 
            <span><Icon iconDesign="FontAwesome5" iconId="FaMicrophone" /></span> 
            <input type="text" placeholder="Type your message" className={styles.input} />
            <Button type='primary' >Send</Button>
          </div>
        </>
      ) : (
        <div className={styles.noFriendSelected}>Select a friend to start a chat</div>
      )}
    </div>
  );
};

export default ChatWindow;
