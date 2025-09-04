import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import PulseLoader from "react-spinners/PulseLoader";
import "react-quill/dist/quill.snow.css";
import Editor from "../AdminDashboard/Editor";
import { useQuery, useQueryClient } from "@tanstack/react-query";


function EditBlog() {
  const [singleFile, setSingleFile] = useState("");
  const [content, setContent] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
    watch,
  } = useForm();

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  };

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
  } = useQuery([`blog-${slug}`], getBlog);

  // end of fetching blog

  useEffect(() => {
    setContent(blogData?.data?.content);
  }, [blogData?.data?.content]);

  const formData = new FormData();
  formData.append("file", singleFile);
  formData.append("title", watch("title"));
  formData.append("summary", watch("summary"));
   formData.append("slug", watch("slug"));
  formData.append("content", content);
  const [sending, setSending] = useState(false);

  const submitProduct = () => {
    if (content === "") {
      toast.warn("Content is required!");
      return;
    }
    setSending(!sending);

    axios
      .patch(`/blogs/${blogData?.data?._id}`, formData)
      .then((response) => {
        toast.success(response?.data?.message);
        setSending(false);
      })
      .catch((error) => {
        toast.error(response?.data?.message);
        setSending(false);
      });
  };

  return (
    <div className="bg-dark pb-[100px] ">
      {loadingBlog ? (
        <div className="pt-16 flex items-center justify-center">
          Loading<PulseLoader color="#0000ff" size={10} />
        </div>
      ) : (
        <form action="" className="w-full px-3  ">
          <h1 className="font-bold my-4">Edit Blog</h1>
          <div className="flex flex-col px-2 md:grid md:grid-cols-3 gap-3  ">
            <div className="flex flex-col gap-2">
              <h1>
                Title<sup className="text-red-500 text-md">*</sup>
              </h1>
              <input
                type="text"
                defaultValue={blogData?.data?.title}
                className="p-1 bg-gray-700 text-gray-300 outline-none focus:border-b focus:border-primary w-full"
                {...register("title", { required: true })}
              />
              <p className="text-red-500 text-sm">
                {errors?.title?.type === "required" && "Title is required"}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h1>
                summary<sup className="text-red-500 text-md">*</sup>
              </h1>
              <input
                type="text"
                defaultValue={blogData?.data?.summary}

                className="p-1 bg-gray-700 text-gray-300 outline-none focus:border-b focus:border-primary w-full"
                {...register("summary", { required: true })}
              />
              <p className="text-red-500 text-sm">
                {errors?.title?.type === "required" && "Summary is required"}
              </p>
            </div>

<div className="flex flex-col gap-2">
              <h1>
                slug<sup className="text-red-500 text-md">*</sup>
              </h1>
              <input
                type="text"
                defaultValue={blogData?.data?.slug}

                className="p-1 bg-gray-700 text-gray-300 outline-none focus:border-b focus:border-primary w-full"
                {...register("slug", { required: true, pattern: /^[a-z]+(-[a-z]+)*$/, })}
              />
              <p className="text-red-500 text-sm">
                {errors?.slug?.type === "required" && "Blog slug is required"}
	        {errors.slug?.type === "pattern" &&
                "Wrong format! Only use lower case and separate words with hyphen"}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h1>
                Upload Image <sup className="text-red-500 text-md">*</sup>
              </h1>
              <input
                type="file"
                accept=".jpg, .png, .jpeg, .svg, .webp"
                className="p-1 outline-secondary w-full bg-primary bg-opacity-20 "
                onChange={(event) => {
                  SingleFileChange(event);
                }}
              />
            </div>
          </div>
          {/* content */}
          <div className="flex flex-col px-2 gap-5">
            <h1>Blog Content</h1>
            <div className="text-gray-300">
              <Editor
                value={content}
                onChange={setContent}
                className="outline-none h-[100px]"
              />
            </div>
          </div>

          <div className="flex justify-center my-6">
            {sending ? (
              <div>
                <PulseLoader color="#0000ff" size={10} />
              </div>
            ) : (
              <button
                onClick={handleSubmit(submitProduct)}
                className="bg-secondary outline-none rounded-md cursor-pointer  hover:bg-gray-500 text-center text-light px-4 py-2"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

export default EditBlog;
