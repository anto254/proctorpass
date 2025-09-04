import React, {useState} from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "../api/axios";
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const { setAuth, persist, setPersist } = useAuth();
  const location = useLocation();
  const toDash = location.state?.from?.pathname || "/dashboard";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const login = (loginData) => {
    return axios.post("/auth", loginData);
  };

  const {
    mutate: loginMutate,
    isLoading: loginLoading,
    error,
  } = useMutation(login, {
    onSuccess: (response) => {
      navigate(toDash, { replace: true });
      reset();
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      const userId = response?.data?.user_Id;
      const userName = response?.data?.userName;
      const text = `Welcome back ${userName}` || "Welcome back";
      toast.success(text);
      localStorage.setItem("userId", JSON.stringify(userId));
      setAuth({ roles, accessToken, userId, userName });
    },
    onError: (err) => {
      const text = err?.response.data.message;
      setErrMsg(text);
      setTimeout(() => {
        setErrMsg("");
      }, 10000);
      if (!err.response.data.message) {
        toast.error("something went wrong");
      }
    },
  });

  const onSubmitting = (data) => {
    loginMutate(data);
  };
  return (
    <div className=" flex flex-col justify-center items-center min-h-[100vh]    ">
      <h1 className="text-lg font-bold text-gray-500 p-3">ProctorPass ADMIN</h1>
      {/* Login form  */}
      <div className="min-h-[400px] w-[93%] md:w-[400px]  bg-secondary bg-opacity-80 text-start rounded-md">
        <form
          onSubmit={handleSubmit(onSubmitting)}
          className="px-2 md:px-4 py-2  "
        >
            <p className="text-red-500 text-center">{errMsg}</p>
          <div className="flex items-center gap-3">
            <h1 className=" text-2xl  font-semibold my-4 ">Login</h1>

          </div>
          <div className="flex flex-col gap-7">
            <div className="flex gap-3 py-2 border-b-2 border-b-primary">
              <h1>
                <HiUser size={22} />
              </h1>
              <input
                type="text"
                placeholder="Username"
                className="outline-none w-full bg-light bg-opacity-0"
                {...register("userName", {
                  required: true,
                })}
              />
            </div>
            <p className="text-red-500">
              {errors.userName?.type === "required" && "Username is required"}
            </p>

            <div className="flex gap-3 p-2 border-b-2 border-b-primary">
              <h1>
                <RiLockPasswordFill size={20} />
              </h1>
              <input
                type="password"
                placeholder="Password"
                className="outline-none w-full bg-light bg-opacity-0 "
                {...register("password", {
                  required: true,
                })}
              />
              <p className="text-red-500">
                {errors.password?.type === "required" && "Password is required"}
              </p>
            </div>
          </div>

          <div className="my-10 flex justify-center items-center ">
            {loginLoading ? (
              <div className="flex justify-center pr-6 items-center">
                <PulseLoader color="#6ba54a" size={10} />
              </div>
            ) : (
              <button className="rounded-md bg-primary text-secondary text-center py-[4px] px-[30px] cursor-pointer">
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
