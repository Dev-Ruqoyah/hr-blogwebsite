import { useParams } from "react-router-dom";
import useFetch from "../Component/FetchHook/useFetch";
import Navbar from "../Component/Navbar";
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <>
      <div className="container mx-auto h-full px-6">
        <Navbar />
        {isLoading && <div>Loading...</div>}
        {error && <div> {error}</div>}
        {blog && (
          <div className="grid grid-cols-3 h-screen container">
            <div className="flex-none col-span-2  ">
              <div className="py-6 flex flex-col gap-3">
                <p className="text-2xl font-semibold text-center w-4/5">
                  {blog.blogtopic}
                </p>
                <div className="blog-footer flex gap-3 items-center">
                  <img
                    src={blog.authorimage}
                    alt=""
                    className="h-10 rounded-full object-cover"
                  />
                  <p>{blog.blogauthor}</p>
                  <p>{blog.blogtime}</p>
                </div>
                <div className="image">
                  <img
                    src={blog.blogimage}
                    className="rounded-lg h-80 object-cover md:w-4/5"
                    alt=""
                  />
                </div>
                <div className="blog-contetn">
                  <p className=" w-4/5">{blog.blogcontent}</p>
                </div>
              </div>
            </div>
            <div className="shadow container mx-auto  h-fit my-8 p-5 ">
              <div className="header">
                <h3 className="text-xl font-semibold  text-center ">
                  About me
                </h3>
              </div>
              <div className="blog-footer flex flex-col gap-1 mt-2 items-center">
                <img
                  src={blog.authorimage}
                  alt=""
                  className="h-52 rounded-full object-cover"
                />
                <p className="text-xl">{blog.blogauthor}</p>
                <p className="text-center">{blog.authordetails}</p>
                
              </div>
            </div>
          </div>
        )}
        {/* <p>This is blog details - {id}</p>
                <p>{blog}</p> */}
      </div>
    </>
  );
};

export default BlogDetails;
