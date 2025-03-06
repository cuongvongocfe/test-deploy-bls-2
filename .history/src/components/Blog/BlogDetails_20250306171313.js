"use client"; // Assuming ViewCounter requires client-side rendering
import { format, parseISO } from "date-fns";
import Link from "next/link";
import React, { useMemo } from "react";
import { slug as slugify } from "github-slugger"; // Rename to avoid confusion
import ViewCounter from "./ViewCounter";

// Utility to format date safely
const formatDate = (dateStr) => {
  try {
    return format(parseISO(dateStr), "LLLL d, yyyy");
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date";
  }
};

const BlogDetails = ({ blog, slug: blogSlug }) => {
  // Guard against missing blog data
  if (!blog || !blogSlug) {
    return (
      <div className="px-2 md:px-10 py-2 mx-5 md:mx-10">
        Error: Blog data missing
      </div>
    );
  }

  const { publishedAt, readingTime, tags } = blog;

  // Memoize computed values to avoid recalculating on every render
  const formattedDate = useMemo(() => formatDate(publishedAt), [publishedAt]);
  const categorySlug = useMemo(
    () => (tags?.[0] ? slugify(tags[0]) : ""),
    [tags]
  );

  // Cleaner className management
  const containerClasses = [
    "px-2",
    "md:px-10",
    "bg-accent",
    "dark:bg-accentDark",
    "text-light",
    "dark:text-dark",
    "py-2",
    "flex",
    "items-center",
    "justify-around",
    "flex-wrap",
    "text-lg",
    "sm:text-xl",
    "font-medium",
    "mx-5",
    "md:mx-10",
    "rounded-lg",
  ].join(" ");

  const itemClasses = "m-3";

  return (
    <section className={containerClasses}>
      <time className={itemClasses} dateTime={publishedAt}>
        {formattedDate}
      </time>
      <span className={itemClasses}>
        <ViewCounter slug={blogSlug} />
      </span>
      <div className={itemClasses}>
        {readingTime?.text || "Reading time unavailable"}
      </div>
      {tags?.[0] ? (
        <Link
          href={`/categories/${categorySlug}`}
          className={itemClasses}
          aria-label={`View all posts in ${tags[0]}`}
        >
          #{tags[0]}
        </Link>
      ) : (
        <span className={itemClasses}>No category</span>
      )}
    </section>
  );
};

export default React.memo(BlogDetails);