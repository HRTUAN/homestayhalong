import "@/styles/homestay.css";
import RoomFetcher from "./RoomFetcher";

export default function HomestayDetail({ params }) {
  return <RoomFetcher slug={params.slug} />;
}
