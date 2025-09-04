import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { BsTelegram } from "react-icons/bs";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import Footer from "../components/Footer";
import { AiFillStar } from "react-icons/ai";
import { Pagination } from "@mantine/core";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "../api/axios";
import StarRating from "../components/StarRating";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function Reviews() {
  const [perPage, setPerPage] = useState(15);
  const [activePage, setPage] = useState(1);

  const fetchReviews = () => {
    return axios.get(`/reviews?page=${activePage}&perPage=${perPage}`);
  };

  const {
    isLoading: loadingReviews,
    data: reviewsData,
    refetch,
    isRefetching: refetchingReviews,
  } = useQuery(["reviews", activePage], fetchReviews, {
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  const totalPages = Math.ceil(reviewsData?.data?.count / perPage);
  // pagination refetch
  useEffect(() => {
    refetch();
  }, [activePage, perPage]);
  //end of fetching products------------------
  const reviews = [1, 2, 3, 6, 8, 4];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitting = () => {
    reset();
    toast.success("Review sent successfully");
  };

  return (
    <div>
      <NavBar />

      <div className="bg-secondary bg-opacity-30 px-6 py-4 md:px-[100px] pt-[90px]">
        <h1 className="text-lg font-bold my-3">Reviews</h1>

        <div className=" my-3 ">
          <Pagination
            value={activePage}
            onChange={setPage}
            color="yellow"
            total={totalPages}
            className="text-light py-1 bg-gray-600 px-2 rounded-md w-[300px]"
          />
        </div>

        <div className=" flex flex-col md:grid md:grid-cols-4 gap-4 min-h-[400px]">
          {loadingReviews ? (
            <div className="flex justify-center  gap-3 items-center">
              <h1>Loading</h1>
              <p colSpan={10} className="text-center pt-2">
                {" "}
                <PulseLoader color="#ffd700" size={10} />
              </p>
            </div>
          ) : reviewsData?.data?.message ? (
            <tr>
              <td colSpan={7} className="text-gray-800 text-center py-3">
                {reviewsData?.data?.message}
              </td>
            </tr>
          ) : (
            reviewsData?.data?.reviews?.map((review, index) => {
              return (
                <div key={index} className=" my-3 p-2 bg-secondary ">
                  <div className="flex items-center justify-between text-gray-400 ">
                    <h1 className="font-bold text-lg p-2  ">{review?.name} </h1>
                    <p>{review?.time}</p>
                  </div>
                  <p className="p-2 text-gray-400">
                    {review?.review}
                  </p>

                  {/* star icons */}
                  <div className="flex items-center  justify-between">
                    <StarRating rating={review?.star} />

                    <h1>
                      Verified <span className="text-green-500">✔</span>{" "}
                    </h1>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="">
          <form
            className="flex flex-col   items-center px-1  "
            onSubmit={handleSubmit(onSubmitting)}
          >
            <h1 className="font-bold my-4">Add Review</h1>
            <div className=" w-full md:w-[50%] bg-secondary  gap-3  ">
              <div className="flex flex-col gap-2">
                <h1>
                  Name<sup className="text-red-500 text-md">*</sup>
                </h1>
                <input
                  type="text"
                  className="p-1 bg-gray-700 text-gray-300 outline-none focus:border-b focus:border-primary w-full"
                  {...register("name", { required: true })}
                />
                <p className="text-red-500 text-sm">
                  {errors?.name?.type === "required" && "Name is required"}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1>
                  Stars<sup className="text-red-500 text-md">*</sup>
                </h1>
                <input
                  type="number"
                  min={1}
                  max={5}
                  className="p-1 bg-gray-700 text-gray-300 outline-none focus:border-b focus:border-primary w-full"
                  {...register("star", { required: true })}
                />
                <p className="text-red-500 text-sm">
                  {errors?.star?.type === "required" && "Required"}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1>
                  Review<sup className="text-red-500 text-md">*</sup>
                </h1>
                <textarea
                  className="p-1 bg-gray-700 text-gray-300 outline-none focus:border-b focus:border-primary w-full"
                  {...register("review", { required: true })}
                ></textarea>
                <p className="text-red-500 text-sm">
                  {errors?.review?.type === "required" && "Required"}
                </p>
              </div>
            </div>

            <div className="flex justify-center my-6">
              <input
                type="submit"
                value={"Send"}
                className="bg-secondary outline-none rounded-md cursor-pointer  hover:bg-gray-500 text-center text-light px-4 py-2"
              />
              
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Reviews;
