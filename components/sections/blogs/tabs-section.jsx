"use client";
import BlogCard from "@/components/cards/BlogCard";
import { blogs } from "@/utils/Blogs";
import { homeblogs } from "@/utils/homeblog";
import React from "react";

const TabsSec = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);

  const pinnedBlog = homeblogs.find((blog) => blog.pinned);
  const otherBlogs = homeblogs.filter((blog) => !blog.pinned);

  return (
    <>
      <div className="flex py-16">
        <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-1/4 ">
            <h4 className="manrope">Blog Categories</h4>
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 md:flex-col flex-row"
              role="tablist"
            >
              {blogs.map((tab) => (
                <li
                  key={tab.id}
                  className="-mb-px mr-2 last:mr-0 flex-auto text-left"
                >
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal manrope " +
                      (openTab === tab.id
                        ? `text-black bg-gray-200`
                        : `text-${color}-600 bg-white`)
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(tab.id);
                    }}
                    role="tablist"
                  >
                    {tab.category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded md:w-3/4">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className="featured-blog">
                  <div className="grid grid-cols-1">
                    <div className="grid-box-1">
                      <BlogCard
                      fullImage={true}
                        image={pinnedBlog.image}
                        title={pinnedBlog.title}
                        para={pinnedBlog.para}
                        url={pinnedBlog.url}
                        time={pinnedBlog.time}
                        pinned={pinnedBlog.pinned}
                        blogPage={true}
                      />
                    </div>
                    <div className="grid-box-2">
                      <div className="grid md:grid-cols-2">
                        {otherBlogs.map((blog, index) => (
                          <BlogCard
                            key={index}
                            image={blog.image}
                            title={blog.title}
                            para={blog.para}
                            url={blog.url}
                            time={blog.time}
                            pinned={blog.pinned}
                            blogPage={true}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsSec;
