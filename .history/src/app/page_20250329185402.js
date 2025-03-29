import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import Head from 'next/head'; // Import Head từ next/head
import businessData from '../src/data/businessData.json'; // Import dữ liệu JSON-LD

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
        />
      </Head>
      <main className="flex flex-col items-center justify-center">
        <HomeCoverSection blogs={allBlogs} />
        <FeaturedPosts blogs={allBlogs} />
        <RecentPosts blogs={allBlogs} />
      </main>
    </>
  );
}