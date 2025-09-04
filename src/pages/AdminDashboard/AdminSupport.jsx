import React, { useState, useEffect, useRef } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Pagination } from "@mantine/core";
import { Link } from "react-router-dom";
import { Indicator } from "@mantine/core";

function Support() {
  const axios = useAxiosPrivate();

  const [perPage, setPerPage] = useState(10);
  const [activePage, setPage] = useState(1);
  const [jabberId, setJabberId] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");

  const queryClient = useQueryClient();

  const { auth } = useAuth();
  const perPageOptions = [
    {
      label: "30",
      value: "30",
    },
    {
      label: "50",
      value: "50",
    },
    {
      label: "100",
      value: "100",
    },
  ];
  const roleOptions = [
    {
      label: "Buyer",
      value: "Buyer",
    },
    {
      label: "Seller",
      value: "Seller",
    },
    {
      label: "All",
      value: "",
    },
  ];

  const fetchMessages = () => {
    return axios.get(
      `/chat`
    );
  };

  const {
    isLoading: loadingMessags,
    data: messageData,
    refetch,
  } = useQuery([`messages-`, activePage], fetchMessages, {
    keepPreviousData: true,
  });


   //end of fetching products------------------



  return (
    <div className="bg- px-3 py-3">
      <h1 className="font-bold text-lg">Live Chats </h1>
      <div className="my-[20px] ">

        <div className="overflow-x-auto mb-3 pb-[100px]">
         
          <table className="w-full text-center table-auto border-collapse border border-slate-500 text-light text-sm">
            <thead className="bg-secondary bg-opacity-90 ">
              <tr>
                <th className="border-collapse border border-slate-500 py-2 px-3">
                  Id
                </th>
                <th className="border-collapse border border-slate-500 py-2 px-3">
                  UserName
                </th>
               
                <th className="border-collapse border border-slate-500 py-2 px-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="text-dark ">
              {messageData?.data?.message  ? (
                <tr>
                    <td colSpan={7} className=" text-center py-3 text-light">
                    No messages found!
                  </td>
                </tr>
              ) : loadingMessags ? (
                <tr >
                  <td colSpan={17} className="pl-[50%] py-4 ">
                    <PulseLoader color="#6ba54a" size={10} />
                  </td>
                </tr>
              ) : (
                messageData?.data?.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className={
                        item?.adminUnread > 0 ? "bg-light " : "bg-gray-200"
                      }
                    >
                      <td className="border-collapse border-b border-slate-500 py-4 px-3">
                        {index + 1}
                      </td>

                      <td  className="border-collapse border-b border-slate-500 py-4 px-3">
                        {
                          item?.adminUnread > 0 ? 
                        <Indicator
                          inline
                          label={item?.adminUnread}
                          size={16}
                        >
                          {item?.clientId}
                        </Indicator> 
                            : <span>{item?.clientId}</span>
                        }
                        
                      </td>
                      


                      <td className="border-collapse border-b border-slate-500 py-4 px-3">
                        <Link
                          to={`/dashboard/messages/${item?.clientId}`}
                          className={
                            item?.adminUnread > 0
                              ? "bg-primary text-dark rounded-md px-3 py-1 "
                              : "bg-gray-300 p-1 px-3 rounded-md"
                          }
                        >
                          View
                        </Link>
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

export default Support;
