import React, { useEffect} from "react";
import { useState } from "react";

import BlogList from "./BlogList";
import useFetch from "./FetchHook/useFetch";
const Blog = () => {
    const {data:blogs,isLoading,Error} = useFetch("http://localhost:8000/blogs")
   
    return ( 
        <>
            {Error && <div className="container mx-auto">{Error}</div>}
            {isLoading && <div className="container mx-auto">Loading</div>}
           {blogs &&  <BlogList blogs={blogs} title={"Recent Blog Posts"}/>}

        </>
     );
}
 
export default Blog;