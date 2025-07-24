"use client";

import { useEffect, useState } from "react";

const landmarksAround = [
  { name: "Hiho", lat: 20.963016, lon: 107.092824 },
  { name: "Bảo tàng Quảng Ninh", lat: 20.972935, lon: 107.082406 },
  { name: "Ngã Ba Kênh Liêm", lat: 20.957125, lon: 107.093498 },
  { name: "Công Viên Nước Hạ Long", lat: 20.955, lon: 107.08 },
  { name: "Công Viên Hoa Hạ Long", lat: 20.9503, lon: 107.08 },
  { name: "Khu Vui Chơi Yết Kiêu", lat: 20.9532, lon: 107.083 },
  { name: "Công Viên Đại Dương", lat: 20.94121, lon: 107.08 },
  { name: "Quảng Trường Mặt Trời", lat: 20.939, lon: 107.077 },
  { name: "Công Viên", lat: 20.95, lon: 107.07 },
];

const landmarksRestaurants = [
  { name: "My Cocktail", lat: 20.9512, lon: 107.036 },
  { name: "Karaoke Top One", lat: 20.9507, lon: 107.0372 },
  { name: "Bao Nam Coffee", lat: 20.9495, lon: 107.0385 },
];

const landmarksAirports = [
  { name: "Sân bay Vân Đồn", lat: 21.1175, lon: 107.4279 },
  { name: "Sân bay Cát Bi", lat: 20.8194, lon: 106.7247 },
];

function extractLatLon(maplink) {
  const latMatch = maplink.match(/!3d([\d.]+)/);
  const lonMatch = maplink.match(/!2d([\d.]+)/);
  if (latMatch && lonMatch) {
    const lat = parseFloat(latMatch[1]);
    const lon = parseFloat(lonMatch[1]);
    return { lat, lon };
  }
  return null;
}

async function getDistanceFromOSRM(originLat, originLon, destLat, destLon, retry = 2) {
  const origin = `${originLon},${originLat}`;
  const destination = `${destLon},${destLat}`;
  const url = `https://router.project-osrm.org/route/v1/driving/${origin};${destination}?overview=false`;

  try {
    const res = await fetch(url);
    const json = await res.json();
    if (json.code === "Ok") {
      const meters = json.routes[0].distance;
      return (meters / 1000).toFixed(1) + " km";
    }
  } catch (err) {
    console.error("Lỗi khi tính khoảng cách:", err);
    if (retry > 0) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return getDistanceFromOSRM(originLat, originLon, destLat, destLon, retry - 1);
    }
  }
  return "N/A";
}

// Gọi lần lượt từng điểm để tránh bị chặn
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const fetchGroupSequentially = async (group, originLat, originLon) => {
  const results = [];
  for (const item of group) {
    const distance = await getDistanceFromOSRM(originLat, originLon, item.lat, item.lon);
    results.push({ name: item.name, distance });
    await delay(300); // Delay giữa các request
  }
  return results;
};

const SectionHs8 = ({ homestay }) => {
  const [distancesAround, setDistancesAround] = useState([]);
  const [distancesRestaurants, setDistancesRestaurants] = useState([]);
  const [distancesAirports, setDistancesAirports] = useState([]);

  const maplink = homestay.maplink;

  useEffect(() => {
    const coords = extractLatLon(maplink);
    if (!coords) return;

    const { lat: originLat, lon: originLon } = coords;

    const fetchAll = async () => {
      const around = await fetchGroupSequentially(landmarksAround, originLat, originLon);
      setDistancesAround(around);

      const restaurants = await fetchGroupSequentially(landmarksRestaurants, originLat, originLon);
      setDistancesRestaurants(restaurants);

      const airports = await fetchGroupSequentially(landmarksAirports, originLat, originLon);
      setDistancesAirports(airports);
    };

    fetchAll();
  }, [maplink]);

  return (
    <div id="activities" className="section-8 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <h2 className="fs-3 fw-bold">Xung quanh chỗ nghỉ</h2>
          </div>

          <div className="col-lg-12">
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                src={maplink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="around-section mt-5">
            <div className="around-column">
              <h5>
                <i className="fa fa-map-marker-alt me-2"></i>Xung quanh có gì?
              </h5>
              <ul>
                {distancesAround.length > 0 ? (
                  distancesAround.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <span>{item.distance}</span>
                    </li>
                  ))
                ) : (
                  <li>Đang tính khoảng cách...</li>
                )}
              </ul>
            </div>

            <div className="around-column">
              <h5>
                <i className="fa fa-coffee me-2"></i>Nhà hàng & quán cà phê
              </h5>
              <ul>
                {distancesRestaurants.length > 0 ? (
                  distancesRestaurants.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <span>{item.distance}</span>
                    </li>
                  ))
                ) : (
                  <li>Đang tính khoảng cách...</li>
                )}
              </ul>
            </div>

            <div className="around-column">
              <h5>
                <i className="fa fa-plane me-2"></i>Các sân bay gần nhất
              </h5>
              <ul>
                {distancesAirports.length > 0 ? (
                  distancesAirports.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <span>{item.distance}</span>
                    </li>
                  ))
                ) : (
                  <li>Đang tính khoảng cách...</li>
                )}
              </ul>
            </div>

            <p className="fs-8 text-muted">Con số hiển thị là khoảng cách đi bộ hoặc đi xe ước tính ngắn nhất, khoảng cách thực tế có thể khác.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHs8;
