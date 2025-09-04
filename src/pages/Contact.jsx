import React from "react";
import NavBar from "../components/NavBar";
import { BsTelegram } from "react-icons/bs";
import Footer from "../components/Footer";
import axios from "../api/axios";
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // upload function
  const uploadMessage = (message) => {
    return axios.post("/contacts", message);
  };

  const {
    mutate: messageMutate,
    isLoading: messageLoading,
    error,
  } = useMutation(uploadMessage, {
    onSuccess: (response) => {
      toast.success(response?.data?.message);
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
    messageMutate(data);
  };

  return (
    <div>
      <NavBar />
      <div className="pt-[90px] min-h-screen ">
        <div className="py-5" id="contact ">
          <h1 className="text-center font-bold my-2">ProctorPass | Contact us </h1>
          <h1 className="text-center">or</h1>
          <div className="flex gap-2 justify-center items-center ">
            <span className="text-light">
              Email us at:
            </span>
            <a href="mailto:support@proctorubypass.com" target="_blank" >support@proctorubypass.com</a>
          </div>

          <div className="flex flex-col justify-center items-center   ">
         
            <form
              onSubmit={handleSubmit(submitMessage)}
              className="min-h-[250px]  px-4 md:px-4 mt-4 bg-secondary shadow-md shadow-indigo-900 w-full md:w-[50%]"
            >
              <div className="flex flex-col gap-4 py-3 w-full ">
                <div className="flex flex-col gap-3">
                  <h1 htmlFor="">Email </h1>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="p-1 w-full border border-secondary border-b border-b-primary focus:border focus:border-primary bg-secondary  outline-none"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">Email is required</p>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <h1 htmlFor="">Title </h1>
                  <input
                    type="text"
                    placeholder="Proctoru exam..."
                    {...register("title", {
                      required: true,
                    })}
                    className="p-1 w-full border border-b border-b-primary border-secondary focus:border focus:border-primary bg-secondary  outline-none"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-xs">Title is required</p>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <h1 htmlFor="">Message </h1>
                  <textarea
                    placeholder="I'd like to ask about..."
                    {...register("message", {
                      required: true,
                    })}
                    className="focus:border border-b border-b-primary focus:border-primary bg-secondary p-1 outline-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs">Message is required</p>
                  )}
                </div>

                <div className="flex flex-col justify-center items-center w-full m-2">
                  {messageLoading ? (
                    <div className="flex justify-center pr-6 items-center">
                      <PulseLoader color="#6ba54a" size={10} />
                    </div>
                  ) : (
                    <button className=" bg-primary text-secondary rounded-md py-2 px-5 outline-none">
                      Send
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
