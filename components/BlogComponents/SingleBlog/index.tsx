import React from "react";
import { useRouter } from "next/router";
import { BlogValue } from "@/pages/blogs";
import Image from "next/image";
import { PageLayout } from "@/components/Layouts/PageLayout";

interface SingleBlogProps {
  myBlog: BlogValue | undefined;
}

export function SingleBlog({ myBlog }: SingleBlogProps) {
  const router = useRouter();

  const { query } = router;

  console.log(query.id);
  console.log(myBlog?.coverImage);
  return (
    <PageLayout>
      <div className="px-[100px] py-[96px]">
        <h1 className="font-bold text-[28px] lg:text-[50px] text-center">
          {myBlog?.heading}
        </h1>
        <div className="mt-[96px]">
          <img
            src={myBlog?.coverImage}
            alt="cover-image"
            height={728}
            width={1524}
          />
        </div>
        <div className="mt-[94px] lg:w-[75%] lg:mx-auto">
          <div
            className="font-medium text-[18px] lg:text-[24px] mt-[17px] text-justify"
            dangerouslySetInnerHTML={{ __html: myBlog?.content as string }}
          />
        </div>
      </div>
    </PageLayout>
  );
}
