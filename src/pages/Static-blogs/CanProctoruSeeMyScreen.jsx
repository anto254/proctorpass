import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { Card, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { isError, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "../../api/axios";
import PulseLoader from "react-spinners/PulseLoader";
import { Helmet } from "react-helmet-async";
import { Link as LinkS } from "react-scroll";
import article3 from "../../assets/graphics/article3.jpg";
import CtaBanner from '../../components/CtaBanner'


function CanProctoruSeeMyScreen() {
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
            behavior: "smooth",
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>{"Can ProctorU See My Screen?"}</title>
                <meta
                    name="description"
                    content="As an integral part of online proctoring for exams, ProctorU requires screen sharing to be enabled. This allows them to monitor the test-taker's activities throughout the duration of the exam. Consequently, the proctors are able to see your screen and ensure the integrity of the exam process."
                />
                <meta name="keywords" content={"Can ProctorU See My Screen?"} />
                <link
                    rel="canonical"
                    href={`https://zeropreps.com/blog/${"can-proctoru-see-my-screen"}`}
                />
            </Helmet>

            <NavBar />
            {/* Main content area  */}
            <div className="pt-[90px]  px-2 py-4 md:px-[100px]  flex flex-col md:flex-row justify-between gap-12">
                {/* main */}
                <main className="basis-9/12 overflow-y-auto ">
                    <div className="bg-secondary px-2 min-h-[600px]  ">
                        <div className="">
                            <img
                                src={article3}
                                alt={
                                    "can-proctoru-see-my-screen"
                                }
                                className=" w-full "
                            />
                        </div>
                        <div className="my-4 ">
                            <h1 className="font-semibold text-4xl ">
                                Can ProctorU See My Screen?
                            </h1>
                            <div className="text-gray-400 leading-[1.75] py-3">
                                <div>
                                    <p>
                                        Yes, ProctorU has the capability to see your screen. One of
                                        the technologies that ProctorU utilizes is screen sharing.
                                        This feature enables the proctors to actively monitor the
                                        test-taker's screen and prevent cheating attempts, such as
                                        opening new tabs for search engines or accessing test bank
                                        URLs. Furthermore, it aids in preventing test-takers from
                                        copying the exam content, as the proctors can track the
                                        test-taker's screen activities throughout the duration of
                                        the exam.
                                    </p>
                                    <br />
                                    <CtaBanner />
                                    <br />
                                    <p>
                                        Screen sharing is an integral part of online proctored
                                        testing. It is understandable that many people might feel
                                        uneasy about potentially sharing sensitive information,
                                        considering that personal computers often store private data
                                        such as passwords, banking information, or personal images,
                                        many of which may be located on the desktop. If you have
                                        concerns about the proctor potentially viewing your screen
                                        activity, it is important to acknowledge this reality.
                                        However, you also have the option to <a href="https://zeropreps.com/blog/proctoru-privacy-concerns-and-what-you-can-do-to-mitigate-them" target= "_blank" className="text-blue-500"> seek alternatives that
                                        
                                            can help address these privacy concerns.
                                        </a>
                                    </p>

                                    <br />
                                </div>

                                {/* subTitles */}

                                <div className="bg-[#120f37] my-4 pb-2">
                                    <h1 className="font-bold text-center py-2">
                                        In this article [
                                        <span
                                            className="text-blue-500 cursor-pointer"
                                            onClick={() => {
                                                setopenLinks(!openLinks);
                                            }}
                                        >
                                            {openLinks ? "Hide" : "Show"}
                                        </span>
                                        ]
                                    </h1>
                                    {/* links */}
                                    <div
                                        className={`flex flex-col  pl-4 ${!openLinks && "hidden"}`}
                                    >
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU record your screen?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU record your screen?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU record your screen?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Why can't I share my screen on ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Why can't I share my screen on ProctorU?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Why can't I share my screen on ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="How much can ProctorU proctor see?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#How much can ProctorU proctor see?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                How much can ProctorU proctor see?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can ProctorU see your hands?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can ProctorU see your hands?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can ProctorU see your hands?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU control your computer?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU control your computer?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU control your computer?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="What settings does ProctorU change?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#What settings does ProctorU change?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                What settings does ProctorU change?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU lock your computer?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU lock your computer?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU lock your computer?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU have access to my personal files or documents on my computer?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU have access to my personal files or documents on my computer?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU have access to my personal files or
                                                documents on my computer?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can I take a proctored exam without a camera?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can I take a proctored exam without a camera?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can I take a proctored exam without a camera?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Why does ProctorU need a webcam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Why does ProctorU need a webcam?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Why does ProctorU need a webcam?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can I use an external camera on proctoru? Or, Does ProctorU require me to use a specific type of webcam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can I use an external camera on proctoru? Or, Does ProctorU require me to use a specific type of webcam?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can I use an external camera on proctoru? Or, Does
                                                ProctorU require me to use a specific type of webcam?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can ProctorU see you through the webcam? Or, does ProctorU watch you the whole time?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can ProctorU see you through the webcam? Or, does ProctorU watch you the whole time?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can ProctorU see you through the webcam? Or, does
                                                ProctorU watch you the whole time?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="What should I wear for a proctored exam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#What should I wear for a proctored exam?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                What should I wear for a proctored exam?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can you wear earplugs or use AirPods during ProctorU exams?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can you wear earplugs or use AirPods during ProctorU exams?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can you wear earplugs or use AirPods during ProctorU
                                                exams?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU record sessions?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU record sessions?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU record sessions?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU keep the recordings of sessions after the completion of the exam or are they deleted as part of their data retention policy?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU keep the recordings of sessions after the completion of the exam or are they deleted as part of their data retention policy?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU keep the recordings of sessions after the
                                                completion of the exam or are they deleted as part of
                                                their data retention policy?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU access my browser history or bookmarks?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU access my browser history or bookmarks?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU access my browser history or bookmarks?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU record your audio?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU record your audio?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU record your audio?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can I take my ProctorU exam in a library?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can I take my ProctorU exam in a library?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can I take my ProctorU exam in a library?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to=""
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            ></a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="How late can you be for a ProctorU session?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#How late can you be for a ProctorU session?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                How late can you be for a ProctorU session?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="How early can you log onto ProctorU for tests?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#How early can you log onto ProctorU for tests?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                How early can you log onto ProctorU for tests?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="What happens if you disconnect from ProctorU during a test? Or, What happens if my Wi-Fi or internet connection goes down during a ProctorU session?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#What happens if you disconnect from ProctorU during a test? Or, What happens if my Wi-Fi or internet connection goes down during a ProctorU session?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                What happens if you disconnect from ProctorU during a
                                                test? Or, What happens if my Wi-Fi or internet
                                                connection goes down during a ProctorU session?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Is ProctorU always on?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Is ProctorU always on?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Is ProctorU always on?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can I take a ProctorU test on my bed?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can I take a ProctorU test on my bed?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can I take a ProctorU test on my bed?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can I drink water during a proctored exam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can I drink water during a proctored exam?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can I drink water during a proctored exam?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can you have snacks during ProctorU exams?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can you have snacks during ProctorU exams?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can you have snacks during ProctorU exams?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="How does ProctorU work for drawing problems?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#How does ProctorU work for drawing problems?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                How does ProctorU work for drawing problems?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Why do ProctorU tests cost different amounts?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Why do ProctorU tests cost different amounts?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Why do ProctorU tests cost different amounts?
                                            </a>
                                        </LinkS>
                                    </div>
                                </div>
                                <br />

                                {/* blog content here */}
                                <div className="flex flex-col gap-3 ">
                                    <br />
                                    <h1
                                        id="Does ProctorU record your screen?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Does ProctorU record your screen?
                                    </h1>
                                    <p>
                                        Yes, ProctorU does record your computer screen.
                                        Understandably, this may evoke concerns about privacy, as
                                        the idea of someone remotely observing your answers during
                                        the exam can feel unsettling. However, the screen recording
                                        is an integral aspect of ProctorU's screen sharing policy,
                                        which serves several purposes. By recording your screen,
                                        ProctorU can monitor and document your on-screen activity
                                        throughout the exam, ensuring compliance with the test
                                        guidelines and maintaining the integrity of the assessment
                                        process. The recorded session provides a comprehensive
                                        record that can be reviewed by authorized personnel for
                                        assessment and verification purposes if needed.
                                    </p>

                                    <br />
                                    <h1
                                        id="Why can't I share my screen on ProctorU?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Why can't I share my screen on ProctorU?
                                    </h1>

                                    <p>
                                        ProctorU relies on screen sharing as part of their
                                        monitoring process to ensure exam integrity. However, some
                                        test-takers may encounter challenges when attempting to set
                                        up screen sharing, which can lead to the need for ProctorU
                                        to transfer them from one proctor to another in an effort to
                                        find a suitable solution.
                                    </p>
                                    <br />

                                    <p>
                                        There are various reasons why sharing screens on ProctorU
                                        may encounter difficulties. It could be due to technical
                                        issues such as incompatible software, internet connectivity
                                        problems, or incorrect settings on the test-taker's device.
                                        In such cases, ProctorU aims to provide assistance and
                                        alternative options to facilitate a smooth testing
                                        experience.
                                    </p>
                                    <br />
                                    <p>
                                        If a test-taker encounters issues with screen sharing,
                                        ProctorU's support team typically works to troubleshoot the
                                        problem and guide them through potential solutions. Before
                                        the test begins, it is advisable to navigate to your
                                        computer's system preferences, then go to 'Security &
                                        Privacy,' and further to 'Screen Recording.' This step is
                                        important in order to ensure that the necessary permissions
                                        are granted, allowing ProctorU or the exam proctor to record
                                        and monitor your screen during the test.
                                    </p>

                                    <br />
                                    <h1
                                        id="How much can ProctorU proctor see?"
                                        className="font-bold text-xl 
                  text-primary"
                                    >
                                        How much can ProctorU proctor see?
                                    </h1>
                                    <p>
                                        ProctorU exams and many other online proctored exams share a
                                        common challenge: they provide proctors with a limited
                                        viewing angle of approximately 70 degrees on an average
                                        computer. Consequently, the proctor can only see the
                                        test-taker's face and body, while anything behind the
                                        student's laptop remains invisible. In fact, if someone were
                                        to pass exam answers to the student from the left or right
                                        sides of the computer, they could do so with ease and
                                        without being noticed.
                                    </p>
                                    <br />
                                    <p>
                                        This challenge makes it easy for students to bring
                                        unauthorized materials or persons into an online proctored
                                        exam.{" "}
                                        <a href="https://zeropreps.com/blog/cheating-on-online-proctored-exams-vs-cheating-on-in-person-proctored-exams-which-one-is-a-no-brainer-for-students" target="_blank" className="text-blue-500">
                                            We have outlined why and how to cheat on an online
                                            proctored exam is easier than cheating on an in-person
                                            test.{" "}
                                        </a>{" "}
                                        Typically, once the proctor has finished checking the room
                                        during the 360-degree camera pan, the student can employ
                                        very simple methods to cheat on the test.
                                    </p>
                                    <br />

                                    <h1
                                        id="Can ProctorU see your hands?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Can ProctorU see your hands?
                                    </h1>
                                    <p>
                                        A ProctorU proctor can only see your hands if you happen to
                                        raise them or touch your chin. The webcam's camera angle
                                        cannot capture your hands if you place them on the same
                                        level as the laptop keyboard or your desk. The camera only
                                        captures a small section of the chest, upper arm region,
                                        shoulders, and the face.
                                    </p>
                                    <br />
                                    <h1
                                        id="Does ProctorU control your computer?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Does ProctorU control your computer?
                                    </h1>
                                    <p>
                                        No, ProctorU does not have direct control over your
                                        computer.In fact, proctors may use polite language and ask
                                        if they can temporarily use your mouse. However, ProctorU
                                        may use software that allows them to monitor your screen,
                                        webcam, and microphone during the proctored exam. This
                                        enables them to observe your activities and ensure exam
                                        integrity. They do not have the ability to access or control
                                        other applications or files on your computer without your
                                        permission.
                                    </p>

                                    <br />
                                    <h1
                                        id="What settings does ProctorU change?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        What settings does ProctorU change?
                                    </h1>
                                    <p>
                                        On a Windows PC, the proctor checks System Display settings,
                                        navigates to multiple displays, checks multiple display
                                        settings and clicks on ‘Detect’. Also under the settings the
                                        Gaming settings are checked where they navigate to Xbox Game
                                        Bar settings and ensure they turn off the ‘Open Xbox Game
                                        Bar using this button on a controller ’.
                                    </p>
                                    <br />
                                    <p>
                                        Next, to be checked on System Settings is the Remote Desktop
                                        Settings, where they ensure that remote access is disabled
                                        or restricted to prevent any unauthorized control or
                                        manipulation of the test-taker's computer
                                    </p>
                                    <br />
                                    <p>
                                        Finally they check the Clipboard settings and turn off the
                                        ‘Suggested Actions’ button. On macOS, they ‘force quit’
                                        running Applications like Safari or EasyMail with an
                                        exception of the Guardian Browser and the LMI (LogMeIn).
                                    </p>
                                    <br />
                                    <p>
                                        Still on macOS the proctor navigates to the home screen,
                                        then proceeds to access System Preferences and locates the
                                        Keyboard settings to verify and ensure that the necessary
                                        configurations, such as key repeat, input sources, or
                                        keyboard shortcuts, are appropriately set for the proctored
                                        exam.
                                    </p>

                                    <br />
                                    <h1
                                        id="Does ProctorU lock your computer?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Does ProctorU lock your computer?
                                    </h1>
                                    <p>
                                        ProctorU does not typically lock your computer during a
                                        proctored exam. However, they may require certain
                                        restrictions or settings to be in place to maintain the
                                        integrity of the exam. These can include disabling certain
                                        applications or features that may enable cheating or
                                        unauthorized access.
                                    </p>

                                    <br />
                                    <h1
                                        id="Does ProctorU have access to my personal files or documents on my computer?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Does ProctorU have access to my personal files or documents
                                        on my computer?
                                    </h1>
                                    <p>
                                        The simple question is, can ProctorU see my files? The
                                        answer to this is no. ProctorU does not allow any of its
                                        proctors to access students’ files, unless the students
                                        themselves explicitly allow them to do so. There have been
                                        significant concerns regarding the possibility of proctors
                                        accessing students' personal files. Many test-takers view
                                        ProctorU as a potential threat to their privacy and
                                        confidentiality. The fear stems from the idea that proctors,
                                        who have remote access to the test-taker's device, might be
                                        able to browse through personal documents, sensitive
                                        information, or private files. These concerns have raised
                                        questions about the extent of control and access that
                                        ProctorU has over a student's device during the exam. Under
                                        ProctorU's policy, the proctor is only allowed to check the
                                        settings that are relevant to the exam and not browse the
                                        students' files.
                                    </p>

                                    <br />
                                    <h1
                                        id="Can I take a proctored exam without a camera?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Can I take a proctored exam without a camera?
                                    </h1>
                                    <p>
                                        No, typically you cannot take a proctored exam without a
                                        camera.
                                    </p>

                                    <br />
                                    <h1
                                        id="Why does ProctorU need a webcam?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Why does ProctorU need a webcam?
                                    </h1>
                                    <p>
                                        Proctoring services, such as ProctorU, require the use of a
                                        camera to monitor the test-taker and ensure exam integrity.
                                        The camera is used to visually verify the identity of the
                                        test-taker, monitor their actions during the exam, and
                                        detect any suspicious behavior. Therefore, a camera is
                                        typically a mandatory requirement for proctored exams.
                                    </p>
                                    <br />
                                    <h1
                                        id="Can I use an external camera on proctoru? Or, Does ProctorU require me to use a specific type of webcam?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Can I use an external camera on proctoru? Or, Does ProctorU
                                        require me to use a specific type of webcam?
                                    </h1>
                                    <p>
                                        Yes, in most cases, you can use an external camera on
                                        ProctorU. ProctorU generally allows the use of external
                                        webcams as long as they meet the specified requirements. It
                                        is important to check the specific guidelines and
                                        requirements provided by ProctorU or the institution
                                        administering the exam to ensure that your external camera
                                        is compatible and meets the necessary specifications.
                                        ProctorU does not dictate the camera type or make so long as
                                        it meets these requirements.
                                    </p>

                                    <br />
                                    <h1
                                        id="Can ProctorU see you through the webcam? Or, does ProctorU watch you the whole time?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Can ProctorU see you through the webcam? Or, does ProctorU
                                        watch you the whole time?
                                    </h1>
                                    <p>
                                        Yes, ProctorU, through their proctors, will see you through
                                        the webcam in the entirety of the test. The webcam allows
                                        the proctor to visually monitor your actions and activities
                                        throughout the test to ensure exam integrity. It enables
                                        them to observe your behavior, confirm your identity, and
                                        detect any signs of potential cheating or unauthorized
                                        activities.
                                    </p>
                                    <br />
                                    <h1
                                        id="What should I wear for a proctored exam?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        What should I wear for a proctored exam?
                                    </h1>
                                    <p>
                                        When taking a proctored exam, it is recommended to dress
                                        appropriately and professionally as you would for an
                                        in-person exam or a formal setting. However, while many
                                        students do take these tests in casual attire, the proctors
                                        don't really focus on the clothing style as long as what you
                                        are wearing does not violate the established rules. For
                                        instance, wearing a cap during the test may not be
                                        explicitly listed as an unauthorized behavior by ProctorU,
                                        but it could potentially obstruct the proctor's view of your
                                        face by blocking the light. Additionally, the proctor might
                                        interpret this as an attempt to avoid having your eye
                                        movements tracked when you look away from the PC screen.
                                    </p>
                                    <br />
                                    <h1
                                        id="Can you wear earplugs or use AirPods during ProctorU exams?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Can you wear earplugs or use AirPods during ProctorU exams?
                                    </h1>
                                    <p>
                                        Students often devise various methods to cheat on exams,
                                        such as wearing hats or caps to conceal small earbuds like
                                        AirPods in their ears, enabling them to communicate during
                                        the tests. Proctors are vigilant in checking for such
                                        attempts, earplugs or AirPods are{" "}
                                        <a href="https://zeropreps.com/blog/proctoru-flag-types-and-categories-of-unpermitted-behaviors" target="_blank" className="text-blue">
                                            listed under unpermitted resources and their use during
                                            the exam can lead to the test being flagged.
                                        </a>
                                    </p>
                                    <br />
                                    <h1
                                        id="Does ProctorU record sessions?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Does ProctorU record sessions?
                                    </h1>
                                    <p>
                                        Yes, ProctorU records sessions of all tests taken on its
                                        platform. In simple terms, ProctorU does record you. The
                                        session is recorded in its entirety, which means your face,
                                        body, and background are recorded.{" "}
                                    </p>
                                    <br />
                                    <h1
                                        id="Does ProctorU keep the recordings of sessions after the completion of the exam or are they deleted as part of their data retention policy?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Does ProctorU keep the recordings of sessions after the
                                        completion of the exam or are they deleted as part of their
                                        data retention policy?
                                    </h1>
                                    <p>
                                        ProctorU stores the recorded sessions as files in a media
                                        folder. These files include pictures of the test-taker,
                                        screenshots, and screen recordings. The recorded sessions
                                        serve as evidence and provide necessary documentation for
                                        further investigation or review by authorized personnel.
                                        However, it is important to note that these files are not
                                        stored indefinitely. Depending on ProctorU's contract with
                                        the institution, they are typically deleted after a certain
                                        period, which is usually several weeks or months
                                    </p>
                                    <br />
                                    <h1
                                        id="Does ProctorU access my browser history or bookmarks?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Does ProctorU access my browser history or bookmarks?
                                    </h1>
                                    <p>
                                        No, as part of ProctorU's guidelines, proctors are not
                                        supposed to check your browsers or interfere with their
                                        history or bookmarked pages. Once the proctor has completed
                                        the check for adherence to the computer settings rules, they
                                        will enter the exam password on your behalf, without the
                                        need for any further browser interaction.
                                    </p>
                                    <br />
                                    <h1
                                        id="Does ProctorU record your audio?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Does ProctorU record your audio?
                                    </h1>
                                    <p>
                                        Yes, one of the technical requirements of ProctorU exams is
                                        having a functional microphone. As part of their monitoring
                                        process, they may record audio to detect any unauthorized
                                        communication or suspicious behavior. This helps ensure the
                                        integrity of the exam and adherence to the exam guidelines.
                                    </p>
                                    <br />
                                    <h1
                                        id="Can I take my ProctorU exam in a library?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Can I take my ProctorU exam in a library?
                                    </h1>
                                    <p>
                                        In most cases, you can take a ProctorU exam in a library,
                                        but you should however check the specific requirements and
                                        guidelines set by ProctorU and your institution. Libraries
                                        can provide a suitable environment for taking online exams,
                                        as they typically have quiet study areas and reliable
                                        internet access. However, there may be certain restrictions
                                        or guidelines related to using library resources or
                                        accessing specific websites during the exam. It is
                                        recommended to review the rules and policies of both
                                        ProctorU and the library to ensure compliance and a smooth
                                        exam experience.
                                    </p>
                                    <br />
                                    <h1
                                        id="How late can you be for a ProctorU session?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        How late can you be for a ProctorU session?
                                    </h1>
                                    <p>
                                        If you exceed the scheduled time by 60 minutes, ProctorU
                                        reservations will no longer be active in your account. To
                                        proceed, you will need to schedule a new exam. However, the
                                        specific rules and policies regarding the maximum allowable
                                        lateness for a ProctorU session can vary depending on the
                                        institution or organization that has engaged ProctorU's
                                        services. However, in general, it is recommended that you
                                        log in to your ProctorU session on time or slightly before
                                        the scheduled start time to avoid any issues.
                                    </p>
                                    <br />
                                    <h1
                                        id="How early can you log onto ProctorU for tests?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        How early can you log onto ProctorU for tests?
                                    </h1>
                                    <p>
                                        You can log onto ProctorU 2-3 minutes before your scheduled
                                        appointment. This will give you enough time to go through
                                        the start process, which includes downloading the ProctorU
                                        extension, accepting the exam guidelines and terms of
                                        service, and sharing your screen.
                                    </p>
                                    <br />
                                    <h1
                                        id="What happens if you disconnect from ProctorU during a test? Or, What happens if my Wi-Fi or internet connection goes down during a ProctorU session?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        What happens if you disconnect from ProctorU during a test?
                                        Or, What happens if my Wi-Fi or internet connection goes
                                        down during a ProctorU session?
                                    </h1>
                                    <p>
                                        Disconnecting during an active exam and failing to reconnect
                                        within five minutes will result in a test flag. To avoid
                                        such serious repercussions, you should ensure that you test
                                        your internet speeds before the exam begins. Additionally,
                                        make sure to have a stable power supply to minimize the risk
                                        of disconnection.
                                    </p>

                                    <br />
                                    <h1
                                        id="Is ProctorU always on?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Is ProctorU always on?
                                    </h1>
                                    <p>
                                        Yes, ProctorU services are available throughout the year, 24
                                        hours a day, seven days a week. However, ProctorU typically
                                        operates based on scheduled exam sessions and appointments.
                                        Test-takers need to book an appointment in advance for their
                                        exams or assessments. During the scheduled time slot,
                                        ProctorU proctors are available to monitor and facilitate
                                        the exam
                                    </p>
                                    <br />
                                    <h1
                                        id="Can I take a ProctorU test on my bed?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Can I take a ProctorU test on my bed?
                                    </h1>
                                    <p>
                                        You can take a ProctorU test on your bed, as long as the
                                        proctor is satisfied that there are no threats to the exam
                                        integrity. This is one of the advantages of online testing:
                                        you can utilize your personal space as you see fit, provided
                                        you follow all the guidelines. However, taking the test on
                                        your bed may appear clumsy and can potentially hinder your
                                        comfort and focus compared to taking the test on a neat
                                        desk, chair and table.
                                    </p>
                                    <br />
                                    <h1
                                        id="Can I drink water during a proctored exam?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Can I drink water during a proctored exam?
                                    </h1>
                                    <p>
                                        Generally, you should be allowed to drink water during a
                                        proctored exam. While policies may vary, it is typically
                                        permissible to have water with you during the exam to stay
                                        hydrated. It's advisable to have a clear water bottle
                                        without any labels or markings that could be mistaken for
                                        unauthorized materials. If there are any specific
                                        restrictions on beverages or food during the exam, they
                                        should be clearly outlined in the instructions provided to
                                        you.
                                    </p>
                                    <br />
                                    <h1
                                        id="Can you have snacks during ProctorU exams?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        Can you have snacks during ProctorU exams?
                                    </h1>
                                    <p>
                                        According to ProctorU's support documentation, you are
                                        generally not permitted to have food during your exam as it
                                        may cause unnecessary distractions and noise. Some exams or
                                        institutions may allow snacks as long as they do not create
                                        distractions or contain any unauthorized materials. If you
                                        are unsure about whether or not you can have food or drinks
                                        during your exam, you should reach out to your institution
                                        or testing organization.
                                    </p>
                                    <br />
                                    <h1
                                        id="How does ProctorU work for drawing problems?"
                                        className="font-bold text-xl text-primary"
                                    >
                                        How does ProctorU work for drawing problems?
                                    </h1>
                                    <p>
                                        When it comes to drawing or sketching during a proctored
                                        exam with ProctorU, the process may vary depending on the
                                        specific requirements and guidelines set by your institution
                                        or exam provider.
                                    </p>
                                    <br />
                                    <p>
                                        ProctorU allows you to draw during an online exam using the
                                        whiteboard feature in the ProctorU browser. You can access
                                        the whiteboard by clicking on the "Whiteboard" icon in the
                                        bottom right corner of the screen. The whiteboard is a blank
                                        canvas where you can draw freehand or use the provided
                                        shapes and tools.
                                    </p>
                                    <br />
                                    <p>
                                        When you are drawing on the whiteboard, the proctor will be
                                        able to see your screen in real time. This means that they
                                        will be able to see what you are drawing and how you are
                                        drawing it. If the proctor sees any suspicious activity,
                                        such as excessive erasing or drawing in unusual patterns,
                                        they may ask you to stop drawing or may disqualify you from
                                        the exam.
                                    </p>
                                    <br />
                                    <h1 id="Why do ProctorU tests cost different amounts?" className="font-bold text-xl text-primary">Why do ProctorU tests cost different amounts?</h1>
                                    <ol className="pl-12">
                                        <li>
                                             ● The length of the exam: ProctorU charges more for longer exams. This is because longer exams require more time and resources from the procto
                                        </li>
                                        <li>
                                             ● The level of authentication: ProctorU offers different levels of authentication, such as live proctoring and AI-powered monitoring. Live proctoring is more expensive than Auto launch monitoring because it requires a live proctor to monitor the exam session.
                                        </li>
                                        <li>
                                            ● The time of day: ProctorU charges more for exams that are taken during peak hours, such as early morning and evening hours. This is because there is more demand for proctoring services during these times.
                                        </li>
                                        <li>  ● The institution or organization: ProctorU may charge different amounts for exams depending on the institution or organization that is using the service. This is because institutions and organizations may have different budgets for proctoring services.</li>
                                    </ol>
                                    <br />

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
                                    <PulseLoader color="#ffd700" size={10} />
                                </p>
                            </div>
                        ) : blogsData?.data?.message ? (
                            <tr>
                                <td colSpan={7} className="text-gray-800 text-center py-3">
                                    {blogsData?.data?.message}
                                </td>
                            </tr>
                        ) : (
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
                                            <div
                                                onClick={scrollToTop}
                                                className="flex  items-center gap-2 cursor-pointer  "
                                            >
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

export default CanProctoruSeeMyScreen;
