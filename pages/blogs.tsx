import { AllBlogs, BlogLand, Latest, PageLayout, Post } from '@/components'
import { BlogContext, BlogContextProvider } from '@/context/BlogWrapper'
import { blogData } from '@/utils/blog'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type BlogValue = {
    _id: string;
    heading: string;
    coverImage: string;
    content: string;
}



export default function Blogs() {
    const [blog, setBlog] = useState<BlogValue[]>([]);
  return (
    <PageLayout>
        <main>
            <BlogContextProvider>
                <div className=''>
                    <BlogLand />
                    <Latest blogData={blogData}    />
                    <AllBlogs blogData={blogData}  />
                </div>
                <div className='hidden'>
                    <Post selectBp={""}   />
                </div>
            </BlogContextProvider>
        </main>
    </PageLayout>
    
  )
}




