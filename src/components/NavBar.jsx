import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "../assets/graphics/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { BsChatDotsFill } from "react-icons/bs";
import useAuth from "../hooks/useAuth";

function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 70 && !scrolled) {
        setScrolled(true);
      } else if (window.pageYOffset <= 70 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Blog",
      path: "/blogs",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Reviews",
      path: "/reviews",
    },
    {
      name: "FAQ",
      path: "/faq",
    },
  ];

  return (
    <div className={`fixed top-0 right-0 left-0  z-10 bg-opacity-70 `}>
      <div
        className={`flex justify-between md:justify-between md:gap-[90px] items-center px-1  md:px-[100px] py-3 ${
          scrolled ? "bg-[#000016] bg-opacity-80" : "bg-opacity-0"
        } `}
      >
        <Link to="/">
          <div className="font-bold text-xl flex  justify-center items-center gap-1 text-primary">
            {/* <img src={Logo} alt="logo" className="w-[50px] h-[50px] " /> */}
            <h1>Proctor<span className="text-light">Pass</span></h1>
          </div>
        </Link>
        <div className="mr-[]  ">
          <ul className="hidden md:flex gap-5  font-semibold text-opacity-100 ">
            {navItems?.map((item, index) => {
              return (
                <NavLink key={index} to={item.path}>
                  <li className=" px-5 py-2 rounded-tr-md rounded-bl-md hover:bg-primary hover:text-[#000016] rounded-sm focus:text-primary">
                    {item.name}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row-reverse  items-center gap-3 cursor-pointer">
          <button
            className="bg-blue-500 flex justify-center items-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setAuth({ liveChat: !auth?.liveChat });
            }}
          >
            <BsChatDotsFill className="inline-block mr-2" />
            <p className="hidden md:flex">Live Chat</p>
          </button>
        </div>
        <div className="lg:hidden">
          {mobileMenu ? (
            <div
              onClick={(e) => {
                setMobileMenu(!mobileMenu);
              }}
            >
              <MdClose size={30} color="#fcb900" />
            </div>
          ) : (
            <div
              onClick={(e) => {
                setMobileMenu(!mobileMenu);
              }}
            >
              <MdMenu size={30} color="#fcb900" />
            </div>
          )}
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={
          mobileMenu
            ? "absolute top-[px] ease-in-out duration-500 h-screen flex flex-col bg-dark w-[100%] py-6 lg:hidden"
            : " absolute left-[-100%] "
        }
      >
        <ul className="flex flex-col  gap-5  font-semibold text-opacity-100  ">
          {navItems?.map((item, index) => {
            return (
              <NavLink key={index} to={item.path}>
                <li className=" px-4 py-1 hover:border-b border-b-primary text-center cursor-pointer hover:text-primary ">
                  {item.name}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
