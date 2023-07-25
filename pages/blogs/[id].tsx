import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SingleBlog } from "@/components";
import { BlogValue } from ".";
import axios from "axios";

export default function BlogDetail() {
  const router = useRouter();
  const { query } = router;
  const [myBlog, setMyBlog] = useState<BlogValue>();

  useEffect(() => {
    const getSingleBlog = async () => {
      const response = await axios.get(
        `https://oak-d-api.onrender.com/blog/${query.id}`
      );
      setMyBlog(response.data.data);
    };
    getSingleBlog();
  }, []);
  console.log(myBlog);
  return (
    <div>
      <SingleBlog myBlog={myBlog} />
    </div>
  );
}
