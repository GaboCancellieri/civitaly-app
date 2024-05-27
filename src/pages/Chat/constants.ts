// src/constants.ts

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
  
  export const friendsData: Friend[] = [
    { id: 1, name: 'Paul Molive', isOnline: true, avatar: 'https://i.pravatar.cc/40?img=1', lastMessage: 'Lorem ipsum', lastMessageTime: '03:20 PM' },
    { id: 2, name: 'John Travolta', isOnline: true, avatar: 'https://i.pravatar.cc/40?img=2', lastMessage: 'Lorem ipsum', lastMessageTime: '01:10 PM' },
    { id: 3, name: 'Barb Ackue', isOnline: false, avatar: 'https://i.pravatar.cc/40?img=3', lastMessage: 'Lorem ipsum', lastMessageTime: '05:09 AM' },
    { id: 4, name: 'Robert Fox', isOnline: true, avatar: 'https://i.pravatar.cc/40?img=4', lastMessage: 'Lorem ipsum', lastMessageTime: '01:10 PM' },
    { id: 5, name: 'Maya Didas', isOnline: false, avatar: 'https://i.pravatar.cc/40?img=5', lastMessage: 'Lorem ipsum', lastMessageTime: '01:10 PM' },
    { id: 6, name: 'Monty Carlo', isOnline: true, avatar: 'https://i.pravatar.cc/40?img=6', lastMessage: 'Lorem ipsum', lastMessageTime: '01:10 PM' },
    { id: 7, name: 'Paige Turner', isOnline: false, avatar: 'https://i.pravatar.cc/40?img=7', lastMessage: 'Lorem ipsum', lastMessageTime: '01:10 PM' },
    { id: 8, name: 'Arnold Schwarzenegger', isOnline: false, avatar: 'https://i.pravatar.cc/40?img=8', lastMessage: 'Lorem ipsum', lastMessageTime: '05:09 AM' },
  ];
  
  export const messagesData: Message[] = [
    { id: 1, text: 'Hey, are you going to the recital this weekend?', time: '14:20', isSentByCurrentUser: false },
    { id: 2, text: 'Yes, I am! I’m really excited about it. Are you?', time: '14:22', isSentByCurrentUser: true },
    { id: 3, text: 'Absolutely! I’ve been looking forward to it for weeks.', time: '14:23', isSentByCurrentUser: false },
    { id: 4, text: 'Same here. Which band are you most excited to see?', time: '14:25', isSentByCurrentUser: true },
    { id: 5, text: 'I can’t wait to see Javier Miley perform live!', time: '14:26', isSentByCurrentUser: false },
    { id: 6, text: 'They are amazing! I’m also looking forward to seeing The Jazz Cats.', time: '14:27', isSentByCurrentUser: true },
    { id: 7, text: 'Yes, they have such a unique sound. Should we meet up before the event?', time: '14:29', isSentByCurrentUser: false },
    { id: 8, text: 'Definitely. How about we grab some food together before heading to the venue?', time: '14:30', isSentByCurrentUser: true },
    { id: 9, text: 'That sounds perfect! Let’s meet at the café near the entrance at 5 PM.', time: '14:32', isSentByCurrentUser: false },
    { id: 10, text: 'Great! I’ll see you there. Can’t wait!', time: '14:33', isSentByCurrentUser: true },
  ];
  