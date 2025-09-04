import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Card, Image, Text } from "@mantine/core";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import heroV from "../assets/graphics/hero3.png";
import { Link as LinkS } from "react-scroll";
import { BiDownArrowAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";
import Typed from "react-typed";
import { Helmet } from "react-helmet-async";
import StarRating from "../components/StarRating";
import ScrollBlogCard from "../components/ScrollBlogCard";
import CanYouCheatProctoruCard from "./static-blog-cards/CanYouCheatProctoruCard";
import HowToCheatProctoruCard from "./static-blog-cards/HowToCheatProctoruCard";
import CanProctoruSeeMyScreen from "./Static-blogs/CanProctoruSeeMyScreen";
import CanProctoruSeeMyScreenCard from "./static-blog-cards/CanProctoruSeeMyScreenCard";
import CanProctorUDetectPhonesCard from "./static-blog-cards/CanProctorUDetectPhonesCard";

function HomePage() {
  // fetch blogs
  const [perPage, setPerPage] = useState(4);
  const [activePage, setPage] = useState(1);

  const fetchBlogs = () => {
    return axios.get(`/blogs?page=${activePage}&perPage=${1}`);
  };

  const {
    isLoading: loadingBlogs,
    data: blogsData,
    isRefetching: refetchingBlogs,
  } = useQuery(["blogs", activePage], fetchBlogs, {
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
  // ...........................
  // fetch reviews...............
  const fetchReviews = () => {
    return axios.get(`/reviews?page=${activePage}&perPage=${perPage}`);
  };

  const {
    isLoading: loadingReviews,
    data: reviewsData,
    isRefetching: refetchingReviews,
  } = useQuery(["reviews", activePage], fetchReviews, {
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
  // ..........................................
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
  // ........................................

  return (
    <div className="">
      <Helmet>
        <title>Proctorpass:Bypass ProctorU,Examity and the Rest.</title>
        <meta
          name="description"
          content="Ease exam stress with ProctorPass - your go-to support for ProctorU tests, ensuring a smoother and simpler experience for every student."
        />
        <meta
          name="keywords"
          content="cheat proctorU, cheat GRE, cheat online proctored exam, cheat TOEFL, flaged by proctoru, "
        />
        <link rel="canonical" href={`/`} />
      </Helmet>
      <NavBar />
      <div className="min-h-[400px]   ">
        {/* hero section */}
        <div className=" pt-[100px]   bg-heroBg2 bg-cover  bg-blend-overlay bg-[#171929]  h-[600px] gap-5 text-center leading-[1.75]">
          <div className=" md:flex justify-between items-center md:px-[200px] text-center ">
            <div className="flex flex-col text-center px-1 md:text-start basis-1/2  ">
              <h1 className="text-[30px] md:text-[40px]  ">
                Proctor<span className="text-light">Pass</span>
              </h1>
              <h1>
                Welcome to proctorpass, A Unique Solution for Proctoru Exams
              </h1>
              <p className="text-gray-200 text-lg ">
                Get latest proctoru exam bypass if you have limited time or
                unprepared for exams. Earn grades with the easiest possible ways
                from us.A practical solution to pass any exam.
              </p>
              <div className="py-5  flex justify-center md:justify-start items-center gap-6">
                <Link to={"/contact"}>
                  <button className="border border-primary flex items-center  text-white font-bold py-2 px-4 ">
                    Contact Us
                  </button>
                </Link>
              </div>
              <div className="pt-8 flex justify-center md:justify-end">
                <LinkS
                  activeClass="active"
                  to="blogs"
                  spy={true}
                  smooth={true}
                  offset={-65}
                >
                  <p className="mt-[10px] flex justify-start items-center gap-2 text-light animate__animated animate__bounce animate__infinite animate__slow hover:text-primary">
                    <span className="p-2 bg-primary rounded-full">
                      <BiDownArrowAlt color="#343a40" />
                    </span>{" "}
                    SCROLL DOWN
                  </p>
                </LinkS>
              </div>
            </div>
            <div className="hidden md:inline">
              <img src={heroV} alt="" className="h-[400px] c " />
            </div>
          </div>
        </div>
        {/* end hero */}

        <div className="flex px-6 py-4 md:px-[100px]justify-center items-center">
          <div className="w-full  p-8  rounded-lg shadow-sm">
            <h2 className="text-2xl italic font-bold text-center mb-4">
              ProctorPass
            </h2>
            <p className="text-lg text-center italic font-medium text-gray-400">
              <Typed
                strings={[
                  "Passing  Proctoru exams require no preparation whatsoever!!!",
                ]}
                typeSpeed={80}
                backSpeed={40}
                loop
                loopDelay={9000}
              />
            </p>
            <p className="text-gray-500 text-center ">
              Hire ProctorPass to guide you through your ProctorU exam.
            </p>
          </div>
        </div>

        {/* blogs */}
        <div className="bg-[#12123a] px-6 pt-6  md:px-[100px] mt-[60px]" id="blogs">
          <h1 className="text-lg font-bold my-3">Blogs</h1>

          <div className=" flex flex-col md:grid md:grid-cols-4 gap-4 ">
            {/* <CanYouCheatProctoruCard />
            <HowToCheatProctoruCard />
            <CanProctoruSeeMyScreenCard />
            <CanProctorUDetectPhonesCard /> */}
          </div>
          <div>
            <Link to="/blogs">
              <h1 className="my-6 text-center cursor-pointer hover:underline">
                See all blogs{" "}
              </h1>
            </Link>
          </div>
        </div>

        {/*Reviews  */}
        <div className="px-6 py-4 md:px-[100px] mt-[60px]">
          <h1 className="text-lg font-bold ">Reviews</h1>
          <div className=" flex flex-col md:grid md:grid-cols-4 gap-4 ">
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
                  {blogsData?.data?.message}
                </td>
              </tr>
            ) : (
              reviewsData?.data?.reviews?.map((review, index) => {
                return (
                  <div key={index} className=" my-3 p-2 bg-secondary ">
                    <div className="flex items-center justify-between text-gray-400 ">
                      <h1 className="font-bold text-lg p-2  ">
                        {review?.name}{" "}
                      </h1>
                      <p>{review?.time}</p>
                    </div>
                    <p className="p-2 text-gray-400 h-[250px] overflow-hidden ">
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
          <div>
            <Link to="/reviews">
              <h1 className="my-6 text-center cursor-pointer hover:underline">
                See all reviews{" "}
              </h1>
            </Link>
          </div>
        </div>
        {/* contact */}
        <div className="py-5" id="contact ">
          <h1 className="text-center font-bold my-2">Contact us </h1>

          <div className="flex flex-col justify-center items-center   ">
            <h1 className="text-center">or</h1>
            <div className="flex gap-2 justify-center items-center ">
              <span className="text-light">Email us at:</span>
              <a href="mailto:support@proctorubypass.com" target="_blank">
                support@proctorubypass.com
              </a>
            </div>

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
                    <p className="text-red-500 text-xs">title is required</p>
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

export default HomePage;
