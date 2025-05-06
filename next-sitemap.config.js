const siteMetadata = require("./src/utils/siteMetaData");

// Define static URLs from the provided sitemap.xml content
const staticUrls = [
  { loc: "https://baolongscrap.vn/", lastmod: "2025-05-06T04:56:20+00:00", priority: "1.00" },
  { loc: "https://baolongscrap.vn/about", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/contact", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/categories/tieu-huy-giay", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/blogs/danh-sach-tai-lieu-can-luu-giu", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/blogs/dich-vu-tieu-huy-tai-lieu-dinh-ky-cho-cac-truong-dai-hoc-cao-dang", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/blogs/huong-dan-sap-xep-ho-so-tai-lieu", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/blogs/loi-ich-kinh-te-cua-viec-tieu-huy-tai-lieu-dinh-ky", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/categories/all", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/blogs/meo-luu-tru-va-sap-xep-phan-loai-tai-lieu", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/blogs/nguy-co-tiem-an-khi-khong-huy-bo-tai-lieu-da-het-han-su-dung", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/blogs/nhung-tieu-chi-quan-trong-khi-chon-dich-vu-tieu-huy-tai-lieu-cho-truong-hoc", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/blogs/6-danh-muc-tai-lieu-quan-trong-can-co-trong-moi-doanh-nghiep", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/blogs/bao-long-scrap-tuyen-dung", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/blogs/bi-quyet-giup-doanh-nghiep-quan-ly-tai-lieu-hieu-qua-va-khoa-hoc", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.80" },
  { loc: "https://baolongscrap.vn/categories/chat-thai-thuy-tinh", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/categories/pha-do-cong-trinh", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/categories/tai-che-giay", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/categories/thu-hoi-pin-cu", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/categories/thu-mua-tai-san", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/categories/tieu-huy", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/categories/tieu-huy-thuoc-duoc-pham-het-han", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/categories/tin-tuc", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/categories/xu-ly-chat-thai-nguy-hai", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/bao-mat-thong-tin-khi-tieu-huy-tai-lieu", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/bi-quyet-chon-dich-vu-tieu-huy-tai-lieu-bao-mat-cho-ca-nhan", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/bi-quyet-tim-kiem-cong-ty-tieu-huy-tai-lieu-ho-so-chuyen-nghiep", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/cac-buoc-can-thiet-trong-quy-trinh-tieu-huy-tai-lieu-bao-mat", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/cac-buoc-huy-tai-lieu-giay-to-ho-so-het-han-luu-tru", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/cac-cach-huy-tai-lieu-nhanh-chong-va-hieu-qua", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/cac-loi-ich-khong-ngo-toi-tu-dich-vu-tieu-huy-tai-lieu-bao-mat", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/cong-ty-tieu-huy-ho-so-giay-tai-kien-giang-uy-tin-an-toan-va-hieu-qua", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/cong-ty-tieu-huy-tai-lieu-uy-tin-tai-kien-giang", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/dich-vu-tieu-huy-tai-lieu-chuyen-nghiep-tai-kien-giang-bao-long-scrap", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/gioi-thieu-ve-quy-trinh-tieu-huy-tai-lieu", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/huong-dan-quy-trinh-tieu-huy-tai-lieu-nhanh-chong-an-toan", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/huong-dan-tieu-huy-tai-lieu-het-gia-tri-bao-ve-thong-tin-hieu-qua", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/ly-do-ban-nen-tieu-huy-tai-lieu-bao-mat", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/may-tieu-huy-tai-lieu-lua-chon-thong-minh-de-bao-ve-thong-tin", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/quy-dinh-ve-tieu-huy-ho-so-cap-nhat-moi-nhat-huong-dan-thuc-hien", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/quy-dinh-ve-tieu-huy-tai-lieu", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/quy-trinh-tieu-huy-ho-so-benh-an-het-gia-tri-theo-quy-dinh-bo-y-te", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/quy-trinh-tieu-huy-ho-so-tai-lieu-dung-chuan-huong-dan-chi-tiet-tu-a-den-z", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/quy-trinh-tieu-huy-ho-so-tai-lieu-nhan-su-dung-cach", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/quy-trinh-tieu-huy-ho-so-tai-lieu-tai-chinh-an-toan-va-tuan-thu-phap-luat", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/quy-trinh-tieu-huy-tai-lieu-cho-doanh-nghiep", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/tieu-huy-ho-so-tai-lieu-mat", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/tieu-huy-tai-lieu-giay-cong-doan-quan-trong-trong-chuyen-doi-so", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/tieu-huy-tai-lieu-giup-bao-ve-moi-truong", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/hotel-anhdao", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/pha-do-cong-trinh", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/phu-pham-nong-nghiep", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/phu-pham-nong-nghiep-vietnam", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/phu-pham-nong-nghiep-vo-trau", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/phu-pham-xo-dua", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/quy-trinh-xu-ly-chat-thai-nguy-hai", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/rac-thai-nhua", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/su-dung-giay-tai-che-dong-nghia-voi-viec-giam-luong-go-phai-chat-ha", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/thu-hoi-pin-cu", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/thu-mua-tai-san-thanh-ly-tai-san-ngan-hang", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/tieu-huy-giay-bang-hinh-thuc-dot", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/tieu-huy-thuoc-va-duoc-pham-het-han", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" },
  { loc: "https://baolongscrap.vn/blogs/xu-ly-chat-thai-thuy-tinh-thong-thuong", lastmod: "2025-05-06T04:56:20+00:00", priority: "0.64" }
];

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
  // Exclude all automatic routes to prevent generating sitemap-0.xml
  exclude: ["**/*"],
  // Customize the sitemap output
  transform: async (config, path) => {
    // Find the static URL that matches the path
    const url = staticUrls.find((u) => u.loc === `${siteMetadata.siteUrl}${path}`);
    if (url) {
      return {
        loc: url.loc,
        lastmod: url.lastmod,
        priority: url.priority,
      };
    }
    // Return null for paths that are not in staticUrls
    return null;
  },
  // Provide the list of URLs to include in the sitemap
  additionalPaths: async (config) => {
    return staticUrls.map((url) => ({
      loc: url.loc,
      lastmod: url.lastmod,
      priority: url.priority,
    }));
  },
};