import React, { useEffect} from "react";
import { useState } from "react";

import BlogList from "./BlogList";
import useFetch from "./FetchHook/useFetch";
const Blog = () => {
    const {data:blogs,isLoading,error} = useFetch("http://localhost:8000/blogs")
   
    return ( 
        <>
            {error && <div className="container mx-auto text-2xl font-semibold text-red-500">{error}</div>}
            {isLoading && <div className="container mx-auto text-2xl font-semibold">Loading...</div>}
           {blogs &&  <BlogList blogs={blogs} title={"Recent Blog Posts"}/>}

        </>
     );
}
 
export default Blog;