import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "../../api/axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Pagination } from "@mantine/core";
import { Link } from "react-router-dom";

function Contacts() {
    const [perPage, setPerPage] = useState(100);
  const [activePage, setPage] = useState(1);

  const fetchMessages = () => {
    return axios.get(
      `/contacts?page=${activePage}&perPage=${perPage}`
    );
  };

  const {
    isLoading: loadingMessages,
    data: messagesData,
  } = useQuery([`messages`], fetchMessages, {
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  const totalPages = Math.ceil(messagesData?.data?.count / perPage);

  // pagination refetch
  useEffect(() => {

  }, [activePage, perPage,  ]);

   //end of fetching products------------------
  return (
    <div className="mx-3 my-2 pb-[100px]">Contacts

        <div>
            <div className="my-4">
            <Pagination
              total={totalPages}
              page={activePage}
              color="yellow"
              onChange={setPage}
            />
          </div>
          <div className="overflow-x-auto">

             <table className="w-full text-center table-auto border-collapse border border-slate-500 text-light text-sm">
            <thead className="bg-secondary bg-opacity-90 ">
              <tr>
                <th className="border-collapse border border-slate-500 py-2 px-3">
                  Id
                </th>
                <th className="border-collapse border border-slate-500 py-2 px-3">
                  Email
                </th>
                <th className="border-collapse border border-slate-500 py-2 px-3">
                  Title
                </th>
                <th className="border-collapse border border-slate-500 py-2 px-3">
                  Message
                </th>
               
                
              </tr>
            </thead>

            <tbody className="text-dark">
              {!messagesData?.data?.contacts ||
              messagesData?.data?.contacts?.length < 1 ? (
                <tr>
                  <td colSpan={7} className="text-gray-800 text-center py-3">
                     No contacts  found!
                  </td>
                </tr>
              ) : loadingMessages ? (
                <tr className="flex justify-center py-4 pr-6 items-center">
                  <td colSpan={17} className="text-center ">
                    <PulseLoader color="#6ba54a" size={10} />
                  </td>
                </tr>
              ) : (
                messagesData?.data?.contacts?.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="odd:bg-secondary text-gray-200 hover:bg-[#0c2d59]"
                    >
                      <td className="border-collapse border-b border-slate-500 py-2 px-3">
                        {index + 1}
                      </td>

                      <td className="border-collapse border-b  border-slate-500 py-2 px-3">
                        {item?.email}
                      </td>
                      <td className="border-collapse border-b border-slate-500 py-2 px-3">
                        {item?.title}
                      </td>
                      <td className="border-collapse border-b border-slate-500 py-2 px-3">
                        {item?.message}
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
  )
}

export default Contacts