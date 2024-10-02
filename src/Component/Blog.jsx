import React, { useEffect} from "react";
import { useState } from "react";

import BlogList from "./BlogList";
const Blog = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [Error, setError] = useState(null);
    useEffect(() =>{
        
            const url = "http://localhost:8000/blogs";
            fetch(url)
            .then(res =>{
                
                if(!res.ok){
                    throw Error("Can't fetch data from the url")
                }return res.json();
            })
            .then(data =>{
                console.log(data);
                setBlogs(data);
                setIsLoading(false)
                setError(null)
                
            })
        
        .catch(err =>{
            console.error(err);
                setError(err.message)
                setBlogs(null)
        })
      
    },[])
    return ( 
        <>
            {Error && <div>{Error}</div>}
            {isLoading && <div>Loading</div>}
           {blogs &&  <BlogList blogs={blogs} title={"Recent Blog Posts"}/>}

        </>
     );
}
 
export default Blog;