import React from "react";
import { format } from "timeago.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Conversation({ messages, clientId }) {
  const axios = useAxiosPrivate();
  const scroll = useRef();
  const [sent, setSent] = useState("");
  const { auth, setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // upload function
  const uploadMessage = (message) => {
    return axios.post("/chat", message);
  };

  const {
    mutate: messageMutate,
    isLoading: messageLoading,
    error,
  } = useMutation(uploadMessage, {
    onSuccess: (response) => {
      reset();
    },
    onError: (err) => {
      const text = err?.response?.data?.message;
      toast.error(text);

      if (!err.response.data.message) {
        toast.error("something went wrong");
      }
    },
  });

  const submitMessage = (data) => {
    data.clientId = clientId;
    data.senderId = clientId;
    setSent(data.message);
    messageMutate(data);
  };

  // Always scroll to last Message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [sent, messages?.length]);

  return (
    <div className="flex flex-col h-full">
      {/* Messages Container */}
      <div className="flex-1 bg-chatBg overflow-hidden">
        <div className="h-[350px] overflow-y-auto no-scrollbar px-2 py-3 space-y-3">
          
          {/* Welcome Message */}
          <div className="flex justify-start">
            <div className="bg-gray-800 text-white max-w-[85%] px-4 py-3 rounded-lg rounded-tl-none shadow-sm">
              <p className="text-sm leading-relaxed">
                Hi, Welcome to Zeropreps.
              </p>
              <div className="mt-2 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">WhatsApp:</span>
                  <a 
                    href="https://wa.me/+16612499285" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 underline decoration-dotted underline-offset-2 text-xs transition-colors duration-200"
                  >
                    +1 661 249 9285
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">Discord:</span>
                  <span className="text-green-300 text-xs font-mono">@velareve25</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">Telegram:</span>
                  <a 
                    href="https://t.me/trezarubble" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 underline decoration-dotted underline-offset-2 text-xs transition-colors duration-200"
                  >
                    @trezarubble
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          {messages?.map((message, index) => (
            <div key={index} className="flex">
              <div
                ref={index === messages.length - 1 ? scroll : null}
                className={`
                  max-w-[85%] px-4 py-3 rounded-lg shadow-sm break-words
                  ${message.senderId === clientId
                    ? "bg-[#379237] text-white ml-auto rounded-tr-none"
                    : "bg-gray-800 text-white mr-auto rounded-tl-none"
                  }
                `}
              >
                <p className="text-sm leading-relaxed mb-2">{message?.message}</p>
                <p className="text-xs opacity-75 text-right">
                  {format(message?.createdAt)}
                </p>
              </div>
            </div>
          ))}
          
          {/* Loading indicator for sent message */}
          {messageLoading && sent && (
            <div className="flex justify-end">
              <div className="bg-[#379237] text-white max-w-[85%] px-4 py-3 rounded-lg rounded-tr-none shadow-sm opacity-70">
                <p className="text-sm leading-relaxed mb-2">{sent}</p>
                <div className="flex justify-end">
                  <div className="animate-pulse text-xs opacity-75">Sending...</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Form */}
      <div className="border-t border-gray-200 bg-white p-3">
        <form onSubmit={handleSubmit(submitMessage)} className="flex gap-3 items-end">
          <div className="flex-1">
            <input
              placeholder="Type your message..."
              id="message"
              name="message"
              {...register("message", { required: true })}
              className="w-full py-2.5 px-4 text-dark rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-200 resize-none"
              disabled={messageLoading}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1 ml-4">Message is required</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={messageLoading}
            className={`
              px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 min-w-[80px]
              ${messageLoading 
                ? "bg-gray-500 text-white cursor-not-allowed" 
                : "bg-primary text-dark hover:bg-secondary hover:text-light active:transform active:scale-95"
              }
            `}
          >
            {messageLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              </div>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Conversation;