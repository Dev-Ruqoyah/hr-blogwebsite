import { useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Data from '../API/blog.json';
import Footer from "../Component/Footer"

const BlogDetails = () => {
  const { id } = useParams();
  
  // Convert id to a number to match the data type
  const blogId = Number(id);
  
  // Find the specific blog post based on the id
  const blog = Data.Blogs.find(blog => blog.id === blogId);

  return (
    <>
      <div className="container mx-auto h-full px-6">
        <Navbar />
        {!blog && <div>Blog not found</div>} {/* Handle case where blog is not found */}
        {blog ? (
          <div className="grid md:grid-cols-3 h-screen container">
            <div className="flex-none col-span-2">
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
                <div className="blog-content">
                  <p className="w-4/5">{blog.blogcontent}</p>
                </div>
              </div>
            </div>
            <div className="shadow container mx-auto sm:w-full h-fit my-8 p-5">
              <div className="header">
                <h3 className="text-xl font-semibold text-center">
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
          
        ) : (
          <div>Loading...</div>
        )}
        {/* <Footer className=""/> */}
      </div>
    </>
  );
};

export default BlogDetails;
