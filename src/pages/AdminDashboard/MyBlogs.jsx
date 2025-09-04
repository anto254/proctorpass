import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import {MdEdit,MdDelete} from 'react-icons/md';
import { Card, Text } from '@mantine/core';
import { Pagination } from '@mantine/core';
import axios from '../../api/axios'
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { toast } from "react-toastify";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import PulseLoader from "react-spinners/PulseLoader";








function MyBlogs() {
    const [perPage, setPerPage] = useState(15)
    const [activePage, setPage] = useState(1)
      const [postId, setPostId] = useState("");
        const queryClient = useQueryClient();


      
  const fetchBlogs = () => {
    return axios.get(`/blogs?page=${activePage}&perPage=${perPage}`)
  }

  const { isLoading: loadingBlogs, data: blogsData, refetch, isRefetching:refetchingBlogs } = useQuery(
    ['blogs', activePage],
    fetchBlogs,
    {
      refetchOnWindowFocus: true,
      keepPreviousData: true,
    },
  )

  const totalPages = Math.ceil(blogsData?.data?.count / perPage);

    // pagination refetch
  useEffect(() => {
    refetch()
  }, [activePage, perPage])
  //end of fetching products------------------
  // delete product
  const deletePost = () => {
    return axios.delete(`/blogs/${postId}`);
  };
  const { isLoading: isDeleting, mutate: deletePostMutate } = useMutation(
    deletePost,
    {
      onSuccess: (response) => {
        const text = response?.data.message;
        toast.success(text);
        queryClient.invalidateQueries( ['blogs', activePage]);

        refetch();
      },
      onError: (err) => {
        const text = err?.response.data.message || "Something went wrong!!";
        toast.error(text);
      },
    }
  );
  const deletePostById = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className=" shadow-xl p-[30px] flex flex-col gap-4">
            <h1 className="font-bold text-xl">Delete Post!</h1>
            <p className="pb-1">Are you sure you want to delete this post?</p>
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
                  deletePostMutate();
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
  
  return (
    <div className='' >
         <div className=" px-6 py-4  ">
          <h1 className="text-lg font-bold my-3">Blogs</h1>

          <div className=' my-3 '>
             <Pagination value={activePage}  onChange={setPage} color="yellow" defaultValue={1}  total={totalPages} className="text-light py-1 bg-gray-600 px-2 rounded-md w-[300px]"                   
            />
          </div>

        <div className=" flex flex-col md:grid md:grid-cols-4 gap-4 min-h-[400px]">
          {
             loadingBlogs? 
                <div className="flex justify-center  gap-3 items-center">
                  <h1>Loading</h1>
                 <p colSpan={10} className="text-center pt-2"> <PulseLoader color="#ffd700" size={10} /></p>
                </div>:
              
              blogsData?.data?.message ?              <tr>
                  <td colSpan={7} className="text-gray-800 text-center py-3">
                    {blogsData?.data?.message}
                  </td>
                </tr>
               : 
           blogsData?.data?.blogs?.map((blog,index)=>{
            return(
                   <Card key={index} shadow="sm" padding="lg" radius="md"  className="bg-dark border border-secondary flex flex-col gap-2">
              <Card.Section>
                <img
                  src={`${blog?.img}`}                  
                  alt="Norway"
                  className='h-[150px] w-full'
                  loading='lazy'
                />
              </Card.Section>
              

              <Text size="sm" color="#ffd700">
                {blog?.title}
              </Text>
              <Text size="sm" color="dimmed">
                {blog?.summary?.substr(0,100)} . . .
              </Text>
              {/* <div className="content" dangerouslySetInnerHTML={{__html:blog.content}} /> */}
              <div className='flex justify-between my-2'>

           <Link to={`/dashboard/edit/${blog?.slug}`}>
            <div className='flex  items-center gap-2 cursor-pointer  '>
                    <h1 className='text-primary '>Edit</h1>
                  <MdEdit color='#ffd700' size={16} />
            </div>
           </Link>
           <div className='flex  items-center gap-2 cursor-pointer  '
           disabled={isDeleting}
                          onClick={() => {
                            setPostId(blog?._id);
                            deletePostById();
                          }}
           >
                    <h1 className='text-[red] '>Delete</h1>
                  <MdDelete color='red' size={16} />
            </div>
           
              </div>


           </Card>
            )
           })

          }
         
          

        </div>
       
        </div> 


    </div>
  )
}

export default MyBlogs
