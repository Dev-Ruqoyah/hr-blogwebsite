import React from "react";
import { Link } from "react-router-dom";

// import Blog from "./Blog";

const BlogList = ({ blogs, title }) => {
  return (
    <>
      <div className="contai py-10">
        <h4 className="md:text-3xl text-2xl px-12 font-semibold ">{title}</h4>

        <div className="container shadow-sm grid lg:grid-cols-3 md:grid-cols-2 gap-10 mx-auto">
          {blogs.map(
            (
              {
                blogauthor,
                blogcontent,
                blogtime,
                blogtopic,
                blogimage,
                authorimage,
                id,
              }
            ) => (
              <div key={id}>
                 <Link to={`blogs/${id}`}>
                <div className=" rounded-lg shadow-md p-5 hover:my-1 transition-all">
                  <div className="blog-image py-5">
                    <img
                      src={blogimage}
                      alt="blog image"
                      className="h-60 w-full rounded-lg object-cover hover:scroll-m-24"
                      height={"100%"}
                    />
                  </div>
                  <div className="blog-contentee flex flex-col gap-3">
                    <div className="blog-title">
                      <p className="text-2xl font-semibold">{blogtopic}</p>
                    </div>

                    <div className="blog-details">
                      <p className="line-clamp-2 whitespace-normal">
                        {blogcontent}
                      </p>
                    </div>
                    <div className="blog-footer flex gap-3 items-center">
                      <img
                        src={authorimage}
                        alt=""
                        className="h-10 rounded-full object-cover"
                      />
                      <p>{blogauthor}</p>
                      <p>{blogtime}</p>
                    </div>
                  </div>
                </div>
              </Link>
              </div>
             
            )
          )}
        </div>
      </div>
    </>
  );
};

export default BlogList;
