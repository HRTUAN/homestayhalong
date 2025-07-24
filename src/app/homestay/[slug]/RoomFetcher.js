"use client";

import { useEffect, useState } from "react";
import { fetchRooms } from "@/lib/graphql";
import SectionHs1 from "./Sections/SectionHs1";
import SectionHs2 from "./Sections/SectionHs2";
import SectionHs3 from "./Sections/SectionHs3";
import SectionHs4 from "./Sections/SectionHs4";
import SectionHs5 from "./Sections/SectionHs5";
import SectionHs6 from "./Sections/SectionHs6";
import SectionHs7 from "./Sections/SectionHs7";
import SectionHs8 from "./Sections/SectionHs8";
import SectionHs9 from "./Sections/SectionHs9";
import SectionHs10 from "./Sections/SectionHs10";

export default function RoomFetcher({ slug }) {
  const [homestay, setHomestay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms(slug).then((room) => {
      if (!room) return setHomestay(null);

      setHomestay({
        content: room.content,
        title: room.title,
        slug: room.slug,
        roomPrice: room.roomPrice,
        feature: room.feature,
        averageRating: room.averageRating,
        beds: room.beds,
        maxChildren: room.maxChildren,
        area: room.area,
        rule: room.rule,
        maplink: room.maplink,
        titlemap: room.titleMap,
        gallery: room.gallery,
        roomFaq: room.roomFaq,
        featuredImage: room.featuredImage?.node?.sourceUrl || "",
        comments: room.comments?.edges || [],
        facilities: room.facilities,
      });

      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return <div className="text-center py-5">Đang tải homestay...</div>;
  }

  if (!homestay) {
    return <div className="container mt-4">Không tìm thấy homestay</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <SectionHs1 homestay={homestay} />
        <SectionHs2 homestay={homestay} />
        <SectionHs3 homestay={homestay} />
        <SectionHs4 homestay={homestay} />
        <SectionHs5 homestay={homestay} />
        <SectionHs6 homestay={homestay} />
        <SectionHs7 homestay={homestay} />
        <SectionHs8 homestay={homestay} />
        <SectionHs9 homestay={homestay} />
        <SectionHs10 homestay={homestay} />
      </div>
    </div>
  );
}
