import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar'
import {BsTelegram,} from 'react-icons/bs';
import {HiOutlineArrowSmRight,} from 'react-icons/hi';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Pagination } from '@mantine/core';
import Footer from '../components/Footer';
import PulseLoader from 'react-spinners/PulseLoader'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from '../api/axios'
import { Helmet } from 'react-helmet-async';
import ScrollBlogCard from '../components/ScrollBlogCard';
import CanYouCheatProctoruCard from './static-blog-cards/CanYouCheatProctoruCard';
import HowToCheatProctoruCard from './static-blog-cards/HowToCheatProctoruCard';
import CanProctoruSeeMyScreenCard from './static-blog-cards/CanProctoruSeeMyScreenCard';
import CanProctorUDetectPhonesCard from './static-blog-cards/CanProctorUDetectPhonesCard';






function Blogs() {
    const [perPage, setPerPage] = useState(15)
    const [activePage, setPage] = useState(1)
      
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
  
  return (
    <div className='' >
      <Helmet>
        <title>ProctorPass | Blog </title>
        <meta name="description" content="find topics on, does proctoru detect hdmi splitter, unpermitted resources by proctoru, test helper in proctoru exam, proctoru bypass or bypass proctoru, cheat proctoru with chatgpt, cheat LSAT and more information on proctoru and online proctored exams." />
        <meta name="keywords" content="cheat proctorU, cheat GRE, cheat online proctored exam, cheat TOEFL, flaged by proctoru, " />
        <link rel="canonical" href={`https://proctorubypass.com/blogs`} />
      </Helmet>
        <NavBar/>
         <div className=" px-6 py-4 md:px-[100px] pt-[90px]">
          <h1 className="text-lg font-bold my-3">Blogs</h1>

          <div className=' my-3 '>
             <Pagination value={activePage}  onChange={setPage} color="yellow" defaultValue={1}  total={totalPages} className="text-light py-1 bg-gray-600 px-2 rounded-md w-[300px]"                   
            />
          </div>

        <div className=" flex flex-col md:grid md:grid-cols-4 gap-4 min-h-[400px]">
          {/* <CanYouCheatProctoruCard />
          <HowToCheatProctoruCard />
          <CanProctoruSeeMyScreenCard />
          <CanProctorUDetectPhonesCard /> */}

          {
             loadingBlogs? 
                <div className="flex justify-center  gap-3 items-center">
                  <h1>Loading</h1>
                 <p colSpan={10} className="text-center pt-2"> <PulseLoader color="#FF6500" size={10} /></p>
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
                    alt={blog?.title}
                  className='h-[150px] w-full'
                  loading='lazy'
                />
              </Card.Section>
              

              <Text size="sm" color="#FF6500">
                {blog?.title}
              </Text>
              <Text size="sm" color="dimmed">
                {blog?.summary?.substr(0,150)} . . .
              </Text>
              {/* <div className="content" dangerouslySetInnerHTML={{__html:blog.content}} /> */}

           <Link to={`/blog/${blog?.slug}`}>
            <div className='flex  items-center gap-2 cursor-pointer  '>
                    <h1 className='text-primary '>Read more </h1>
                  <HiOutlineArrowSmRight color='#FF6500' size={20} />
            </div>
           </Link>

           </Card>
            )
           })

          }

         
          

        </div>
        <div className=' my-3 '>
          <Pagination value={activePage} onChange={setPage} color="yellow" defaultValue={1} total={totalPages} className="text-light py-1 bg-gray-600 px-2 rounded-md w-[300px]"
          />
        </div>
       
        </div> 

        <Footer/>

    </div>
  )
}

export default Blogs
