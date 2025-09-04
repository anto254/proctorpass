import React from 'react';
import useAuth from '../hooks/useAuth';
import { BsChatDotsFill } from "react-icons/bs";


const CtaBanner = () => {
    const { auth, setAuth } = useAuth();

    return (
        <div className="bg-blue-500 py-6 my-5 px-3 rounded-lg">
            <div className="container mx-auto flex items-center justify-between">
                {/* <p className="text-white text-lg">Need help with your ProctorU exam? Chat with us!</p> */}
                <p className="text-white text-lg basis-10/12">Looking for a proven and simplified method to pass ProctorU exams? Hire ProctorPass services today. </p>

                <button className="bg-blue-900 basis-2/12 flex justify-center items-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        setAuth({ liveChat: !auth?.liveChat })

                    }}
                >
                    <p className="flex">
                        Live Chat
                    </p>
                </button>
            </div>
        </div>
    );
};

export default CtaBanner;
