import { Suspense } from "react";
import Section1 from "@/components/homestay/Section1";
import Section2Loader from "@/components/homestay/Section2Loader";
import "@/styles/layoutHomeStay.css";

export default function HomestayList() {
  return (
    <div className="container">
      <Section1 />
      <Suspense fallback={<div className="py-5 text-center">Đang tải homestay...</div>}>
        <Section2Loader />
      </Suspense>
    </div>
  );
}
