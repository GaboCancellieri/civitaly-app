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

  useEffect(() => {
    setFriends(friendsData);
  }, []);

  const selectChat = (friend: Friend) => {
    setSelectedFriend(friend);
    setMessages(messagesData);
  };

  return (
    <div className={styles.chat}>
      <ChatSidebar friends={friends} selectChat={selectChat} />

      <ChatWindow
        selectedFriend={selectedFriend}
        messages={messages}
        currentUserAvatar={userImage}
      />
    </div>
  );
};

export default Chat;
