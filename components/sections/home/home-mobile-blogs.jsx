import BlogCard from "@/components/cards/BlogCard";
import { homeblogs } from "@/utils/homeblog";
import React from "react";

const HomeMobileBlogs = () => {
  return (
    <section className="pt-32 block md:hidden">
      <div className="container">
        <div className="blogs-wrapp">
          <h2 className="text-left" data-aos="fade-right">
            Our Latest News
          </h2>
          <div className="flex gap-4 overflow-x-scroll">
            {homeblogs.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                title={blog.title}
                para={blog.para}
                url={blog.url}
                time={blog.time}
                // pinned={blog.pinned}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMobileBlogs;
