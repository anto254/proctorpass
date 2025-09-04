import React, { useState, useEffect } from "react";
import { FaBars, FaUserAlt, FaCartArrowDown, FaQuestionCircle } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineClose, AiOutlineMessage} from "react-icons/ai";
import {MdOutlinePostAdd,MdReviews} from 'react-icons/md'
import {AiFillStar,} from 'react-icons/ai';
import { BiSupport, BiMessageRoundedDots } from 'react-icons/bi';
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Indicator } from "@mantine/core";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import playNotificationSound from '../../components/NotificationSound';


function Dashboard() {
  const email = localStorage.getItem('email');
  const {auth} = useAuth();
  const axios = useAxiosPrivate();
  // get unread messages
  const fetchSupportCount = () => {
    return axios.get(`/chat/unread/count`);
  };

  const { isLoading: loadingSupports, data: supportData } = useQuery(
    [`supportcount-`],
    fetchSupportCount,
    {
      refetchOnWindowFocus: true,
      keepPreviousData: true,
      staleTime: 5000, // data can remain stale for 5 seconds
      refetchInterval: 5000 // refetch every 5 seconds
    }
  );

  useEffect(() => {

    if (supportData?.data?.totalAdminUnread > 0) {
      playNotificationSound(); // Play sound on successful fetch
      
    }
  

  }, [supportData?.data?.totalAdminUnread])

  const [isOpen, setIsOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "add-blog",
      name: "Add Blog",
      icon: <MdOutlinePostAdd size={23}/>,
    },
   
    {
      path: "add-review",
      name: "Add Review",
      icon: <MdReviews size={20}/>,
    },
    {
      path: "contacts",
      name: "Contacts",
      icon: <AiOutlineMessage size={20}/>,
    },{
      path: "my-blogs",
      name: "My Blogs",
      icon: <MdOutlinePostAdd size={20}/>,
    },{
      path: "my-reviews",
      name: "Reviews",
      icon: <AiFillStar size={20}/>,
    }, {
      path: "chats",
      name: "Messages",
      icon: <BiMessageRoundedDots size={20} />,
    },
   
  ];

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const sizeOfTheWindow = windowSize.innerWidth;

  if (sizeOfTheWindow < 900 && isOpen) {
    setIsOpen(false);
  }

  return (
    <div className="">
      {/* navbar */}
      <div className=" bg-secondary text-primary p-2 md:p-5 flex flex-col md:flex-row justify-between fixed top-0 left-0 right-0 ">
        <div className="flex justify-between py-2 px-2 items-center">
          <h1 className="text-2xl">ProctorPass</h1>
          <div className="md:hidden">
            {
              mobileMenu ? 
                <div onClick={(e) => setMobileMenu(!mobileMenu)}>
                  <AiOutlineClose size={22}/>

                </div>:
                <div onClick={(e) => setMobileMenu(!mobileMenu)}>
                  <FaBars size={22} />

                  
                </div>
              
            }
          </div>
       
          
        </div>
          <hr className="w-full border-1 mb-4  border-primary md:hidden" />
        <div className="flex gap-2 justify-end">
         
          <div className=" pr-10 flex gap-3 hover:cursor-pointer">
            <div className="pr-4 pt-[1px] " title="Support">
              <Link to={"/dashboard/chats"}>
                {supportData?.data?.totalAdminUnread > 0 ? (
                  <Indicator
                    inline
                    label={supportData?.data?.totalAdminUnread}
                    size={16}
                  >
                    <BiSupport size={23} />
                  </Indicator>
                ) : (
                  <BiSupport size={23} />
                )}
              </Link>
            </div>

            <p className="hidden sm:flex">{auth?.userName}</p>
          </div>
        </div>
      </div>

      {/* main content*/}
      <div className="flex h-[100vh]  pt-[150px] md:pt-[85px] overflow-hidden">
        <div
          style={{ width: isOpen ? "260px" : "50px" }}
          className="hidden md:flex flex-col bg-secondary  h-[screen] overflow-y-auto w-[260px] ease-in-0ut duration-500 "
        >
          <div className="flex items-center align-middle py-[20px] pl-[15px] ">
           
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="flex text-[25px]  ml-[50px] "
            >
              {
                isOpen ? < AiOutlineClose onClick={toggle} color='#fff' /> : <FaBars onClick={toggle} />
            }
              
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex  py-[10px] px-[15px] gap-[15px]  border-b border-b-black bottom-2 ease-in-out duration-500  hover:bg-[#1a1a1a] hover:text-gray-400 hover:ease-in-out hover:duration-500 outline-none "
            >
              <div className="text-[23px]  text-light">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="text-sm"
              >
                {item.name}
              </div>
            </NavLink>
          ))}




        </div>
             {/* mobile sidebar */}
        <div
         className={
          mobileMenu
            ? 'absolute top-[108px] ease-in-out duration-500 h-screen text-light z-50 flex flex-col bg-secondary w-[100%] py-6 md:hidden'
            : ' absolute left-[-100%] '
        }
        >
          {menuItem.map((item, index) => (
            <NavLink
              onClick={() => setMobileMenu(!mobileMenu)}
              to={item.path}
              key={index}
              className="flex  py-[10px] px-[15px] gap-[15px]  border-b border-b-black bottom-2 ease-in-out duration-500  hover:bg-[#1a1a1a] hover:ease-in-out hover:duration-500 "
            >
              <div className="text-[px]  text-primary">{item.icon}</div>
              <div
                className="text-sm text-light"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main className="w-full bg-dark min-h-[100vh] my-0 px-0 md:px-0 overflow-y-scroll pb-[100px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
