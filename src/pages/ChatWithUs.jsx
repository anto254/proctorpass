import React, { useEffect } from 'react';
import { useState } from 'react';
import chatIcon from '../assets/graphics/chat-icon.png';
import { useLocation } from 'react-router-dom';
import Conversation from './Conversation';
import { IoCloseSharp } from 'react-icons/io5';
import useAuth from '../hooks/useAuth';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import playNotificationSound from '../components/NotificationSound';
import { usePageVisibility } from 'react-page-visibility';

function ChatWithUs() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const {auth, setAuth} = useAuth();
    const location = useLocation();
    const { pathname } = location;
    const axios = useAxiosPrivate();
    const isVisible = usePageVisibility();

    // function to generate random string
    function generateRandomString(length) {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = "";
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }

    const [clientIdFromStorage, setclientIdFromStorage] = useState('');

    // get chat
    const fetchChat = () => {
        return axios.get(`/chat/${clientIdFromStorage}`)
    }

    const { isLoading: loadingChat, data: chatData, } = useQuery(
        [`chat-${clientIdFromStorage}`, clientIdFromStorage],
        fetchChat,
        {
            keepPreviousData: true,
            enabled: !!clientIdFromStorage,
            refetchInterval: 1000,
            refetchIntervalInBackground: true,
        },
    )

    useEffect(() => {
        if (!auth?.liveChat) {
            setAuth({ liveChat: true });
            toast.info("You have a new message!")
            playNotificationSound();
        }
        if (!isVisible) {
            playNotificationSound();
        }
    }, [chatData?.data?.messages?.length])

    useEffect(() => {
        if (!localStorage.getItem("clientId")) {
            localStorage.setItem("clientId", generateRandomString(20));
        }
        setclientIdFromStorage(localStorage.getItem("clientId"));
    }, [localStorage.getItem("clientId")])

    const toggleChat = () => {
        setAuth({ liveChat: !auth?.liveChat });
    };

    useEffect(() => {
        setIsChatOpen(auth?.liveChat)
    }, [auth?.liveChat])

    return (
        <div className={`fixed right-3 bottom-4 cursor-pointer z-50 ${(pathname.includes('dashboard') || pathname.includes('login')) && 'hidden'}`}>
            {/* Chat Toggle Button */}
            {!isChatOpen && (
                <div className="relative">
                    <button
                        className="w-16 h-16 bg-blue-500 text-white rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={toggleChat}
                        aria-label="Open chat"
                    >
                        <img 
                            src={chatIcon} 
                            alt="Chat" 
                            className="w-8 h-8 mx-auto"
                        />
                    </button>
                    
                    {/* Notification Badge */}
                    {chatData?.data?.messages?.length > 0 && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                            <span className="sr-only">New messages</span>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                    )}
                </div>
            )}

            {/* Chat Window */}
            {isChatOpen && (
                <div className="fixed bottom-4 right-4 w-[95vw] max-w-[400px] bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-300 ease-out transform animate-slideInUp">
                    {/* Chat Header */}
                    <div className="relative bg-red-500 text-white rounded-t-lg px-4 py-3">
                        <button
                            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            onClick={toggleChat}
                            aria-label="Close chat"
                        >
                            <IoCloseSharp size={20} />
                        </button>
                        
                        <div className="pr-10">
                            <h1 className="font-bold text-lg leading-tight">
                                Welcome to ProctorPass
                            </h1>
                            <p className="text-sm mt-1 leading-relaxed opacity-90">
                                Solution For Proctored Exams
                            </p>
                        </div>
                        
                        {/* Connection Status */}
                        <div className="flex items-center mt-2">
                            <div className={`w-2 h-2 rounded-full mr-2 ${loadingChat ? 'bg-yellow-300' : 'bg-green-300'}`}></div>
                            <span className="text-xs opacity-75">
                                {loadingChat ? 'Connecting...' : 'Connected'}
                            </span>
                        </div>
                    </div>

                    {/* Chat Content Container */}
                    <div className="h-[400px] flex flex-col bg-gray-50">
                        {loadingChat ? (
                            <div className="flex-1 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent mx-auto mb-2"></div>
                                    <p className="text-sm text-gray-600">Loading chat...</p>
                                </div>
                            </div>
                        ) : (
                            <Conversation 
                                messages={chatData?.data?.messages} 
                                clientId={clientIdFromStorage} 
                            />
                        )}
                    </div>
                    
                    {/* Chat Footer */}
                    <div className="bg-gray-100 px-3 py-2 rounded-b-lg">
                        <p className="text-xs text-gray-500 text-center">
                            Powered by ProctorPass • Online Support
                        </p>
                    </div>
                </div>
            )}

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                .animate-slideInUp {
                    animation: slideInUp 0.3s ease-out forwards;
                }
                
                @media (max-width: 640px) {
                    .chat-window {
                        width: calc(100vw - 2rem);
                        right: 1rem;
                        left: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default ChatWithUs;