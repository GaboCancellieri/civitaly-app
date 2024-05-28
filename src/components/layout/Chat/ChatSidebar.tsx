import React, { useState } from 'react';
import styles from './chatSidebar.module.scss';
import { Typography } from '../../common';

interface Friend {
  id: number;
  name: string;
  isOnline: boolean;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
}

interface ChatSidebarProps {
  friends: Friend[];
  selectChat: (friend: Friend) => void;
  isMobileView: boolean;
  isVisible: boolean;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ friends, selectChat, isMobileView, isVisible }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`${styles.chatSidebar} ${isMobileView ? (isVisible ? styles.mobileSidebar : styles.hidden) : ''}`}>
      <Typography variant='smallerTitle'>Chats</Typography>
      <input 
        type="text" 
        placeholder="Search for messages or users..." 
        value={searchTerm} 
        onChange={handleSearchChange} 
      />
      <div className={styles.onlineFriends}>
        {friends.filter(friend => friend.isOnline).map(friend => (
          <div key={friend.id} className={styles.avatarContainer}>
            <img onClick={() => selectChat(friend)} src={friend.avatar} alt={friend.name} className={styles.avatar} />
            <div className={styles.onlineIndicator}></div>
            <div className={styles.friendName}><Typography variant='caption'>{friend.name}</Typography></div>
          </div>
        ))}
      </div>
      <Typography variant='smallerTitle'>Recent Chats</Typography>
      <ul>
        {filteredFriends.map(friend => (
          <li key={friend.id} onClick={() => selectChat(friend)} className={styles.chatItem}>
            <img src={friend.avatar} alt={friend.name} className={styles.avatar} />
            <div className={styles.chatInfo}>
              <div className={styles.chatName}><Typography variant='caption'>{friend.name}</Typography></div>
              <div className={styles.chatMessage}><Typography variant='caption'>{friend.lastMessage}</Typography></div>
            </div>
            <div className={styles.chatTime}><Typography variant='caption'>{friend.lastMessageTime}</Typography></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
