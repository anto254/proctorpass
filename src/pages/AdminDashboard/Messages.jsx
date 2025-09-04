import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient  } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { format } from "timeago.js";


function Messages() {
    const axios = useAxiosPrivate();

  const { auth } = useAuth();
  const queryClient = useQueryClient()
  const { clientId } = useParams();
  const scroll = useRef();
  const [sent, setSent] = useState("");



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


   //get conversation......................
   function getConversation() {
    return axios.get(`/chat/admin/${clientId}`)
  }
  // querying funtion
  const {
    data: conversationData,
    isLoading: loadingConversation,
    isError: errorConversation,
  } = useQuery([`messages-${clientId}`], getConversation,{
    refetchInterval: 1000,
  });
  // end...................




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
      toast.success(response?.data?.message);
      queryClient.invalidateQueries([`messages--`]);

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
    data.senderId = auth?.userId;
    messageMutate(data);
  };

  // Always scroll to last Message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [sent, conversationData?.data?.messages?.length]);
 
  return (
    <div className="bg mx-3  md:my-0">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* <h1 className="text-3xl font-bold text-gray-100 my-8">
             {conversationData?.data?.clientId}
          </h1> */}

          <div className=" min-h-[360px] max-h-[360px] md:min-h-[500px] md:max-h-[500px]  bg-chatBg  rounded no-scrollbar border  overflow-y-auto overflow-x-auto ">
            {
              conversationData?.data?.messages?.map((message, index) => {
                return(
                  <div  className={message.senderId === auth?.userId ?"m-2  bg-[#379237] p-1 rounded-md  text-white w-[60%] float-right  "  : "text-white float-left bg-gray-800 w-[60%] m-2  p-1 rounded-md "}  key={index}>
                      <p className='p-2'>
                          {message?.message}
                      </p>
                    <h1 className="text-xs text-right">
                      {format(message?.createdAt)}
                    </h1>
                   </div>
                )
              })
            }
          </div>

          
          <form
            onSubmit={handleSubmit(submitMessage)}
            className="grid grid-cols-1 gap-6 "
          >
           
            <div className="flex gap-2 justify-center items-center pt-1 md:mb-10 ">
              {/* <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label> */}
              <textarea
                id="message"
                name="message"
                rows="1"
                {...register("message", {
                  required: true,
                })}
                className="mt-1 py-2 px-3 block w-full rounded-md  bg-gray-800 text-light border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
             
            <div>
              {messageLoading ? (
                <div className="flex justify-center pr-6 items-center">
                  <PulseLoader color="#6ba54a" size={10} />
                </div>
              ) : (
                <button className="bg-primary text-dark py-2 px-4 rounded-md ">
                  Send
                </button>
              )}
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Messages;
