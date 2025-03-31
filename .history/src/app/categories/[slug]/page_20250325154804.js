import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";

// Khởi tạo đối tượng slugger để tạo slug từ các tag
const slugger = new GithubSlugger();

// Hàm helper để xóa số ở cuối tag
const removeNumbersFromTag = (tag) => {
  return tag ? tag.replace(/-\d+$/, "") : "";
};

// Hàm helper để tạo danh sách danh mục từ tất cả các blog
const generateCategories = (blogs) => {
  const categories = new Set(["all"]);
  blogs.forEach((blog) => {
    if (blog.isPublished) {
      blog.tags?.forEach((tag) => {
        const cleanedTag = removeNumbersFromTag(tag);
        const slugified = slugger.slug(cleanedTag);
        categories.add(slugified);
      });
    }
  });
  return Array.from(categories).sort((a, b) =>
    a.localeCompare(b, "vi", { sensitivity: "base" })
  );
};

// Tạo các đường dẫn tĩnh cho từng danh mục
export async function generateStaticParams() {
  const categories = generateCategories(allBlogs);
  const paths = categories.map((category) => ({ slug: category }));
  console.log("CategoryPage paths:", paths); // Thêm log để debug
  return paths;
}

// Tạo metadata cho trang danh mục
export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${
      params.slug === "all" ? "web development" : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}

// Định nghĩa các biến chứa className để tái sử dụng và dễ bảo trì
const CONTAINER_CLASSES =
  "px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col";
const GRID_CLASSES =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32";
const TITLE_CLASSES =
  "mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl text-dark dark:text-light";
const DESCRIPTION_CLASSES = "mt-2 inline-block text-dark dark:text-light";

const CategoryPage = ({ params }) => {
  // Bước 1: Tạo danh sách tất cả danh mục từ các blog
  const allCategories = generateCategories(allBlogs);

  // Bước 2: Lọc các blog theo danh mục hiện tại (params.slug)
  const blogs = allBlogs.filter((blog) =>
    params.slug === "all"
      ? true
      : blog.tags?.some((tag) => slug(removeNumbersFromTag(tag)) === params.slug)
  );

  // Thêm log để debug
  console.log("params.slug:", params.slug);
  console.log("filtered blogs:", blogs);

  // Làm sạch số trong params.slug để hiển thị
  const displaySlug = removeNumbersFromTag(params.slug);

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      {/* Tiêu đề và mô tả của danh mục */}
      <div className={CONTAINER_CLASSES}>
        <h1 className={TITLE_CLASSES}>#{displaySlug}</h1>
        <span className={DESCRIPTION_CLASSES}>
          Khám phá nhiều danh mục hơn và mở rộng kiến ​​thức của bạn!
        </span>
      </div>

      {/* Hiển thị danh sách các danh mục để người dùng chọn */}
      <Categories categories={allCategories} currentSlug={params.slug} />

      {/* Hiển thị danh sách blog theo danh mục trong dạng lưới */}
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

export default CategoryPage;