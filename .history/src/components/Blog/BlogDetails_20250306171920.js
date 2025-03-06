"use client";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import React, { useMemo } from "react";
import { slug as slugify } from "github-slugger";
import ViewCounter from "./ViewCounter";

// Move static class names outside the component
const CONTAINER_CLASSES = [
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

const ITEM_CLASSES = "m-3";

// Utility to format date safely
const formatDate = (dateStr) => {
  if (!dateStr || typeof dateStr !== "string") return "Invalid Date";
  try {
    return format(parseISO(dateStr), "LLLL d, yyyy");
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date";
  }
};

// Predefine fallback component for consistency
const FallbackMessage = ({ message }) => (
  <section className={CONTAINER_CLASSES}>
    <span className={ITEM_CLASSES}>{message}</span>
  </section>
);

const BlogDetails = ({ blog, slug: blogSlug }) => {
  // Early return for missing critical props
  if (!blog || !blogSlug) {
    return <FallbackMessage message="Error: Blog data missing" />;
  }

  const { publishedAt, readingTime, tags } = blog;

  // Memoize only the date formatting (slugify is lightweight)
  const formattedDate = useMemo(() => formatDate(publishedAt), [publishedAt]);
  const firstTag = tags?.[0];
  const categorySlug = firstTag ? slugify(firstTag) : "";

  return (
    <section className={CONTAINER_CLASSES}>
      <time className={ITEM_CLASSES} dateTime={publishedAt || undefined}>
        {formattedDate}
      </time>
      <span className={ITEM_CLASSES}>
        <ViewCounter slug={blogSlug} />
      </span>
      <div className={ITEM_CLASSES}>
        {readingTime?.text ?? "Reading time unavailable"}
      </div>
      {firstTag ? (
        <Link
          href={`/categories/${categorySlug}`}
          className={ITEM_CLASSES}
          aria-label={`View all posts in ${firstTag}`}
        >
          #{firstTag}
        </Link>
      ) : (
        <span className={ITEM_CLASSES}>No category</span>
      )}
    </section>
  );
};

export default React.memo(BlogDetails);