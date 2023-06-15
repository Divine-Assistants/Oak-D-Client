import { AllBlogs, BlogLand, Latest, PageLayout, Post } from "@/components";
import { BlogContext, BlogContextProvider } from "@/context/BlogWrapper";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
export type BlogValue = {
  _id?: string;
  heading: string;
  coverImage: string;
  content: string;
};

export default function Blogs() {
  const [blogData, setBlogData] = useState<BlogValue[]>([]);
  useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get("https://oakandd-api.onrender.com/blog");
      setBlogData(response.data);
    };
  });

  const [blog, setBlog] = useState<BlogValue[]>([]);
  return (
    <PageLayout>
      <main>
        <BlogContextProvider>
          <div className="">
            <BlogLand />
            <Latest blogData={blogData} />
            <AllBlogs blogData={blogData} />
          </div>
          <div className="hidden">
            <Post selectBp={""} />
          </div>
        </BlogContextProvider>
      </main>
    </PageLayout>
  );
}
