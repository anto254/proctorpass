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

function Conversation({messages, clientId}) {
    const axios = useAxiosPrivate();
    const scroll = useRef();
    const [sent, setSent] = useState("");
    const {auth, setAuth} = useAuth();

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
            // queryClient.invalidateQueries([`messages--`]);

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

    }, [sent, messages?.length ]);


    return (
        <div>
            
            <div className="flex flex-col justify-between ">
                <div className=" min-h-[350px] bg-chatBg no-scrollbar  max-h-[300px] border-3 border-dotted overflow-y-auto -auto ">
                    <div className="text-white float-left bg-gray-800 w-[70%] m-2  px-2 py-1 rounded-md ">
                        <p>Hi, Welcome to ProctorPass. Need help with your ProctorU exam? ( <span className="italic">If you don't get a reply in under 3 minutes, kindly leave your email address or WhatsApp contact and we will get back to you in an hour.</span> )</p>

                    </div>
                    {
                                                                    
                    messages?.map((message, index) => {
                        return (
                            <div className="">                           

                            <div
                                ref={scroll}
                                className={
                                    message.senderId === clientId
                                        ? "m-2 py-1 bg-[#379237] px-2 rounded-md  text-white w-[70%] float-right  "
                                        : "text-white float-left bg-gray-800 w-[70%] m-2  px-2 py-1 rounded-md "
                                }
                                key={index}
                            >
                                <p className="">{message?.message}</p>
                                <h1 className="text-xs text-right">
                                    {format(message?.createdAt)}
                                </h1>
                                <h1 className="text-[15px] text-right"> </h1>
                            </div>
                            </div>
                        );
                    })}
                </div>
                <form
                    onSubmit={handleSubmit(submitMessage)}
                    className="grid grid-cols-1 gap-6 "
                >
                   
                    <div className="flex gap-2 items-center mt-2 px-2">
                        <input
                            placeholder="Type message"
                            id="message"
                            name="message"

                            rows="1"
                            {...register("message", {
                                required: true,
                            })}
                            className="mt-1 py-2 px-3    block text-dark w-full rounded-md bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        ></input>

                        <button
                            disabled={messageLoading}
                        className="bg-primary text-dark py-2 px-4 rounded-md disabled:bg-gray-500  hover:bg-secondary hover:text-light ">
                            Send
                        </button>
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
    );
}

export default Conversation;