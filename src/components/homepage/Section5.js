import Image from "next/image";
import Link from "next/link";

export default function Section5({ homestays = [] }) {
  return (
    <div className="section-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-lg-row flex-column justify-content-between align-items-end mb-3">
              <h2 className="fs-lg-3 fs-4 fw-bold">Các homestay ở Hạ Long được đặt nhiều nhất tháng này</h2>
              <Link
                href="/homestay"
                className="fs-7 fw-bold primary-color py-2 px-4 text-center rounded ms-auto mt-2 mt-lg-0"
                style={{ border: "1px solid #006ce4" }}
              >
                Xem tất cả
              </Link>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="row">
              {homestays.map((homestay, index) => {
                const comment = homestay.comments?.[0]?.node;

                return (
                  <div className="col-lg-3 col-12" key={index}>
                    <Link href={`/homestay/${homestay.slug}`} className="text-decoration-none text-dark">
                      <div className="border rounded overflow-hidden h-100">
                        <Image src={homestay.featuredImage} alt="Homestay" width={270} height={200} className="w-100 rounded" style={{ objectFit: "cover" }} />

                        <div className="p-3 d-flex flex-column h-100">
                          <h5 className="fs-6 fw-bold mb-2">{homestay.title}</h5>

                          <p className="fs-7 text-muted mb-3 line-clamp-5" dangerouslySetInnerHTML={{ __html: homestay.content }}></p>

                          <div className="d-flex align-items-center fs-8 mb-2 price-color">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" className="me-2">
                              <path d="M24 12.75V6a.75.75 0 0 0-.75-.75H16.5a.75.75 0 0 0 0 1.5h6.75L22.5 6v6.75a.75.75 0 0 0 1.5 0m-1.28-7.28-7.94 7.939a.75.75 0 0 1-1.06 0l-3.13-3.129a2.25 2.25 0 0 0-3.181-.001h-.002L.22 17.47a.75.75 0 1 0 1.06 1.06l7.19-7.189a.75.75 0 0 1 1.06 0l3.129 3.128v.001a2.25 2.25 0 0 0 3.182 0l7.94-7.94a.75.75 0 0 0-1.061-1.06"></path>
                            </svg>
                            Phổ biến với khách đặt homestay ở Hạ Long
                          </div>

                          <div className="d-flex align-items-center">
                            <div className="rating-box text-white fs-9 fw-medium me-3" style={{ width: "28px", height: "28px" }}>
                              {homestay.averageRating || "?"}
                            </div>
                            <p className="fs-8 text-muted mb-0">Rất tốt: ({homestay.comments.length} đánh giá)</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
