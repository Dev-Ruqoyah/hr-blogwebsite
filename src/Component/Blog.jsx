import React from "react";
import BlogList from "./BlogList";
import Data from '../API/blog.json'; 
import useFetch from "./FetchHook/useFetch";

const Blog = () => {
    const blogs = Data.Blogs; 
    const isLoading = false; 
    const error = null; 

    return (
        <>
            {error && <div className="container mx-auto text-2xl font-semibold text-red-500">{error}</div>}
            {isLoading && <div className="container mx-auto text-2xl font-semibold">Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"Recent Blog Posts"} />}
        </>
    );
}

export default Blog;
