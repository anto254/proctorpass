import React from "react";
import { BsChatDotsFill } from "react-icons/bs";
import useAuth from "../hooks/useAuth";

function Footer() {
  // get date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const { auth, setAuth } = useAuth();

  return (
    <div className="bg-[#06060a] h-[100px] flex flex-col md:flex-row gap-3 md:gap-20 justify-center overflow-x-auto items-center px-10 py-2 md:px-[100px]">
      <div className="flex gap-4">

      <div className="flex items-center gap-3">
        <h1>ProctorPass</h1>
        <h1>&copy; </h1>
        <h1>{year}</h1>
      </div>

      <div className="flex gap-2">
        <button className="bg-blue-500 flex justify-center items-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setAuth({ liveChat: !auth?.liveChat })

          }}
        >
          <BsChatDotsFill className="inline-block mr-2" />
          <p className="hidden md:flex">
            Live Chat
          </p>
        </button>
      
      </div>
      </div>
      <div className="flex gap-2 justify-center items-center ">
        <span className="text-light">
          Email us at:
        </span>
        <a href="mailto:support@proctorubypass.com" target="_blank" >support@proctorubypass.com</a>
      </div>
    </div>
  );
}

export default Footer;
