// Trong CategoryPage
import { useEffect } from "react";

const CategoryPage = ({ params }) => {
  const allCategories = generateCategories(allBlogs);
  const blogs = allBlogs?.filter((blog) =>
    params.slug === "all"
      ? true
      : blog?.tags?.some((tag) => slug(removeNumbersFromTag(tag)) === params.slug)
  ) || [];

  // Logic đếm lượt xem
  useEffect(() => {
    const hasViewed = sessionStorage.getItem(`viewed-category-${params.slug}`);
    if (!hasViewed) {
      // Gọi API để tăng view counter (nếu có)
      fetch("/api/increment-view", {
        method: "POST",
        body: JSON.stringify({ slug: params.slug, type: "category" }),
      });
      sessionStorage.setItem(`viewed-category-${params.slug}`, "true");
    }
  }, [params.slug]);

  const displaySlug = removeNumbersFromTag(params.slug);

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className={CONTAINER_CLASSES}>
        <h1 className={TITLE_CLASSES}>#{displaySlug}</h1>
        <span className={DESCRIPTION_CLASSES}>
          Khám phá nhiều danh mục hơn và mở rộng kiến ​​thức của bạn!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className={GRID_CLASSES}>
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <article key={blog._id || index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          ))
        ) : (
          <p className="col-span-full text-center text-lg">
            No blogs found for this category.
          </p>
        )}
      </div>
    </article>
  );
};