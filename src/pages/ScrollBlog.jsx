import React, { useState, } from "react";
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
import cardImage from '../assets/graphics/hero4.avif'
import { Link as LinkS } from "react-scroll";
import useAuth from '../hooks/useAuth'



function ScrollBlog() {
    const [openLinks, setopenLinks] = useState(true);
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
    } = useQuery(["blogs", activePage], fetchBlogs, {
        keepPreviousData: true,
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

const {setAuth,auth} = useAuth();


    return (
        <div>
            <Helmet>
                <title>{"blog title"}</title>
                <meta name="description" content="blog summary" />
                <meta name="keywords" content={"blog title here"} />
                <link rel="canonical" href={`https://proctorubypass.com/blog/${"will edit"}`} />
            </Helmet>

            <NavBar />
            {/* Main content area  */}
            <div className="pt-[90px]  px-2 py-4 md:px-[100px]  flex flex-col md:flex-row justify-between gap-12">
                {/* main */}
                <main className="basis-9/12 overflow-y-auto ">

                    <div className="bg-secondary px-2 min-h-[600px]  ">
                        <div className="">
                            <img src={cardImage} alt={"blog title"} className="h-[450px] w-full " />
                        </div>
                        <div className="my-4 ">
                            <h1 className="font-semibold text-4xl ">
                                Title of the blog here and more ok
                            </h1>
                            <div className="text-gray-400 leading-[1.75] ">
                                {/* subTitles */}
                                <div className="bg-[#120f37] my-4 pb-2">
                                    <h1 className="font-bold text-center py-2">In this article [ <span className="text-blue-500 cursor-pointer"
                                        onClick={() => { setopenLinks(!openLinks) }}

                                    >{openLinks ? "Hide" : "Show"}</span> ]</h1>
                                    {/* links */}
                                    <div className={`flex flex-col gap-2 pl-4 ${!openLinks && "hidden"}`}>
                                        <LinkS
                                            activeClass="active"
                                            to="topic1"
                                            spy={true}
                                            smooth={true}
                                            offset={-170}
                                        >

                                            <a className=" text-[#0c71c3] text-lg hover:underline "          >Link on to the first sub title in the article</a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="topic2"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#topic2" className=" text-[#0c71c3] text-lg hover:underline ">A list of headings  in your document will appear. Select the heading that </a>
                                        </LinkS>

                                        <LinkS
                                            activeClass="active"
                                            to="topic3"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#topic3" className=" text-[#0c71c3] text-lg hover:underline ">corresponds to the subtopic you are currently working on.corresponds to the subtopic you are currently working on.</a>
                                        </LinkS>



                                        <a href="#topi1" className=" text-[#0c71c3] text-lg hover:underline ">Click the "OK" button to create the hyperlink.</a>

                                        <a href="#topi1" className=" text-[#0c71c3] text-lg hover:underline ">Once you have formatted your subtopic as a heading, select the text again.</a>

                                        <a href="#topi1" className=" text-[#0c71c3] text-lg hover:underline ">Alternatively, you can also use the keyboard shortcut "Ctrl + K" to open the hyperlink </a>

                                        <a href="#topi1" className=" text-[#0c71c3] text-lg hover:underline ">When you click on a subtopic, it will take you directly to the corresponding section within the article.</a>
                                        <a href="#topi1" className=" text-[#0c71c3] text-lg hover:underline ">Click the "OK" button to create the hyperlink.</a>

                                        <a href="#topi1" className=" text-[#0c71c3] text-lg hover:underline ">Link on to the first sub title in the article</a>
                                    </div>


                                </div>

                                {/* blog content here */}
                                <div className="flex flex-col gap-3 ">
                                    <h1 className="font-bold text-lg text-gray-200" id="topic1">
                                        Open your Word document and navigate to the location where you want to insert a subtopic.
                                    </h1>
                                    <p>
                                        Yes, you can create clickable subtopics in a Word document that allow you to jump directly to specific sections within the document. This functionality is called "hyperlinks." Here's how you can achieve it:

                                    </p>
                                    <h1 className="font-bold text-lg text-gray-200" id="topic2">
                                        Type the name of the subtopic and format it as a heading. For example, you can use "Heading 1"

                                    </h1>
                                    <p>
                                        By following these steps, you can create clickable subtopics that allow you to navigate to specific sections within your Word document. When you click on a subtopic, it will take you directly to the corresponding section within the article.
                                    </p>
                                    <h1 className="font-bold text-lg text-gray-200" id="topic3">
                                        A list of headings (subtopics) in your document will appear. Select the heading that corresponds to the subtopic you are currently working on.
                                    </h1>
                                    <p id="topic1yh">
                                        Right-click on the selected text and choose "Hyperlink" from the context menu. Alternatively, you can also use the keyboard shortcut "Ctrl + K" to open the hyperlink dialog box.Right-click on the selected text and choose "Hyperlink" from the context menu. Alternatively, you can also use the keyboard shortcut "Ctrl + K" to open the hyperlink dialog box.

                                    </p>
                                    <h1 className="font-bold text-lg text-gray-200" id="">
                                        A list of headings (subtopics) in your document will appear. Select the heading that corresponds to the subtopic you are currently working on.
                                    </h1>
                                    <p id="topic1yh">
                                        Right-click on the selected text and choose "Hyperlink" from the context menu. Alternatively, you can also use the keyboard shortcut "Ctrl + K" to open the hyperlink dialog box.Right-click on the selected text and choose "Hyperlink" from the context menu. Alternatively, you can also use the keyboard shortcut "Ctrl + K" to open the hyperlink dialog box.

                                    </p>
                                    <h1 className="font-bold text-lg text-gray-200" id="">
                                        A list of headings (subtopics) in your document will appear. Select the heading that corresponds to the subtopic you are currently working on.
                                    </h1>
                                    <p id="topic1yh">
                                        Right-click on the selected text and choose "Hyperlink" from the context menu. Alternatively, you can also use the keyboard shortcut "Ctrl + K" to open the hyperlink dialog box.Right-click on the selected text and choose "Hyperlink" from the context menu. Alternatively, you can also use the keyboard shortcut "Ctrl + K" to open the hyperlink dialog box.

                                    </p>
                                    <h1 className="font-bold text-lg text-gray-200" id="">
                                        A list of headings (subtopics) in your document will appear. Select the heading that corresponds to the subtopic you are currently working on.
                                    </h1>
                                    <p id="topic1yh">
                                        Right-click on the selected text and choose "Hyperlink" from the context menu. Alternatively, you can also use the keyboard shortcut "Ctrl + K" to open the hyperlink dialog box.Right-click on the selected text and choose "Hyperlink" from the context menu. Alternatively, you can also use the keyboard shortcut "Ctrl + K" to open the hyperlink dialog box.

                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>

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

export default ScrollBlog;
