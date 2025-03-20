import { format, parseISO } from "date-fns";

const BlogLayoutOne = ({ blog }) => {
  if (!blog || !blog.image || !blog.tags || !blog.tags[0]) {
    return null;
  }

  const imagePath = blog.image.filePath?.replace("../public", "") || "";
  const formattedDate = blog.publishedAt
    ? format(parseISO(blog.publishedAt), "LLLL d, yyyy")
    : "Ngày không hợp lệ";

  return (
    <div className={CONTAINER_CLASSES}>
      <div className={GRADIENT_CLASSES} />
      <Image
        src={imagePath}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className={IMAGE_CLASSES}
        sizes="(max-width: 1180px) 100vw, 50vw"
        loading="lazy"
      />
      <div className={CONTENT_CLASSES}>
        <Tag
          link={`/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          className={TAG_CLASSES}
        />
        <Link href={blog.url} className="mt-6">
          <h2 className={TITLE_CLASSES}>
            <span className={TITLE_HIGHLIGHT_CLASSES}>{blog.title}</span>
          </h2>
        </Link>
        <time className="text-xs sm:text-sm text-light mt-2">
          {formattedDate}
        </time>
      </div>
    </div>
  );
};