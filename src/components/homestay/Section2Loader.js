"use client";

import { useEffect, useState } from "react";
import Section2 from "./Section2";

export default function Section2Loader() {
  const [homestays, setHomestays] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/rooms");
      const rooms = await res.json();

      setHomestays(
        rooms.map((room) => ({
          title: room.title,
          slug: room.slug,
          roomPrice: room.roomPrice,
          feature: room.feature,
          averageRating: room.averageRating,
          featuredImage: room.featuredImage.node.sourceUrl,
          comments: room.comments?.edges || [],
        }))
      );
    };

    fetchData();
  }, []);

  if (!homestays) return <div className="py-5 text-center">Đang tải homestay...</div>;

  return <Section2 homestays={homestays} />;
}
