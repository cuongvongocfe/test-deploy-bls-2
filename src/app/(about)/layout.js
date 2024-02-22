import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "20+ Hợp đồng",
    "1+ Years of Freelancin",
    "99% Sự Hài Lòng Của Khách Hàng"
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
