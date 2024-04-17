import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ image, title, para, time, url, pinned }) => {
  return (
    <article>
      {pinned ? (
        <div className="flex flex-col gap-2 py-6">
          <Image
            src={image}
            width={600}
            height={400}
            className="object-contain"
          />
          <span className="text-xs font-semibold manrope">{time}</span>
          <h3 className="manrope">{title}</h3>
          <p className="small-para manrope">{para}</p>
          <Link href={url} className="manrope">
            Read More
          </Link>
        </div>
      ) : (
        <div className="flex md:flex-row flex-col gap-2 py-6">
          <div className="md:w-2/6 h-full">
            <Image src={image} width={250} height={250} className="w-full" />
          </div>
          <div className="md:w-4/6 w-full">
            <span className="text-xs font-semibold manrope">{time}</span>
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
