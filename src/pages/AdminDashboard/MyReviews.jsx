import React, { useState, useEffect } from "react";
import { Pagination } from "@mantine/core";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";import PulseLoader from "react-spinners/PulseLoader";
import axios from "../../api/axios";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { AiFillEdit } from 'react-icons/ai'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import EditReview from "./EditReview";


function MyReviews() {
  const [perPage, setPerPage] = useState(15);
  const [activePage, setPage] = useState(1);
  const [reviewId, setDeleteId] = useState("");
  const queryClient = useQueryClient();
  const [opened, { open, close }] = useDisclosure(false);
  const [editReviewId, setEditReviewId] = useState('')

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

  // delete product
  const deleteProduct = () => {
    return axios.delete(`/reviews/${reviewId}`);
  };
  const { isLoading: isDeleting, mutate: deleteProductMutate } = useMutation(
    deleteProduct,
    {
      onSuccess: (response) => {
        const text = response?.data.message;
        toast.success(text);
        queryClient.invalidateQueries([`reviews`]);

        refetch();
      },
      onError: (err) => {
        const text = err?.response.data.message || "Something went wrong!!";
        toast.error(text);
      },
    }
  );
  const deleteProductById = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className=" shadow-xl p-[30px] flex flex-col gap-4">
            <h1 className="font-bold text-xl">Delete Review!</h1>
            <p className="pb-1">Are you sure you want to delete this review?</p>
            <div className="flex gap-1">
              <button
                className="rounded-md  bg-gray-400 text-white w-[50%]font-bold px-5 py-1 hover:bg-tertiary "
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="rounded-md  bg-red-500 text-white font-bold px-5 w-[50%] py-1 hover:bg-tertiary "
                onClick={() => {
                  deleteProductMutate();
                  onClose();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      },
    });
  };
  // end of delete product
  const handleCloseModal = (value)=>{
         close();
  }

  return (
    <div>
      <Modal opened={opened} centered onClose={close} title="Edit Review  ">
        
        <EditReview reviewId={editReviewId} handleCloseModal={handleCloseModal} />
      </Modal>
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
        <div className="overflow-y-auto my-3">
          <table className="w-full table-auto border-collapse border text-light text-sm">
            <thead className="bg-primary bg-opacity-90 ">
              <tr>
                <th className="border-collapse border border-slate-500 py-2 px-3">
                  Id
                </th>

                <th className="border-collapse border border-slate-500 py-2 px-3">
                  Name
                </th>

                <th
                  scope="col"
                  className="border-collapse border border-slate-500 py-2 px-3"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="border-collapse border border-slate-500 py-2 px-3"
                >
                  Review
                </th>
                <th
                  scope="col"
                  className="border-collapse border border-slate-500 py-2 px-3"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-dark">
              {loadingReviews ? (
                <tr className="flex justify-center py-4 pr-6 items-center">
                  <td colSpan={10} className="text-center pl-[200px]">
                    <PulseLoader color="#6ba54a" size={10} />
                  </td>
                </tr>
              ) : reviewsData?.data?.message ? (
                <tr>
                  <td colSpan={7} className="text-gray-800 text-center py-3">
                    {reviewsData?.data?.message}
                  </td>
                </tr>
              ) : (
                reviewsData?.data?.reviews?.map((review, index) => {
                  return (
                    <tr
                      className="bg-gray-400 odd:bg-gray-300 hover:bg-secondary hover:text-white"
                      key={index}
                    >

                      <td className="border-collapse border-b border-slate-500 py-2 px-3 text-center">
                        {index + 1}
                      </td>
                      <td className="border-collapse border-b border-slate-500 py-2 px-3 text-center">
                        {review?.name}
                      </td>

                      <td className="border-collapse border-b border-slate-500 py-2 px-3 text-center">
                         {review?.time}
                      </td>
                      <td className="border-collapse border-b border-slate-500 py-2 px-3 text-start">
                        {review?.review}
                      </td>
                      <td className="border-collapse border-b border-slate-500 py-3 px-3">
                        <div className="flex justify-center gap-3">
                          <button className="bg-primary text-secondary px-3 rounded-md"
                          onClick={()=>{
                            setEditReviewId(review?._id)
                            open()}}
                          >
                            Edit
                          </button>

                        <button
                          disabled={isDeleting}
                          onClick={() => {
                            setDeleteId(review?._id);
                            deleteProductById();
                          }}
                          className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-400 disabled:cursor-not-allowed disabled:bg-red-300 disabled:text-gray-300"
                        >
                          Delete
                        </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default MyReviews;
