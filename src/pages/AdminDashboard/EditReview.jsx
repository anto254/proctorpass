import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiUser } from 'react-icons/hi'
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../api/axios";
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";



function EditReview({ reviewId, handleCloseModal }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const queryClient = useQueryClient()

    function getReview() {
        return axios.get(`/reviews/one/${reviewId}`);
    }
    // querying funtion
    const {
        data: reviewData,
        isLoading: loadingReview,
        isError: errorreview,
} = useQuery([`review-${reviewId}`], getReview,
{
    enabled: !! reviewId,
}
);

  // end of fetching blog

    // upload function
    const uploadReview = (reviewDatas) => {
        return axios.patch(`/reviews/${reviewId}`, reviewDatas);
    };


    const {
        mutate: reviewMutate,
        isLoading: newReview,
        error,
    } = useMutation(uploadReview, {

        onSuccess: (response) => {

            const text = response?.data?.message;
            queryClient.invalidateQueries(["reviews"])
            toast.success(text);
            reset();
            handleCloseModal()

        },
        onError: (err) => {
            const text = err?.response.data.message;
          toast.error(text)

            if (!err.response.data.message) {
                toast.error("something went wrong");
            }
        },
    });


    const onSubmitting = (data) => {
        reviewMutate(data);
    };

    return (
        <div className=''>
            {
                loadingReview?
                <div>
                    <PulseLoader/>
                </div>
                :
            <form action="" className="w-full px-3  " onSubmit={handleSubmit(onSubmitting)}>
                <div className="flex flex-col px-2 gap-  "> 
                    <div className='flex flex-col gap-2'>
                        <h1>
                            Time<sup className="text-red-500 text-md">*</sup>
                        </h1>
                        <input
                            type="text"
                            defaultValue={reviewData?.data?.time}
                            placeholder='time'
                            className="p-1 border-[2px] rounded-md border-gray-300  outline-none  w-full"
                            {...register('time', { required: true })}

                        />
                        <p className="text-red-500 text-sm">
                            {errors?.time?.type === 'required' && 'Time is required'}
                        </p>
                    </div>
                            <div className='flex flex-col gap-2'>
                                <h1>
                                    Name<sup className="text-red-500 text-md">*</sup>
                                </h1>
                                <input
                                    type="text"
                                    defaultValue={reviewData?.data?.name}
                                    placeholder='time'
                                    className="p-1 border-[2px] rounded-md border-gray-300  outline-none  w-full"
                                    {...register('name', { required: true })}

                                />
                                <p className="text-red-500 text-sm">
                                    {errors?.time?.type === 'required' && 'Time is required'}
                                </p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1>
                                    Star<sup className="text-red-500 text-md">*</sup>
                                </h1>
                                <input
                                    type="number"
                                    max={5}
                                    defaultValue={reviewData?.data?.star}
                                    placeholder='stars'
                                    className="p-1 border-[2px] rounded-md border-gray-300  outline-none  w-full"
                                    {...register('star', { required: true })}

                                />
                                <p className="text-red-500 text-sm">
                                    {errors?.time?.type === 'required' && 'Time is required'}
                                </p>
                            </div>

                    
                    <div className='flex flex-col gap-2'>
                        <h1>
                            Review<sup className="text-red-500 text-md">*</sup>
                        </h1>
                        <textarea
                         defaultValue={reviewData?.data?.review}
                        className="p-1  border-[2px] outline-none rounded-md  w-full h-[200px]"
                            {...register('newReview', { required: true })}
                        >

                        </textarea>
                        <p className="text-red-500 text-sm">
                            {errors?.newReview?.type === 'required' && 'Required'}
                        </p>
                    </div>


                </div>


                <div >
                    {
                      newReview ?
                                    <div className="flex justify-center my-6 gap-5">
                        <PulseLoader/>
                      </div>
                      :
                                    <div className="flex justify-center my-6 gap-5">

                    <input type="submit" value="Edit" className="bg-primary text-secondary outline-none rounded-md cursor-pointer  text-center px-4 py-2" />
                     <h1 className="bg-secondary outline-none rounded-md cursor-pointer  hover:bg-gray-500 text-center text-light px-4 py-2"
                     onClick={()=>{handleCloseModal()}}
                     >
                        Cancel
                    </h1>
                      </div>

                    }
                   
                </div>
            </form>

            }
        </div>
    )
}

export default EditReview