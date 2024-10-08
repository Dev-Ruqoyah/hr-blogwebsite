import { useParams } from "react-router-dom";
import useFetch from "../Component/FetchHook/useFetch";

const BlogDetails = () => {
    const{id} =useParams();
    const{data:blog,Error,isLoading} = useFetch("http://localhost:8000/blogs" + {id});
    return ( 
        <>
            <div className="container mx-auto">
                {isLoading && <div>Loading...</div> }
                {Error && <div> {Error}</div>}
                {blog && 
                <div>
                    {blog.blogcontent}
                </div>
                
                }
                {/* <p>This is blog details - {id}</p>
                <p>{blog}</p> */}
            </div>
        </>
     );
}
 
export default BlogDetails;