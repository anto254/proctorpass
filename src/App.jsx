import { useState } from "react";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import "animate.css";
import Blogs from "./pages/Blogs";
import Reviews from "./pages/Reviews";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import FAQpage from "./pages/FAQpage";
import Login from "./pages/Login";
import Dashboard from "./pages/AdminDashboard/Dashboard";
import AddBlog from "./pages/AdminDashboard/AddBlog";
import AddReview from "./pages/AdminDashboard/AddReview";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import Unauthorized from "./pages/Unauthorized";
import Contacts from "./pages/AdminDashboard/Contacts";
import MyBlogs from "./pages/AdminDashboard/MyBlogs";
import EditBlog from "./pages/AdminDashboard/EditBlog";
import MyReviews from "./pages/AdminDashboard/MyReviews";
import ChatWithUs from "./pages/ChatWithUs";
import AdminSupport from "./pages/AdminDashboard/AdminSupport";
import Messages from "./pages/AdminDashboard/Messages";
import ScrollBlog from "./pages/ScrollBlog";
import CanYouCheatProctoru from "./pages/Static-blogs/CanYouCheatProctoru";
import HowToCheatProctoru from "./pages/Static-blogs/HowToCheatProctoru";
import CanProctoruSeeMyScreen from "./pages/Static-blogs/CanProctoruSeeMyScreen";
import CanProctoruDetectPhones from "./pages/Static-blogs/CanProctoruDetectPhones";

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    // routes
    <div className="bg-svg3 min-h-screen text-primary relative  ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
        <QueryClientProvider client={queryClient}>
      <ChatWithUs/>
        <Routes>
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/title-of-the-blog" element={<ScrollBlog />} />
          <Route path="/blog/can-you-cheat-on-proctoru-understanding-the-proctoru-experience-your-questions-answered" element={<CanYouCheatProctoru />} />
          <Route path="/blog/how-to-cheat-on-proctoru" element={<HowToCheatProctoru />} />
          <Route path="/blog/can-proctoru-see-my-screen" element={<CanProctoruSeeMyScreen />} />
          <Route path="/blog/can-proctoru-detect-phones" element={<CanProctoruDetectPhones />} />
          {/* dashboard routes */}
          {/* <Route > */}

          {/* dashboard routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
              <Route path="dashboard" element={<Dashboard />}>
                <Route index element={<AddBlog />} />
                <Route path="add-blog" element={<AddBlog />} />
                <Route path="add-blog" element={<AddBlog />} />
                <Route path="add-review" element={<AddReview />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="my-blogs" element={<MyBlogs />} />
                <Route path="my-reviews" element={<MyReviews />} />
                <Route path="edit/:slug" element={<EditBlog />} />
                <Route path="chats" element={<AdminSupport />} />
                <Route path="messages/:clientId" element={<Messages />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
