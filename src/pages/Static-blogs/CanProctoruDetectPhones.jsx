import React, { useState } from "react";
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
import article4 from "../../assets/graphics/article4.jpg";
import { useEffect } from "react";
import CtaBanner from '../../components/CtaBanner'

function CanProctoruDetectPhones() {
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
                <title>{"Can ProctorU Detect Phones?"}</title>
                <meta
                    name="description"
                    content="With the increase in online learning and the prevalence of cheating nowadays, proctoring companies have come up with sophisticated ways to curb the vice. One of these companies, ProctorU, employs various methods to prevent cheating incidents. However, it still cannot detect the presence of cell phones in an exam room."
                />
                <meta name="keywords" content={""} />
                <link
                    rel="canonical"
                    href={`https://zeropreps.com/blog/${"can-proctoru-detect-phones"}`}
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
                                src={article4}
                                alt={"Can ProctorU Detect Phones?"}
                                className=" w-full "
                            />
                        </div>
                        <div className="my-4 ">
                            <h1 className="font-semibold text-4xl ">
                                Can ProctorU Detect Phones? Addressing More Questions About ProctorU.
                            </h1>
                            <div className="text-gray-400 leading-[1.75] py-3">
                                <div>
                                    <p>
                                        ProctorU has no mechanism to detect the presence of phones
                                        after the exam has commenced. The only measure the proctors
                                        take is to ask you to show them your phone and keep it away
                                        from your working area. The proctor will also ask you to
                                        show your room from all angles (360 degrees), so if you have
                                        an extra phone, it may be advisable to keep it in a place
                                        where they can see it when you are panning the camera.
                                    </p>
                                    <br />
                                    <p>
                                        Once the exam has started, the platform relies on its proctors and AI-based monitoring systems to supervise the test-takers and ensure exam integrity. Proctors may actively monitor the students' actions through webcam feeds, screen sharing, and audio detection, but their focus is primarily on observing the test-taker's immediate environment and activities on the computer being used for the exam.</p>
                                    <br />
                                    <CtaBanner />
                                    <br />
                                    <p>
                                        Cell phone use poses a great risk to online proctoring of
                                        exams, perhaps due to the fact that it allows for easy
                                        access to unauthorized information and communication during
                                        the exam. With the widespread availability of smartphones
                                        and their advanced capabilities, students can easily search
                                        for answers or communicate with others to gain an unfair
                                        advantage. Cell phones can be discreetly concealed or
                                        positioned out of sight, making it difficult for proctors to
                                        identify when students are using them.
                                    </p>
                                    <br />

                                    <p>
                                        In one of our articles, <a href="https://zeropreps.com/blog/how-to-cheat-on-proctoru" target="_blank" className="text-blue-500">‘how to cheat on ProctorU exams’</a> , we
                                        have discussed how students can exploit the use of cell
                                        phones and Artificial Intelligence language models like
                                        ChatGPT to cheat on exams. It has come to light that {" "} 
                                        <a href="https://www.dailymail.co.uk/sciencetech/article-11899475/Half-students-using-ChatGPT-cheat-rise-90.html" target="_blank" className="text-blue-500">

                                             a significant number of college students are already doing
                                            this. 
                                        </a>
                                        {" "} Proctoring companies must therefore strive to keep up with
                                        the pace of technological advancements. As things stand,
                                        advancements in technology continue to evolve rapidly,
                                        presenting new challenges in maintaining the integrity of
                                        the examination process.
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
                                            to="Can you use your phone to cheat on ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can you use your phone to cheat on ProctorU?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can you use your phone to cheat on ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can I sneak my phone onto ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can I sneak my phone onto ProctorU?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can I sneak my phone onto ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can ProctorU tell if you are using your phone on wifi?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can ProctorU tell if you are using your phone on wifi?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can ProctorU tell if you are using your phone on wifi?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU have access to other devices on the same wifi?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU have access to other devices on the same wifi?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU have access to other devices on the same
                                                wifi?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can ProctorU detect hdmi to tv?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can ProctorU detect hdmi to tv?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can ProctorU detect hdmi to tv?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can ProctorU detect screen mirroring?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can ProctorU detect screen mirroring?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can ProctorU detect screen mirroring?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can I use bluetooth keyboards with ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can I use bluetooth keyboards with ProctorU?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can I use bluetooth keyboards with ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can you see the ProctorU rules for your course exam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can you see the ProctorU rules for your course exam?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can you see the ProctorU rules for your course exam?
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
                                            to="Can you get a refund from ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can you get a refund from ProctorU?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can you get a refund from ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can you do a ProctorU exam in public?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can you do a ProctorU exam in public?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can you do a ProctorU exam in public?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can you have a pet with you during a ProctorU exam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can you have a pet with you during a ProctorU exam?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can you have a pet with you during a ProctorU exam?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can ProctorU run out of sessions?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can ProctorU run out of sessions?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can ProctorU run out of sessions?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can you listen to music during a ProctorU exam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can you listen to music during a ProctorU exam?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can you listen to music during a ProctorU exam?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can you take a ProctorU exam before the specified time?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can you take a ProctorU exam before the specified time?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can you take a ProctorU exam before the specified time?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can ProctorU see virtual machines?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can ProctorU see virtual machines?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can ProctorU see virtual machines?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="How can I verify if my ProctorU exam was submitted?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#How can I verify if my ProctorU exam was submitted?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                How can I verify if my ProctorU exam was submitted?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can you use any email for ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can you use any email for ProctorU?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can you use any email for ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can I take a ProctorU exam on a mobile hotspot?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can I take a ProctorU exam on a mobile hotspot?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can I take a ProctorU exam on a mobile hotspot?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU grade exams?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU grade exams?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU grade exams?
                                            </a>
                                        </LinkS>

                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU have facial recognition?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU have facial recognition?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU have facial recognition?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU check location?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Does ProctorU check location?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Does ProctorU check location?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can I take a test outside of the US on ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >
                                            <a
                                                href="#Can I take a test outside of the US on ProctorU?"
                                                className=" text-[#0c71c3] text-lg hover:underline "
                                            >
                                                Can I take a test outside of the US on ProctorU?
                                            </a>
                                        </LinkS>
                                    </div>
                                </div>
                                <br />

                                {/* blog content here */}
                                <div className="flex flex-col gap-3 ">
                                    <br />
                                    <h1 id="Can you use your phone to cheat on ProctorU?" className="font-bold text-xl text-primary">
                                        Can you use your phone to cheat on ProctorU?
                                    </h1>

                                    <p>Yes, it is possible to cheat using a phone. However, it is important to remember that during the pre-proctoring period, the proctor ensures that the test environment requirements are met. This includes verifying that the test-takers have a quiet and distraction-free room, with no access to external assistance or unauthorized materials like smartphones. The proctor instructs you to do a 360-degree camera pan, during which they will check the entire surrounding area.
                                        The proctor instructs you to put your phone away in a place where it is inaccessible and out of reach throughout the duration of the examination. </p>
                                    <br />
                                    <h1 id="Can I sneak my phone onto ProctorU?" className="font-bold text-xl text-primary">
                                        Can I sneak my phone onto ProctorU?
                                    </h1>
                                    <p>Despite these measures, it is quite easy for a test-taker to hide an extra phone where it remains undetected by the proctor. Technology has advanced and there are creative ways to conceal devices, such as using smaller phones or hiding them in inconspicuous  locations. Most proctors just keep track of one phone and may not be concerned about an extra phone that you may hide under the desk or in one of your pockets.</p>
                                    <br />
                                    <h1 id="Can ProctorU tell if you are using your phone on wifi?" className="font-bold text-xl text-primary">
                                        Can ProctorU tell if you are using your phone on wifi?
                                    </h1>
                                    <p>ProctorU's capabilities don't go beyond what they can see on your webcam or what is running on your computer. They primarily focus on monitoring your test-taking session and ensuring compliance with the exam guidelines. This means they may not have direct visibility into your phone activity on a separate WiFi network.</p><br />
                                    <h1 id="Does ProctorU have access to other devices on the same wifi?" className="font-bold text-xl text-primary">
                                        Does ProctorU have access to other devices on the same wifi?
                                    </h1><p>No, ProctorU does not have access to other devices on the same wifi. They only have access to the device that you are using to take the exam. This is because ProctorU uses a secure connection to your device, and they cannot see any other devices on your network</p><br />
                                    <h1 id="Can ProctorU detect hdmi to tv?" className="font-bold text-xl text-primary">
                                        Can ProctorU detect hdmi to tv?
                                    </h1><p>
                                        <a href="https://zeropreps.com/blog/can-you-cheat-on-a-proctoru-exam-using-an-hdmi-splitter" target="_blank" className="text-blue-500">Can ProctorU detect HDMI </a> to TV? Yes, ProctorU is capable of detecting a connection from a computer to a TV through an HDMI cable. This detection occurs during the pre-proctoring stages to prevent the usage of dual monitors. The proctor is able to accomplish this by scanning the test-taker's computer setup and identifying any external displays connected via HDMI. </p><br />
                                    <h1 id="Can ProctorU detect screen mirroring?" className="font-bold text-xl text-primary">
                                        Can ProctorU detect screen mirroring?
                                    </h1><p>Screen mirroring falls under display settings in most computer operating systems. While ProctorU might not have the ability to detect the use of screen mirroring, they can disable such functionality during the pre-proctoring period. </p><br />
                                    <h1 id="" className="font-bold text-xl text-primary">

                                    </h1><br />
                                    <h1 id="Can I use bluetooth keyboards with ProctorU?" className="font-bold text-xl text-primary">
                                        Can I use bluetooth keyboards with ProctorU?
                                    </h1><p>
                                        Yes, you can use bluetooth keyboards with ProctorU. ProctorU does not have any restrictions on the type of keyboard that you can use. However, it is important to note that your proctor may ask you to show them your keyboard before you start your exam. This is to ensure that there are no hidden cheat sheets, devices or cameras on your keyboard that could be used to cheat.</p><br />
                                    <h1 id="Can you see the ProctorU rules for your course exam?" className="font-bold text-xl text-primary">
                                        Can you see the ProctorU rules for your course exam?
                                    </h1>
                                    <p>Yes, you can see the ProctorU rules for your course exam. Your instructor or institution will typically provide you with a link to the ProctorU rules for your exam. You can also find the ProctorU rules for your exam on the ProctorU website</p>
                                    <br />
                                    <p>The ProctorU rules for your exam will typically include information like, allowed and prohibited resources and if the test has any accommodations or not.</p><br />
                                    <h1 id="Can you get a refund from ProctorU?" className="font-bold text-xl text-primary">
                                        Can you get a refund from ProctorU?
                                    </h1>
                                    <p>The refund policies for ProctorU may vary depending on the specific circumstances and the agreements between ProctorU, the institution or exam provider, and the individual who scheduled the exam.  </p>
                                    <br /><p>In some cases, ProctorU may offer refunds or credits if technical issues or other factors prevent the successful completion of an exam. However, there may be limitations or conditions associated with the refund process, such as specific timeframes or required documentation.</p><br />
                                    <h1 id="Can you do a ProctorU exam in public?" className="font-bold text-xl text-primary">
                                        Can you do a ProctorU exam in public?
                                    </h1>
                                    <p>No, ProctorU requires you to be in a silent and private environment when taking an exam. It is not permitted to do a ProctorU exam in a public setting due to the potential for distractions, unauthorized assistance, or compromised exam integrity. It is important to find a suitable location where you can maintain focus and ensure a secure testing environment.</p><br />
                                    <h1 id="Can you have a pet with you during a ProctorU exam?" className="font-bold text-xl text-primary">
                                        Can you have a pet with you during a ProctorU exam?
                                    </h1>
                                    <p>While some proctors may not necessarily have issues with you having a pet in your testing area, it is important to note that pets can potentially create distractions or disruptions during an exam. As a result, many institutions and exam providers may request that you maintain a pet-free environment during the test. This requirement is in place to ensure exam integrity and maintain a quiet and focused atmosphere.</p><br />
                                    <h1 id="Can ProctorU run out of sessions?" className="font-bold text-xl text-primary">
                                        Can ProctorU run out of sessions?
                                    </h1><p>
                                        Yes, ProctorU can run out of sessions during peak times, such as during the beginning and end of the school year. This is because ProctorU has a limited number of proctors available to invigilate exams. If you are unable to schedule a ProctorU session during your desired time, you may want to try scheduling your exam for a less popular time. You can also contact ProctorU support to see if they have any availability in the near future.</p><br />
                                    <h1 id="Can you listen to music during a ProctorU exam?" className="font-bold text-xl text-primary">
                                        Can you listen to music during a ProctorU exam?
                                    </h1>
                                    <p>No, you cannot listen to music during a ProctorU exam. This restriction is in place because it is necessary to maintain a quiet environment while taking the exam to ensure fairness and minimize distractions. Additionally, the use of earphones or AirPods is also not permitted. While some students may find music helpful for concentration, <a href="https://zeropreps.com/blog/adhd-and-proctoru-challenges-posed-by-online-proctored-test-to-individuals-with-adhd" target="_blank" className="text-blue-500" >especially if they have ADHD</a>  and require music that enhances focus, unfortunately, it is not allowed during the exam to maintain consistent testing conditions for all participants.</p><br />
                                    <h1 id="Can you take a ProctorU exam before the specified time?" className="font-bold text-xl text-primary">
                                        Can you take a ProctorU exam before the specified time?
                                    </h1>
                                    <p>No, you cannot take a ProctorU exam before the specified time. ProctorU exams are scheduled in advance so that proctors can be available to monitor the exams. If you try to start your exam before the scheduled time, you will not be able to access the exam. If you need to take your exam early, you should contact your instructor or the proctoring service to see if they can accommodate your request.</p><br />
                                    <h1 id="Can ProctorU see virtual machines?" className="font-bold text-xl text-primary">
                                        Can ProctorU see virtual machines?
                                    </h1>
                                    <p>Yes, ProctorU has the ability to detect the usage of virtual machines and remote-control software. In one of our blog posts, <a href="https://zeropreps.com/blog/proctoru-flag-types-and-categories-of-unpermitted-behaviors" target="_blank" className="text-blue-500">we have listed unpermitted virtual assistance as an incident type that can lead to flagging of the test.</a>  However, there are instances where virtualization, if implemented well, can pass the ProctorU test. </p>
                                    <br /><p>Detection of virtual machines happens in the beginning of the session when the proctor runs or deploys a script on the test-taker’s device which analyzes the system configuration and checks for virtualization software or other indicators commonly associated with virtual machines. If the threat is detected, the test-taker is advised to end the session and reconnect with a different computer. The incident is still recorded as a flag nevertheless.</p><br />
                                    <h1 id="How can I verify if my ProctorU exam was submitted?" className="font-bold text-xl text-primary">
                                        How can I verify if my ProctorU exam was submitted?
                                    </h1>
                                    <p>You can verify if your exam was submitted by simply logging into your account. In your portal, you can see the status, and if submitted successfully, you will receive a confirmation message or notification indicating that your exam has been successfully submitted and recorded.
                                        Alternatively, you can contact your instructor or institution to confirm whether the exam was recorded successfully. </p><br />
                                    <h1 id="Can you use any email for ProctorU?" className="font-bold text-xl text-primary">
                                        Can you use any email for ProctorU?
                                    </h1>
                                    <p>Yes, you can use any email to create a ProctorU account. ProctorU does not restrict users to a certain email type. However, 'edu' domain emails are commonly used by most test-takers. This is a personal decision, but for consistency and convenience, using an 'edu' email may align with your educational institution's email domain and help streamline the verification process. Ultimately, the choice of email domain is up to you and does not affect the functionality or access to ProctorU's services.</p><br />
                                    <h1 id="Can I take a ProctorU exam on a mobile hotspot?" className="font-bold text-xl text-primary">
                                        Can I take a ProctorU exam on a mobile hotspot?
                                    </h1>
                                    <p>Yes, mobile hotspots can work the same as regular wifi connections, however, it is important to do an internet speed test on ProctorU and ensure that you pass it so that you don’t face technical difficulties during the exam. </p>
                                    <br />
                                    <p>To pass the internet speed test on ProctorU, the minimum download speed is 1024 kbps while the minimum upload speed is also 1024 kb</p>
                                    <br />
                                    <p>It is also good to note that cellular internet may be interrupted if your phone receives normal calls while taking the exam which may lead to disconnection. For this reason, regular wifi connections may be the best to use while taking  an online proctored exam.</p>
                                    <br />
                                    <h1 id="Does ProctorU grade exams?" className="font-bold text-xl text-primary">
                                        Does ProctorU grade exams?
                                    </h1>
                                    <p>No, ProctorU does not grade exams. ProctorU is a remote proctoring service that provides video monitoring and invigilation of exams. They do not have the ability to grade exams, as this is the responsibility of the instructor or institution that is administering the exam</p><br />
                                    <h1 id="Does ProctorU have facial recognition?" className="font-bold text-xl text-primary">
                                        Does ProctorU have facial recognition?
                                    </h1><p>
                                        Yes, ProctorU uses facial recognition to authenticate test takers and to detect any unauthorized persons in the testing environment. When you first take a ProctorU exam, you will be asked to provide a photo ID and to take a selfie. These images will be used to create a facial recognition profile for you. During your exam, ProctorU will use this profile to compare your face to the face in your ID photo. If the two faces do not match, you will be flagged for further review.
                                        ProctorU also uses facial recognition to detect unauthorized persons in the testing environment. For example, if someone else enters your testing area during your exam, ProctorU will be able to detect this and flag the incident.</p><br />
                                    <h1 id="Does ProctorU check location?" className="font-bold text-xl text-primary">
                                        Does ProctorU check location?
                                    </h1>
                                    <p>Yes, ProctorU can check your location during an exam. This is done to ensure that you are taking the exam from a permitted location. ProctorU uses a variety of methods to check your location, including IP address tracking, GPS tracking, and webcam monitoring. If ProctorU determines that you are taking the exam from an unauthorized location, you may be disqualified from the exam.</p><br />
                                    <h1 id="Can I take a test outside of the US on ProctorU?" className="font-bold text-xl text-primary">
                                        Can I take a test outside of the US on ProctorU?
                                    </h1>
                                    <p>Yes, you can take a test outside of the US using ProctorU. ProctorU offers remote proctoring services that allow test-takers from various locations around the world to participate in online exams. As long as you have a reliable internet connection and meet the technical requirements specified by ProctorU, you should be able to take your test regardless of your geographical location.</p><br />

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

export default CanProctoruDetectPhones;
