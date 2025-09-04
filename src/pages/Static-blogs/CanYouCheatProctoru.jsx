import React, { useEffect, useState, } from "react";
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
import article1 from '../../assets/graphics/article1.jpg'
import CtaBanner from '../../components/CtaBanner'



function CanYouCheatProctoru() {
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div>
            <Helmet>
                <title>{"Can You Cheat on ProctorU? Understanding the ProctorU Experience: Your Questions Answered"}</title>
                <meta name="description" content="The world of proctoring can give rise to a multitude of questions, spanning from concerns about privacy and technical aspects to the overall examination experience. Addressing these inquiries with informative and comprehensive answers is crucial in providing students with a sense of clarity and assurance." />
                <meta name="keywords" content={"Can You Cheat on ProctorU? Understanding the ProctorU Experience: Your Questions Answered"} />
                <link rel="canonical" href={`https://zeropreps.com/blog/${"can-you-cheat-on-proctoru-understanding-the-proctoru-experience-your-questions-answered"}`} />
            </Helmet>

            <NavBar />
            {/* Main content area  */}
            <div className="pt-[90px]  px-2 py-4 md:px-[100px]  flex flex-col md:flex-row justify-between gap-12">
                {/* main */}
                <main className="basis-9/12 overflow-y-auto ">

                    <div className="bg-secondary px-2 min-h-[600px]  ">
                        <div className="">
                            <img src={article1} alt={"Can You Cheat on ProctorU? Understanding the ProctorU Experience: Your Questions Answered"} className=" w-full " />
                        </div>
                        <div className="my-4 ">
                            <h1 className="font-semibold text-4xl ">
                                Can You Cheat on ProctorU? Understanding the ProctorU Experience: Your Questions Answered
                            </h1>
                            <div className="text-gray-400 leading-[1.75] py-3">
                                <div>
                                    <p>
                                        As online schooling gains traction, online proctoring of exams proves to be a popular alternative to in-person testing that has been prevalent for quite some time. However, its popularity soared even further after the Covid-19 pandemic. Many questions arise among test takers who utilize ProctorU, one of the most widely used testing software platforms. Despite the growing number of institutions adopting ProctorU, test takers frequently seek answers to their queries. In this article, we aim to address these questions and provide insights into the exam-taking experience through ProctorU.
                                    </p>
                                    <br />
                                    <p>
                                        So, can you cheat on ProctorU? Yes, it’s pretty easy, we have covered this popular topic in an article on <a href="http://zeropreps.com/blog/how-to-cheat-on-proctoru" target="_blank"className="text-blue-500"> ‘how to cheat on ProctorU’</a> and outlined several ways a student can get away with this.Cheating on ProctorU exams is not only facilitated by the fixed camera angle challenge that proctors face after the exam starts but also by the fact that it can be difficult to monitor all aspects of a student's testing environment remotely.
                                    </p>
                                    <br />
                                    <CtaBanner/>
                                    <p>
                                        As we have discussed several times, simple and available tools like an <a href="https://zeropreps.com/blog/can-you-cheat-on-a-proctoru-exam-using-an-hdmi-splitter" target="_blank" className="text-blue-500">  HDMI splitter </a> and a smartphone are all a student needs to cheat on ProctorU.
                                        We have also tried to address as many questions as possible regarding the ProctorU platform.

                                    </p>
                                    <br />
                                    <div className=" flex gap-2">
                                        <h1 className="italic">More entries on FAQs about ProctorU</h1>
                                        <div className="flex flex-col text-blue-500 ">
                                            <Link to={"/blog/can-proctoru-detect-phones"} >Can ProctorU detect Phones?</Link>
                                            <Link to={"/blog/can-proctoru-see-my-screen"} >Can ProctorU see my screen?</Link>
                                        </div>
                                    </div>
                                    <br />


                                </div>



                                {/* subTitles */}

                                <div className="bg-[#120f37] my-4 pb-2">
                                    <h1 className="font-bold text-center py-2">In this article [ <span className="text-blue-500 cursor-pointer"
                                        onClick={() => { setopenLinks(!openLinks) }}

                                    >{openLinks ? "Hide" : "Show"}</span> ]</h1>
                                    {/* links */}
                                    <div className={`flex flex-col  pl-4 ${!openLinks && "hidden"}`}>

                                        <LinkS
                                            activeClass="active"
                                            to="What happens if you get caught cheating on ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#What happens if you get caught cheating on ProctorU?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                What happens if you get caught cheating on ProctorU?

                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="What's the best way to beat ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#What's the best way to beat ProctorU?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                What's the best way to beat ProctorU?

                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="What happens if someone walks in during a ProctorU exam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#What happens if someone walks in during a ProctorU exam?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                What happens if someone walks in during a ProctorU exam?

                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU use live proctors?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Does ProctorU use live proctors?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Does ProctorU use live proctors?

                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can ProctorU detect remote access? Or, can ProctorU detect two remote sessions?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Can ProctorU detect remote access? Or, can ProctorU detect two remote sessions?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Can ProctorU detect remote access? Or, can ProctorU detect two remote sessions?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU require a mirror?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Does ProctorU require a mirror?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Does ProctorU require a mirror?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can you go to the bathroom during a ProctorU exam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Can you go to the bathroom during a ProctorU exam?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Can you go to the bathroom during a ProctorU exam?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU review videos of proctored sessions?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Does ProctorU review videos of proctored sessions?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Does ProctorU review videos of proctored sessions?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can ProctorU see dual monitors?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Can ProctorU see dual monitors?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Can ProctorU see dual monitors?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU monitor after exams end?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Does ProctorU monitor after exams end?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Does ProctorU monitor after exams end?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Why does it cost money to take a test through ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Why does it cost money to take a test through ProctorU?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Why does it cost money to take a test through ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Why do I have to wait for the ProctorU timer?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Why do I have to wait for the ProctorU timer?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Why do I have to wait for the ProctorU timer?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Why do you have to schedule tests on ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Why do you have to schedule tests on ProctorU?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Why do you have to schedule tests on ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can I leave pictures on my room wall while using ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Can I leave pictures on my room wall while using ProctorU?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Can I leave pictures on my room wall while using ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can people on ProctorU hear you?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Can people on ProctorU hear you?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Can people on ProctorU hear you?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can ProctorU interrupt me while taking my exam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Can ProctorU interrupt me while taking my exam?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Can ProctorU interrupt me while taking my exam?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can I reschedule my exam date or time on ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Can I reschedule my exam date or time on ProctorU?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Can I reschedule my exam date or time on ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does it cost to reschedule ProctorU appointments?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Does it cost to reschedule ProctorU appointments?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Does it cost to reschedule ProctorU appointments?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="How many times can I reschedule a ProctorU exam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#How many times can I reschedule a ProctorU exam?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                How many times can I reschedule a ProctorU exam?

                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="What happens if you cancel a test on ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#What happens if you cancel a test on ProctorU?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                What happens if you cancel a test on ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Can your professor see how many times you rescheduled for an exam with ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Can your professor see how many times you rescheduled for an exam with ProctorU?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Can your professor see how many times you rescheduled for an exam with ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="How can I get a copy of my exam from ProctorU?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#How can I get a copy of my exam from ProctorU?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                How can I get a copy of my exam from ProctorU?
                                            </a>
                                        </LinkS>
                                        <LinkS
                                            activeClass="active"
                                            to="Does ProctorU continue to record you after you submit the exam?"
                                            spy={true}
                                            smooth={true}
                                            offset={-65}
                                        >

                                            <a href="#Does ProctorU continue to record you after you submit the exam?" className=" text-[#0c71c3] text-lg hover:underline ">
                                                Does ProctorU continue to record you after you submit the exam?
                                            </a>
                                        </LinkS>




                                    </div>


                                </div>
                                <br />


                                {/* blog content here */}
                                <div className="flex flex-col gap-3 ">

                                    <h1 id="What happens if you get caught cheating on ProctorU?" className="font-bold text-xl text-primary" >
                                        What happens if you get caught cheating on ProctorU?
                                    </h1>
                                    <br />
                                    <p>
                                        Before an incident is declared as cheating, a certain protocol has to be followed. The proctor warns the test-taker once they are suspected of engaging in any of the prohibited activities listed. You may be warned once or twice, but depending on the proctor's judgment, the issue may escalate to the next level. If you persist in doing what you have already been warned about, several things are likely to happen:
                                    </p>
                                    <br />
                                    <ol className="pl-12">
                                        <li>
                                            1.	The proctor may require you to use a different PC if the one you started with seems to compromise the integrity of the test.

                                        </li>
                                        <li>
                                            2.	Your test may be canceled, and you might be required to contact your institution to reschedule. Cancellations can present numerous challenges as test-takers may need to explain the situation to their professor or learning institution. Additionally, it may involve requesting a refund for the exam booking fee, which can sometimes be a tedious process.
                                        </li>
                                        <li>
                                            3.	The proctor may allow you to continue with your test but will flag it for further review.
                                        </li>
                                    </ol>
                                    <br />
                                    <p>
                                        When a test is flagged, the proctor saves the evidence in the form of a screenshot and a simple explanation of what transpired during the test. ProctorU also retains the exam recording for several weeks. The next stage involves the test owner reviewing the evidence so that they can ascertain whether cheating actually took place.

                                    </p>
                                    <br />
                                    <p>
                                        If there is sufficient evidence of cheating, the institution may take various disciplinary actions against you. The specific consequences can vary from one institution to another, and it becomes your responsibility to defend your case and seek the most lenient punishment.
                                    </p>
                                    <br />
                                    <p>
                                        However, if you <a href="https://zeropreps.com/blog/suppose-i-got-caught-cheating-on-proctoru-steps-i-would-take-to-salvage-my-academic-journey" _blank className="text-blue-500">got caught cheating on ProctorU</a>, that’s not the end of everything, we have outlined several steps you may take to rescue your academic journey.
                                    </p>
                                    <h1 id="What's the best way to beat ProctorU?" className="font-bold text-xl text-primary" >
                                        What's the best way to beat ProctorU?

                                    </h1>
                                    <p>
                                        Other than reading and preparing thoroughly for your test, the other way you can beat ProctorU is using tested methods that don’t put your academic life at any risk. ZeroPreps is one of the few platforms dedicated to providing reliable and secure solutions for ProctorU exams. We basically deal with all exams so long as they are Proctoru-proctored. Our solution may come at a higher cost, but it is worth every cent.
                                    </p>
                                    <br />
                                    <p>
                                        To excel in exams proctored by ProctorU, it is also important to understand how the platform works. Many test-takers find themselves in a tight spot because they don't even understand the platform's requirements.This may result in technical challenges that end up wasting your time or build exam anxiety. It is important to arm yourself with a functioning PC equipped with the necessary specifications and a stable internet connection to adequately prepare for the exam.
                                        Also familiarize yourself with your school’s requirements and prepare the right materials that are needed.

                                    </p>
                                    <br />
                                    <h1 id="What happens if someone walks in during a ProctorU exam?" className="font-bold text-xl text-primary" >
                                        What happens if someone walks in during a ProctorU exam?
                                    </h1>
                                    <br />
                                    <p>
                                        If someone enters the room while the exam is in progress, ProctorU takes a screenshot of the incident and flags the test. The incident is then saved along with the corresponding timestamps. The screenshot is required to capture the presence of the additional person in the room. These records are subsequently archived and await review by the test owner.
                                    </p>
                                    <br />
                                    <p>
                                        This situation can be concerning, as there may be instances where friends, relatives, or even roommates unintentionally enter the testing environment without the knowledge of the test-taker. To mitigate this, it is important to consider using a sign or a simple note on the wall or the door indicating that an exam is in progress. This can help create awareness and prevent such interruptions.
                                    </p>
                                    <br />
                                    <h1 id="Does ProctorU use live proctors?" className="font-bold text-xl text-primary" >
                                        Does ProctorU use live proctors?

                                    </h1>
                                    <br />
                                    <p>
                                        Yes, ProctorU Live+ requires the presence of a live proctor to actively monitor and invigilate the exam session in real-time, ensuring the integrity and security of the testing environment. ProctorU also has the auto-launch which automatically launches the proctoring software at the scheduled start time, providing a seamless and convenient experience for test-takers. With auto-launch, test-takers can focus on their exam without worrying about manually starting the proctoring software.
                                    </p>
                                    <br />
                                    <h1 id="Can ProctorU detect remote access? Or, can ProctorU detect two remote sessions?" className="font-bold text-xl text-primary" >
                                        Can ProctorU detect remote access? Or, can ProctorU detect two remote sessions?
                                    </h1>
                                    <br />
                                    <p>
                                        Yes, ProctorU can easily detect remote sessions or access. During the pre-proctoring period, ProctorU deploys a script designed to detect any form of virtual assistance. Some students may attempt to cheat on ProctorU by installing software that enables remote control from another computer. The script deployed by ProctorU can identify this virtual security threat. When detected, the proctor flags the test and advises the test-taker to end the current session. If available, the test-taker is recommended to reconnect using a different computer.
                                    </p>
                                    <br />
                                    <h1 id="Does ProctorU require a mirror?" className="font-bold text-xl text-primary" >
                                        Does ProctorU require a mirror?

                                    </h1>
                                    <br />
                                    <p>
                                        No, ProctorU does not necessarily require a mirror. However, if you are using a PC with an external camera, you might find it difficult to move it as it may affect its positioning. In scenarios where moving your PC around as you do the 360-degree camera pan takes too much effort, or if you have an external camera that needs to remain in position, you may require a mirror to help show the proctor your working area. A mirror can also be convenient even when you are using a portable computer, as it allows you to show the proctor the area behind the computer more easily.
                                    </p>
                                    <br />
                                    <h1 id="Can you go to the bathroom during a ProctorU exam?" className="font-bold text-xl text-primary" >
                                        Can you go to the bathroom during a ProctorU exam?
                                    </h1>
                                    <br />
                                    <p>
                                        Going to the bathroom during a ProctorU exam depends on the rules set for a specific exam. Unpermitted breaks for certain exams can result in a test flag. Before taking a break, be sure to check the guidelines that have been established. If breaks are prohibited for the exam you are taking, it is advisable to inform the proctor if you absolutely need a short break. Many longer exams allow for bathroom breaks, while shorter exams typically do not accommodate them. Bathroom breaks can sometimes pose a threat to exam integrity, as some test-takers may attempt to use such opportunities to seek answers or engage in cheating.
                                    </p>
                                    <br />
                                    <h1 id="Does ProctorU review videos of proctored sessions?" className="font-bold text-xl text-primary" >
                                        Does ProctorU review videos of proctored sessions?

                                    </h1>
                                    <p>
                                        No, ProctorU only retains custody of the recorded files for a specific period of time. The responsibility of reviewing the videos lies with the test owners, who utilize them to identify instances of academic dishonesty or other potential irregularities. ProctorU's role is to securely store the recordings and provide access to the relevant parties as needed. They do not actively review the videos themselves. Instead, the test owners take on the task of examining the recordings for evaluation and decision-making purposes.
                                    </p>
                                    <br />
                                    <h1 id="Can ProctorU see dual monitors?" className="font-bold text-xl text-primary" >
                                        Can ProctorU see dual monitors?

                                    </h1>
                                    <p>
                                        Yes, during the pre-exam period, as the proctor checks to ensure that your computer settings adhere to the set guidelines, they typically verify your display settings and ensure that only one monitor is active. For example, in Windows systems, they accomplish this by clicking on the 'Detect' button within the display settings. Dual monitors are considered unpermitted resources and their use may result in your test being flagged if detected.
                                    </p>
                                    <br />
                                    <h1 id="Does ProctorU monitor after exams end?" className="font-bold text-xl text-primary" >
                                        Does ProctorU monitor after exams end?
                                    </h1>
                                    <p>
                                        No, ProctorU does not typically monitor test-takers after exams have ended. Their primary role is to ensure the integrity of the exam during the proctoring period. Once the exam is completed, their monitoring and involvement generally comes to a stop..                                     </p>
                                        <br />
                                    <h1 id="Why does it cost money to take a test through ProctorU?" className="font-bold text-xl text-primary" >
                                        Why does it cost money to take a test through ProctorU?
                                    </h1>
                                    <p>
                                        For ProctorU to allow students to take exams remotely and ensure that the exam integrity is maintained, it needs to charge a fee. Below are some of the reasons why it costs money to take a test through ProctorU:
                                    </p>
                                    <br />

                                    <ul className=" pl-12 ">
                                        <li>
                                            ●	Infrastructure and Technology Costs: Providing a reliable and secure online proctoring platform requires significant investments in infrastructure, software development, and maintaining a robust technical infrastructure. These costs include developing and maintaining the necessary software, servers, and security measures to ensure the integrity of the testing environment.
                                        </li>
                                        <li>
                                            ●	Human Proctoring: ProctorU employs trained proctors who actively monitor test-takers during exams. These proctors ensure that the test environment remains secure and that no cheating takes place. Hiring and training proctors incur costs that are reflected in the fees charged to users.
                                        </li>
                                        <li>
                                            ●	Support and Customer Service: ProctorU provides customer support to test-takers and institutions before, during, and after the testing process. This includes assistance with technical issues, answering questions, and addressing any concerns that may arise. The fees charged contribute to maintaining a responsive and helpful support system.
                                        </li>
                                        <li>
                                            ●	Compliance and Security: Online proctoring services like ProctorU must adhere to strict data privacy and security standards to protect the integrity of the exams and the personal information of test-takers. Ensuring compliance with these standards requires ongoing investments in security measures, audits, and regulatory compliance, which are part of the overall costs covered by the fees.
                                        </li>
                                    </ul>
                                    <br />
                                    <h1 id="Why do I have to wait for the ProctorU timer?" className="font-bold text-xl text-primary" >
                                        Why do I have to wait for the ProctorU timer?
                                    </h1>
                                    <ul className="pl-12">
                                        <li>
                                            ●	The proctor is not available: If there are not enough proctors available, you may have to wait for a proctor to become available. This is especially likely during peak hours, such as early morning and evening hours.
                                        </li>
                                        <li>
                                            ●	The proctor is checking your identity: The proctor will need to check your identity before they can start your exam. This may involve taking a photo of you and your ID, or answering a series of challenge questions.
                                        </li>
                                        <li>
                                            ●	The proctor is checking your environment: The proctor will need to check your environment to make sure that it is secure and that you are not cheating. This may involve checking your room for unauthorized materials or devices, or making sure that you are not taking the exam in a public place.
                                        </li>
                                    </ul>
                                    <br />
                                    <h1 id="Why do you have to schedule tests on ProctorU?" className="font-bold text-xl text-primary" >
                                        Why do you have to schedule tests on ProctorU?
                                    </h1>
                                    <p>
                                       Scheduling exams on ProctorU is done because of the following reasons: 
                                    </p>
                                    <ul className="pl-12">
                                        <li>
                                            ●	To ensure that a proctor is available: ProctorU uses a pool of proctors to monitor exams. If you do not schedule your exam, there is a chance that there will not be a proctor available when you want to take the exam.
                                        </li>
                                        <li>
                                            ●	To meet the requirements of your institution or organization: Your institution or organization may require you to schedule your exams on ProctorU. This is because ProctorU offers a variety of features that can help to ensure the integrity of your exams.
                                        </li>
                                    </ul>
                                    <br />
                                    <h1 id="Can I leave pictures on my room wall while using ProctorU?" className="font-bold text-xl text-primary" >
                                        Can I leave pictures on my room wall while using ProctorU?
                                    </h1>
                                    <p>
                                        Yes, it is permissible to have pictures on the wall while taking a ProctorU exam, as long as they do not contain any cheating materials or information. However, it is important to ensure that the proctor can closely inspect the details on the pictures during the 360-degree camera pan.
                                        If you believe that certain pictures may be distracting during the exam, it is advisable to remove them temporarily and return them once the exam is completed.


                                    </p>
                                    <br />
                                    <h1 id="Can people on ProctorU hear you?" className="font-bold text-xl text-primary" >
                                        Can people on ProctorU hear you?
                                    </h1>
                                    <p>
                                        Yes, people on ProctorU can hear you during an exam. Having a functional microphone is one of the technical requirements of ProctorU. Proctors can listen to your audio feed to ensure exam integrity and detect any potential violations or unauthorized communication.
                                    </p>
                                    <h1 id="Can ProctorU interrupt me while taking my exam?" className="font-bold text-xl text-primary" >
                                        Can ProctorU interrupt me while taking my exam?
                                    </h1>
                                    <p>
                                        Yes, ProctorU can interrupt you during your exam if they suspect you of cheating or violating the exam rules. The proctor may chat with you to ask you questions or remind you of the exam guidelines.
                                        The proctor may also send a warning to you and if the issue persists they may be forced to cancel the entire exam.
                                    </p>
                                    <br />
                                    <h1 id="Can I reschedule my exam date or time on ProctorU?" className="font-bold text-xl text-primary" >
                                        Can I reschedule my exam date or time on ProctorU?
                                    </h1>
                                    <p>
                                        Yes, you can reschedule your exam date/time on ProctorU. You can do this by logging into your ProctorU account and clicking on the "Reschedule" button next to your reservation time. You can choose a new exam time or change the exam. Select the new time slot and then click "Schedule" to complete the changes.
                                    </p>
                                    <br />
                                    <p>
                                        If you wish to make changes less than 48 hours before your exam, you will need to contact ProctorU using LiveChat on their website
                                    </p>
                                    <h1 id="Does it cost to reschedule ProctorU appointments?" className="font-bold text-xl text-primary" >
                                        Does it cost to reschedule ProctorU appointments?
                                    </h1>
                                    
                                    <p>
                                        Yes, it costs to reschedule a ProctorU exam if you do it less than 48 hours before the scheduled time. The fee is $5.00 USD. You can reschedule your exam online or by contacting ProctorU customer support. The details on ProctorU's rescheduling fees:
                                        Less than 48 hours before the scheduled time: $5.00 USD
                                    </p>
                                    <br />
                                    <p>
                                        15-business days to 2-business days prior to the scheduled examination date: Rescheduling fee will apply. The test-taker cannot reschedule within 2-business days of the scheduled examination date. Up until 15-business days prior to the scheduled examination date: Test-takers can re-book at no additional charge.
                                    </p>
                                    <h1 id="How many times can I reschedule a ProctorU exam?" className="font-bold text-xl text-primary" >
                                        How many times can I reschedule a ProctorU exam?
                                    </h1>
                                    <p>
                                        The number of times you can reschedule a ProctorU exam can vary depending on the policies set by your institution or the exam provider. It is advisable to check the specific guidelines provided to you for the exam to determine the allowed number of rescheduling attempts.
                                        Some exams may allow for multiple rescheduling opportunities within a certain timeframe, while others may have more limited options or restrictions on rescheduling.
                                    </p>
                                    <h1 id="What happens if you cancel a test on ProctorU?" className="font-bold text-xl text-primary" >
                                        What happens if you cancel a test on ProctorU?
                                    </h1>
                                    <p>
                                        If you cancel your exam on ProctorU, you will not be able to take the exam at that time. You will need to reschedule your exam for a later date.
                                        If you cancel your exam more than 15 business days before the scheduled time, you will not be charged a fee. However, if you cancel your exam less than 15 business days before the scheduled time, you will be charged a $5.00 fee

                                    </p>
                                    <br />

                                    <h1 id="Can your professor see how many times you rescheduled for an exam with ProctorU?" className="font-bold text-xl text-primary" >
                                        Can your professor see how many times you rescheduled for an exam with ProctorU?
                                    </h1>
                                    <p>
                                        No, your professor cannot see how many times you have rescheduled your exam with ProctorU. ProctorU does not share this information with your professor or any other third party. The only way your professor would know is if you told them yourself.
                                        However, if you reschedule your exam too many times, ProctorU may deny you the chance  to reschedule any further. They may also put you on a list of students who are considered to be at risk of cheating, and your professor may be notified of this.
                                    </p>
                                    <br />
                                    <h1 id="How can I get a copy of my exam from ProctorU?" className="font-bold text-xl text-primary" >
                                        How can I get a copy of my exam from ProctorU?
                                    </h1>
                                    <p>
                                        You cannot get a copy of your exam from ProctorU. ProctorU does not provide copies of exams to students. The only way to get a copy of your exam is if your instructor or institution provides it to you.
                                    </p>
                                    <br />
                                    <h1 id="Does ProctorU continue to record you after you submit the exam?" className="font-bold text-xl text-primary" >
                                        Does ProctorU continue to record you after you submit the exam?
                                    </h1>
                                    <p>
                                        No, ProctorU generally stops recording and monitoring a test-taker's activity once the exam is submitted. However if the student submits the exam and fails to close the session, the section outside the exam window may still be stored as part of the larger file.
                                    </p>
                                    <br />
                                    <h1 id="" className="font-bold text-xl text-primary" >
                                        Conclusion
                                    </h1>
                                    <p>
                                        Numerous questions arise from test-takers regarding their experience with ProctorU. As the number of students opting for online exams increases, the inquiries and concerns surrounding ProctorU persist. To navigate the ProctorU process effectively, it is essential to grasp how it operates and diligently adhere to its guidelines. By familiarizing yourself with the workings of ProctorU and following its instructions, you can ensure a smoother and more successful exam experience.
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

export default CanYouCheatProctoru;
