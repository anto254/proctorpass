import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <div className="mb-6 ">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center py-[24px] pr-[24px] pl-[40px] bg-[#292E33] min-w-[800px] hover:border-l-2 "      >
        <p className=" font-medium ">{question}</p>
        {isOpen ? (
          <BiMinus className="w-6 h-6 text-dark rounded-full bg-primary" />
        ) : (
          <BiPlus className="w-6 h-6 text-dark rounded-full bg-primary" />
        )}
      </button>
      {isOpen && (
        <div className="ease-in-out duration-500  p-4 bg-[#24292E] py-[24px] px-[40px] min-w-[600px]">
          <p className="text-sm w-[600px]">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
