import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ image, title, para, time, url, pinned , fullImage , blogPage}) => {
  return (
    <article>
      {pinned ? (
        <div className="flex flex-col gap-2 py-6">
          <Image
            src={image}
            width={600}
            height={400}
            className={`object-contain ${fullImage && 'w-full'}`}
          />
         
          <div className="flex gap-4 items-center">
          {blogPage && (
            <div className="text-xs bg-slate-200 p-2 manrope">
              1st June 2024
            </div>
          )}
          <span className="text-xs font-semibold manrope">{time}</span>
          </div>
          <h3 className="manrope">{title}</h3>
          <p className="small-para manrope">{para}</p>
          <Link href={url} className="manrope">
            Read More
          </Link>
        </div>
      ) : (
        <div className={`flex ${!blogPage && 'md:flex-row'} flex-col gap-2 py-6`}>
          <div className="md:w-2/6 h-full">
            <Image src={image} width={250} height={250} className="w-full" />
          </div>
          <div className="md:w-4/6 w-full">
          <div className="flex gap-4 items-center">
          {blogPage && (
            <div className="text-xs bg-slate-200 p-2 manrope">
              1st June 2024
            </div>
          )}
          <span className="text-xs font-semibold manrope">{time}</span>
          </div>
            <h4 className="manrope my-2">{title}</h4>
            <p className="small-para manrope">{para}</p>
            <Link href={url} className="manrope text-xs">
              Read More
            </Link>
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogCard;
