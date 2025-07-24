"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Section3({ homestays = [] }) {
  const [visibleReviews, setVisibleReviews] = useState({});

  const toggleReview = (id) => {
    setVisibleReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="section-3 mb-4">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="position-relative w-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8861.94588151413!2d107.08911165406607!3d20.952946366936587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a59e083472317%3A0xeaf494f74eb6a36b!2sVincom%20Plaza%20H%E1%BA%A1%20Long!5e0!3m2!1sen!2sus!4v1753190061025!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                className="w-100 border"
              />

              <button className="btn btn-primary position-absolute top-50 start-50 translate-middle w-70 fw-bold fs-7">Xem Homestay bản đồ</button>
            </div>

            <div className="border px-3 pb-3">
              <h6 className="my-3">Chọn lọc theo:</h6>
              <hr className="mt-0 mb-3" />
              <p className="fs-7 fw-bold mb-3">Điểm đánh giá của khách</p>
              <div className="d-grid gap-2">
                {["Tuyệt hảo: 9+", "Rất tốt: 8+", "Tốt: 7+", "Dễ chịu: 6+"].map((text, i) => (
                  <a key={i} className="text-reset text-decoration-none cursor-pointer fs-7 fw-normal d-flex align-items-center mb-2">
                    <div className="me-2 button-review"></div>
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Nội dung chính */}
          <div className="col-lg-9">
            <div className="row">
              <div className="col-12 mb-4">
                {/* Filter buttons */}
                <div className="d-none d-md-flex text-center">
                  {["Lựa chọn hàng đầu", "Ưu tiên giá thấp", "Xếp hạng & giá", "Đánh giá cao"].map((txt, i) => (
                    <button key={i} className={`filter-button flex-fill ${i === 0 ? "rounded-start active" : i === 3 ? "rounded-end" : ""}`}>
                      {txt}
                    </button>
                  ))}
                </div>

                <div className="d-md-none">
                  <div className="row g-2">
                    {["Lựa chọn hàng đầu", "Ưu tiên giá thấp", "Xếp hạng & giá", "Đánh giá cao"].map((txt, i) => (
                      <div key={i} className="col-6">
                        <button className={`filter-button w-100 ${i === 0 ? "rounded-start active" : i === 3 ? "rounded-end" : ""}`}>{txt}</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="container-home">
                  {homestays.map((homestay, index) => {
                    const comment = homestay.comments?.[0]?.node;
                    const reviewId = index;
                    return (
                      <div key={index} className="item-home border w-100 p-3 mb-3">
                        <div className="row">
                          <div className="col-12 col-md-3 mb-3 mb-md-0">
                            <Image
                              src={homestay.featuredImage}
                              alt={homestay.title}
                              className="img-fluid rounded w-100"
                              width={800}
                              height={200}
                              style={{ objectFit: "cover" }}
                            />
                          </div>

                          <div className="col-12 col-md-9">
                            <div className="d-md-flex justify-content-between">
                              <div className="pe-md-3 w-100">
                                <Link href={`/homestay/${homestay.slug}`} className="d-flex align-items-center mb-1 flex-wrap">
                                  <h3 className="fs-6 fw-bold primary-color m-0">{homestay.title}</h3>
                                  <div className="fs-9 ms-2" style={{ color: "#ffb700" }}>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                  </div>
                                </Link>

                                <div className="d-flex align-items-center mb-1">
                                  <svg viewBox="0 0 128 128" width="1em" height="1em" className="fs-5 me-1">
                                    <path d="M98.5 42.5a34.5 34.5 0 1 0-64.3 17.2L64 120l29.8-60.3a34.2 34.2 0 0 0 4.7-17.2zM64 59.7a17.2 17.2 0 1 1 17-17 17.2 17.2 0 0 1-17 17z"></path>
                                  </svg>
                                  <p className="fs-7 mb-0">{homestay.titlemap}</p>
                                </div>

                                <p className="fs-7 line-clamp-5" dangerouslySetInnerHTML={{ __html: homestay.content }}></p>

                                <hr className="mt-0 mb-3" style={{ color: "rgb(156, 156, 156)" }} />

                                {visibleReviews[reviewId] && (
                                  <div className="review-box">
                                    <div className="d-flex align-items-center gap-2 fs-9 mb-2">
                                      {comment && (
                                        <>
                                          <div
                                            className="d-flex align-items-center justify-content-center rounded-circle text-white"
                                            style={{ width: "24px", height: "24px", backgroundColor: "#595959" }}
                                          >
                                            {comment.author?.name?.[0] || "?"}
                                          </div>
                                          <span className="fw-bold">{comment.author?.name || "Ẩn danh"}</span>
                                          <Image src="https://flagcdn.com/w40/vn.png" alt="VN" width={20} height={14} />
                                          <span className="text-muted">Việt Nam</span>
                                        </>
                                      )}
                                    </div>

                                    <p className="fs-7 mb-2" dangerouslySetInnerHTML={{ __html: comment?.content || "" }}></p>
                                  </div>
                                )}

                                {comment?.content?.length > 80 && (
                                  <button
                                    className="fs-9 primary-color text-decoration-underline cursor-pointer border-0 bg-transparent p-0"
                                    onClick={() =>
                                      setVisibleReviews((prev) => ({
                                        ...prev,
                                        [reviewId]: !prev[reviewId],
                                      }))
                                    }
                                  >
                                    {visibleReviews[reviewId] ? "Hiển thị ít hơn" : "Hiển thị thêm"}
                                  </button>
                                )}
                              </div>

                              <div className="d-flex flex-lg-column flex-row-reverse justify-content-between text-md-end w-100 w-md-auto mt-3 mt-md-0">
                                <div className="d-flex justify-content-md-end align-items-center">
                                  <div className="text-start text-md-end">
                                    <p className="fs-6 fw-bold m-0 lh-1">Xuất sắc</p>
                                    <p className="fs-8 m-0">{homestay.comments.length} đánh giá</p>
                                  </div>
                                  <div className="rating-box text-white ms-2">{homestay.averageRating || "?"}</div>
                                </div>

                                <div className="text-start text-md-end">
                                  <p className="fs-8 m-0">Giá từ</p>
                                  <p className="fs-5 fw-bold price-color m-0">{homestay.roomPrice}</p>
                                  <p className="fs-8 m-0">1 đêm, 2 người lớn</p>
                                </div>
                              </div>
                            </div>
                            <Link href={`/homestay/${homestay.slug}`} className="d-flex align-items-center mb-1 flex-wrap">
                              <button className="btn btn-primary fw-bold fs-7 w-md-30 d-block ms-auto mt-3">Kiểm tra phòng trống</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <Link href="/homestay/" className="d-flex align-items-center mb-1 flex-wrap">
                    <button className="btn btn-primary fw-bold fs-7 w-100">Tất cả homestay ở Hạ Long</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
