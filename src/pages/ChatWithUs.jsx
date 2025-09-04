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
    const {auth,setAuth} = useAuth();
    const location = useLocation();
    const { pathname } = location;
    const axios = useAxiosPrivate();
    const isVisible = usePageVisibility();
  

   
    // function to generate 
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
            refetchIntervalInBackground:true,
            
        },
    )


    useEffect(() => {
        if (!auth?.liveChat) {
            setAuth({ liveChat: true });
            toast.info("You have a new message!")
            playNotificationSound(); // Play sound on successful fetch

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

    useEffect(()=>{
        setIsChatOpen(auth?.liveChat)

    },[auth?.liveChat])

    return (
        <div className={`right-3 bottom-4 fixed cursor-pointer z-50 ${(pathname.includes('dashboard') || pathname.includes('login')) && 'hidden'}`}>
            <div>
                {!isChatOpen && (
                    <button
                        className="fixed bottom-8 right-8 w-[65px] h-[65px] bg-blue-500 text-white rounded-full shadow-lg z-10 transition-opacity duration-300 ease-in-out"
                        onClick={toggleChat}
                    >
                        <img src={chatIcon} alt="" />
                    </button>
                )}

                {isChatOpen && (
                    <div className="fixed bottom-8 right-4 w-[90%] md:w-[350px] h-[500px] bg-white rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out">
                        <button
                            className="absolute top-3 right-3 w-6 h-6 text-gray-600 hover:text-gray-800"
                            onClick={toggleChat}
                        >
                            <IoCloseSharp color="white" size={23} />
                        </button>
                        <div className="bg-blue-500 py-3 text-light rounded-t-md px-2">
                            <h1 className="font-bold text-lg text-light">Welcome to ProctorPass</h1>
                            <h1 className='text-xs' >We help you pass your exam with minimal effort required.</h1>
                        </div>

                        {/* Your chat content goes here */}
                        <Conversation messages = {chatData?.data?.messages} clientId = {clientIdFromStorage} />
                    </div>
                )}

                {/* The rest of your app */}
            </div>
        </div>
    );
}

export default ChatWithUs;
