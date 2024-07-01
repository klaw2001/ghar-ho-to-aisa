import BlogCard from "@/components/cards/BlogCard";
import { homeblogs } from "@/utils/homeblog";
import React from "react";

const HomeBlogs = () => {
  const pinnedBlog = homeblogs.find(blog => blog.pinned);

  const otherBlogs = homeblogs.filter(blog => !blog.pinned);

  return (
    <section className="py-32">
      <div className="container">
        <div className="blogs-wrapp">
          <h2 className="text-left">Our Latest News</h2>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="grid-box-1">
              <BlogCard
                image={pinnedBlog.image}
                title={pinnedBlog.title}
                para={pinnedBlog.para}
                url={pinnedBlog.url}
                time={pinnedBlog.time}
                pinned={pinnedBlog.pinned}
              />
            </div>
            <div className="grid-box-2">
              <div className="grid grid-cols-1">
                {otherBlogs.map((blog, index) => (
                  <BlogCard
                    key={index}
                    image={blog.image}
                    title={blog.title}
                    para={blog.para}
                    url={blog.url}
                    time={blog.time}
                    pinned={blog.pinned}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;
