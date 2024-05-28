import React, { useState, useEffect } from "react";
import { ChatSidebar, ChatWindow } from "../../components/layout/Chat/index";
import styles from "./chat.module.scss"; // Importa tus estilos Sass
import { friendsData, messagesData } from "./constants";
import userImage from "../../assets/images/user/userProfileImg.jpg";

interface Friend {
  id: number;
  name: string;
  isOnline: boolean;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
}

interface Message {
  id: number;
  text: string;
  time: string;
  isSentByCurrentUser: boolean;
}

const Chat: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    setFriends(friendsData);

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const selectChat = (friend: Friend) => {
    setSelectedFriend(friend);
    setMessages(messagesData);
    if (isMobileView) {
      setIsSidebarVisible(false); 
    }
  };

 
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX < touchEndX && touchEndX - touchStartX > 50) {
      setIsSidebarVisible(true); 
    }
  };

  useEffect(() => {
    if (isMobileView) {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobileView]);

  return (
    <div className={styles.chat}>
      {isSidebarVisible && (
        <ChatSidebar friends={friends} selectChat={selectChat} isMobileView={isMobileView} isVisible={isSidebarVisible} />
      )}
      <ChatWindow
        selectedFriend={selectedFriend}
        messages={messages}
        currentUserAvatar={userImage}
        isMobileView={isMobileView}
        openSidebar={() => setIsSidebarVisible(true)}
      />
    </div>
  );
};

export default Chat;
