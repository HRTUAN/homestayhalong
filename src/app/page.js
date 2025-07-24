import Section1 from "@/components/homepage/Section1";
import Section2 from "@/components/homepage/Section2";
import Section3 from "@/components/homepage/Section3";
import Section4 from "@/components/homepage/Section4";
import Section5 from "@/components/homepage/Section5";
import Section6 from "@/components/homepage/Section6";
import Section7 from "@/components/homepage/Section7";
import "../styles/homepage.css";
import { fetchRooms } from "@/lib/graphql";

export default async function HomePage() {
  const rooms = await fetchRooms();
  const homestays = rooms.map((room) => ({
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
    map: room.maplink,
    titlemap: room.titleMap,
    gallery: room.gallery,
    roomFaq: room.roomFaq,
    featuredImage: room.featuredImage?.node?.sourceUrl || "",
    comments: room.comments?.edges || [],
    facilities: room.facilities,
  }));

  return (
    <div>
      <Section1 homestays={homestays} />
      <Section2 homestays={homestays} />
      <Section3 homestays={homestays} />
      <Section4 homestays={homestays} />
      <Section5 homestays={homestays} />
      <Section6 homestays={homestays} />
      <Section7 homestays={homestays} />
    </div>
  );
}
