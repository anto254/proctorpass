import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Card, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { isError, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import PulseLoader from "react-spinners/PulseLoader";
import { Helmet } from "react-helmet-async";
import { TypographyStylesProvider } from '@mantine/core';
import { BsChatDotsFill } from "react-icons/bs";
import useAuth from "../hooks/useAuth";
import CtaBanner from "../components/CtaBanner";

function BlogDetails() {
  const { auth, setAuth } = useAuth();

  const { slug } = useParams();
  //blog data fetching fuction-----------------
  function getBlog() {
    return axios.get(`/blogs/one/${slug}`);
  }
  // querying funtion
  const {
    data: blogData,
    isLoading: loadingBlog,
    isError: blogError,
    error
  } = useQuery([`blog-${slug}`], getBlog);

  // end of fetching blog
  //  fetchind side related blogs
  const [perPage, setPerPage] = useState(7);
  const [activePage, setPage] = useState(1);

  const fetchBlogs = () => {

    return axios.get(`/blogs?page=${activePage}&perPage=${perPage}`);
  };

  const {
    isLoading: loadingBlogs,
    data: blogsData,
    refetch,
    isRefetching: refetchingBlogs,
  } = useQuery(["blogs", activePage], fetchBlogs, {
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>{blogData?.data?.title}</title>
        <meta name="description" content={blogData?.data?.summary} />
        <meta name="keywords" content={blogData?.data?.title} />
        <link rel="canonical" href={`https://proctorubypass.com/blog/${blogData?.data?.slug}`} />
      </Helmet>

      <NavBar />
      {/* Main content area  */}
      <div className="pt-[90px]  px-2 py-4 md:px-[100px]  flex flex-col md:flex-row justify-between gap-12">
        {/* main */}
        <main className="basis-9/12 overflow-y-auto ">
          {loadingBlog ? (
            <div className="flex justify-center  gap-3 items-center">
              <h1>Loading</h1>
              <p colSpan={10} className="text-center pt-2">
                <PulseLoader color="#ffd700" size={10} />
              </p>
            </div>
          ) : blogData?.data?.message ? (
            <tr>
              <td colSpan={7} className="text-gray-800 text-center py-3">
                {blogData?.data?.message}
              </td>
            </tr>
          ) :
            error ? <div>
              <h1 className="text-red-600">Could not load blog try again!</h1>

            </div>
              :

              (
                <div className="bg-secondary px-1 ">
                  <div className="">
                    <img src={blogData?.data?.img} alt={blogData?.data?.title} className="w-full  " />
                  </div>
                  <div className="my-4 ">
                    <h1 className="font-semibold text-4xl ">
                      {blogData?.data?.title}{" "}
                    </h1>
                    <div>
                        <CtaBanner/>
                    </div>
                    <div className="text-gray-400 leading-[1.75] ">
                      <TypographyStylesProvider>

                        <div
                          className="text-white x "
                          dangerouslySetInnerHTML={{
                            __html: blogData?.data?.content,
                          }}
                        />
                      </TypographyStylesProvider>
                    </div>
                  </div>
                </div>
              )}
        </main>

        {/* side */}
        <aside className="basis-3/12 overflow-y-auto ">
          <h1>Related content</h1>
          <div className="my-3 flex flex-col ">
            {loadingBlogs ? (
              <div className="flex justify-center  gap-3 items-center">
                <h1>Loading</h1>
                <p colSpan={10} className="text-center pt-2">
                  {" "}
                  <PulseLoader color="#ffd700" size={10} />
                </p>
              </div>
            ) : blogsData?.data?.message ? (
              <tr>
                <td colSpan={7} className="text-gray-800 text-center py-3">
                  {blogsData?.data?.message}
                </td>
              </tr>
            ) :
              (
                blogsData?.data?.blogs?.map((blog, index) => {
                  if (blog?.slug === slug) {
                    return null;
                  }
                  return (
                    <Card
                      key={index}
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      className="bg-dark border border-secondary flex flex-col gap-2 my-2"
                    >
                      <Card.Section>
                        <img
                          src={`${blog?.img}`}
                          alt={blog?.title}
                          className="h-[150px] w-full"
                          loading="lazy"
                        />
                      </Card.Section>

                      <Text size="sm" color="#ffd700">
                        {blog?.title}
                      </Text>
                      <Text size="sm" color="dimmed">
                        {blog?.summary?.substr(0, 150)} . . .
                      </Text>
                      {/* <div className="content" dangerouslySetInnerHTML={{__html:blog.content}} /> */}

                      <Link to={`/blog/${blog?.slug}`}>
                        <div onClick={scrollToTop} className="flex  items-center gap-2 cursor-pointer  ">
                          <h1 className="text-primary ">Read more </h1>
                          <HiOutlineArrowSmRight color="#ffd700" size={20} />
                        </div>
                      </Link>
                    </Card>
                  );
                })
              )}
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}

export default BlogDetails;
