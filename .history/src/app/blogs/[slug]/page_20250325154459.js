import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import siteMetadata from "@/src/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import { notFound } from "next/navigation";

// Hàm helper để xóa số ở cuối tag
const removeNumbersFromTag = (tag) => {
  return tag ? tag.replace(/-\d+$/, "") : "";
};

// Hàm helper để tạo danh sách hình ảnh
const getImageList = (blog) => {
  if (!blog?.image) return [siteMetadata.socialBanner];
  return typeof blog.image.filePath === "string"
    ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
    : blog.image;
};

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) return {};

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();
  const imageList = getImageList(blog);
  const ogImages = imageList.map((img) => ({
    url: img.includes("http") ? img : siteMetadata.siteUrl + img,
  }));
  const authors = blog?.author ? [blog.author] : [siteMetadata.author];

  return {
    title: blog.title || "Blog Post",
    description: blog.description || "A blog post on our website",
    openGraph: {
      title: blog.title || "Blog Post",
      description: blog.description || "A blog post on our website",
      url: siteMetadata.siteUrl + (blog.url || `/blog/${params.slug}`),
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title || "Blog Post",
      description: blog.description || "A blog post on our website",
      images: ogImages,
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) notFound();

  const imageList = getImageList(blog);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title || "Blog Post",
    description: blog.description || "A blog post on our website",
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog?.author || siteMetadata.author,
        url: siteMetadata.twitter,
      },
    ],
  };

  // Làm sạch số trong tag
  const primaryTag = blog.tags?.[0] ? removeNumbersFromTag(blog.tags[0]) : "uncategorized";
  const tagSlug = slug(primaryTag);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={primaryTag}
              link={`/categories/${tagSlug}`}
              className="px-6 text-sm py-2"
            />
            <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
              {blog.title || "Untitled Blog Post"}
            </h1>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          {blog.image ? (
            <Image
              src={blog.image.filePath.replace("../public", "")}
              placeholder="blur"
              blurDataURL={blog.image.blurhashDataUrl}
              alt={blog.title || "Blog Image"}
              width={blog.image.width}
              height={blog.image.height}
              className="aspect-square w-full h-full object-cover object-center"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span>No Image Available</span>
            </div>
          )}
        </div>

        <BlogDetails blog={blog} slug={params.slug} />

        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-4">
            <details
              className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc?.map((heading) => (
                  <li key={heading.slug} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
                    >
                      {heading.level === "three" && (
                        <span className="flex w-1 h-1 rounded-full bg-dark mr-2" />
                      )}
                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
          <RenderMdx blog={blog} />
        </div>
      </article>
    </>
  );
}