import React, {useState} from 'react'
import{Link, useNavigate} from 'react-router-dom'
import {HiUser} from 'react-icons/hi'
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "../../api/axios";
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";



function AddReview() {

 const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // upload function
  const uploadReview = (reviewData) => {
    return axios.post("/reviews", reviewData);
  };


  const {
    mutate: reviewMutate,
    isLoading: reviewLoading,
    error,
  } = useMutation(uploadReview, {

    onSuccess: (response) => {

      const text = response?.data?.message;
      toast.success(text);
      reset();     
      
    },
    onError: (err) => {
      const text = err?.response.data.message;
      setErrMsg(text);
      setTimeout(() => {
        setErrMsg("");
      }, 10000);

      if (!err.response.data.message) {
        toast.error("something went wrong");
      }
    },
  });



const onSubmitting = (data) => {
        reviewMutate(data);
  };

  return (
   <div className='bg-dark  '>
      <form action="" className="w-full px-3  " onSubmit={handleSubmit(onSubmitting)}>
        <h1 className="font-bold my-4">Add Review</h1>
        <div className="flex flex-col px-2 md:grid md:grid-cols-3 gap-3  ">
          <div className='flex flex-col gap-2'>
            <h1>
               Name<sup className="text-red-500 text-md">*</sup>
            </h1>
            <input
              type="text"
              className="p-1 bg-gray-700 text-gray-300 outline-none focus:border-b focus:border-primary w-full"
              {...register('name', { required: true })}
            />
            <p className="text-red-500 text-sm">
              {errors?.name?.type === 'required' && 'Name is required'}
            </p>
          </div>
          
           <div className='flex flex-col gap-2'>
            <h1>
               Time<sup className="text-red-500 text-md">*</sup>
            </h1>
            <input
              type="text"
              className="p-1 bg-gray-700 text-gray-300 outline-none focus:border-b focus:border-primary w-full"
              {...register('time', { required: true })}
            />
            <p className="text-red-500 text-sm">
              {errors?.time?.type === 'required' && 'Time is required'}
            </p>
          </div>
          
           <div className='flex flex-col gap-2'>
            <h1>
               Stars<sup className="text-red-500 text-md">*</sup>
            </h1>
            <input
              type="number"
              min={1}
              max={5}
              className="p-1 bg-gray-700 text-gray-300 outline-none focus:border-b focus:border-primary w-full"
              {...register('star', { required: true })}
            />
            <p className="text-red-500 text-sm">
              {errors?.star?.type === 'required' && 'Required'}
            </p>
          </div>
           <div className='flex flex-col gap-2'>
            <h1>
               Review<sup className="text-red-500 text-md">*</sup>
            </h1>
           <textarea   className="p-1 bg-gray-700 text-gray-300 outline-none focus:border-b focus:border-primary w-full"
              {...register('review', { required: true })}
              >

              </textarea>
            <p className="text-red-500 text-sm">
              {errors?.review?.type === 'required' && 'Required'}
            </p>
          </div>
  

        </div>
     

        <div className="flex justify-center my-6">
          <input type="submit" className="bg-secondary outline-none rounded-md cursor-pointer  hover:bg-gray-500 text-center text-light px-4 py-2" />
          {/* {sending ? (
            <div>
              <PulseLoader color="#0000ff" size={10} />
            </div>
          ) : (
            <button
              onClick={handleSubmit(submitProduct)}
              className="bg-secondary outline-none rounded-md cursor-pointer  hover:bg-gray-500 text-center text-light px-4 py-2"
            >
              Add
            </button>
          )} */}
        </div>
      </form>
    </div>
  )
}

export default AddReview