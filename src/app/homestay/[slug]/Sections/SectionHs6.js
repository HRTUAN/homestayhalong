"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import Image from "next/image";

const SectionHs6 = ({ homestay }) => {
  const comments = homestay?.comments || [];
  const averageRating = homestay?.averageRating || "0";

  useEffect(() => {
    const btn = document.getElementById("toggleMobileScores");
    const items = document.querySelectorAll(".d-mobile-toggle");
    let expanded = false;

    const toggle = () => {
      expanded = !expanded;
      items.forEach((el) => el.classList.toggle("d-none", !expanded));
      btn.innerText = expanded ? "Thu gọn" : "Hiển thị thêm";
    };

    btn?.addEventListener("click", toggle);
    return () => btn?.removeEventListener("click", toggle);
  }, []);

  return (
    <div id="fqa_cus" className="section-6 mb-5">
      <div className="container">
        <div className="row">
          <h2 className="fs-4 fw-bold mb-3">Đánh giá của khách</h2>

          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="rating-box text-white">{averageRating}</div>
            <div className="text-start text-md-end d-flex align-items-center gap-2">
              <p className="fs-6 fw-bold m-0">Xuất sắc</p> -<p className="fs-7 m-0">{comments.length} đánh giá</p>
            </div>
          </div>

          <p className="fs-6 fw-bold m-0">Hạng mục:</p>

          <div className="col-12">
            <div className="row g-3 text-muted fs-7">
              {/* <!-- Item 1 --> */}
              <div className="col-md-4">
                <div className="d-flex justify-content-between">
                  <div className="score-title">
                    Nhân viên phục vụ <i className="fa fa-arrow-up ms-1 text-success"></i>
                  </div>
                  <div className="score-value">10</div>
                </div>
                <div className="score-bar">
                  <div className="score-fill score-10" style={{ width: "100%" }}></div>
                </div>
              </div>

              {/* <!-- Item 2 --> */}
              <div className="col-md-4">
                <div className="d-flex justify-content-between">
                  <div className="score-title">Tiện nghi</div>
                  <div className="score-value">9,3</div>
                </div>
                <div className="score-bar">
                  <div className="score-fill" style={{ width: "93%" }}></div>
                </div>
              </div>

              {/* <!-- Item 3 --> */}
              <div className="col-md-4">
                <div className="d-flex justify-content-between">
                  <div className="score-title">
                    Sạch sẽ <i className="fa fa-arrow-up ms-1 text-success"></i>
                  </div>
                  <div className="score-value">10</div>
                </div>
                <div className="score-bar">
                  <div className="score-fill score-10" style={{ width: "100%" }}></div>
                </div>
              </div>

              {/* <!-- 3 item ẩn ở mobile --> */}
              <div className="col-md-4 d-none d-md-block d-mobile-toggle">
                <div className="d-flex justify-content-between">
                  <div className="score-title">
                    Thoải mái <i className="fa fa-arrow-up ms-1 text-success"></i>
                  </div>
                  <div className="score-value">10</div>
                </div>
                <div className="score-bar">
                  <div className="score-fill score-10" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="col-md-4 d-none d-md-block d-mobile-toggle">
                <div className="d-flex justify-content-between">
                  <div className="score-title">
                    Đáng giá tiền <i className="fa fa-arrow-up ms-1 text-success"></i>
                  </div>
                  <div className="score-value">10</div>
                </div>
                <div className="score-bar">
                  <div className="score-fill score-10" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="col-md-4 d-none d-md-block d-mobile-toggle">
                <div className="d-flex justify-content-between">
                  <div className="score-title">Địa điểm</div>
                  <div className="score-value">9,4</div>
                </div>
                <div className="score-bar">
                  <div className="score-fill score-10" style={{ width: "94%" }}></div>
                </div>
              </div>

              {/* <!-- Nút toggle mobile --> */}
              <div className="col-12 d-block d-md-none text-start mt-3">
                <a className="text-decoration-underline m-1 fs-6 fw-medium primary-color" id="toggleMobileScores">
                  Hiển thị thêm
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 mt-5 mb-3">
            <h5 className="fw-bold fs-6 mb-3">Khách lưu trú ở đây thích điều gì?</h5>

            {comments.length === 0 ? (
              <p className="text-muted">Chưa có đánh giá nào.</p>
            ) : (
              <div className="position-relative">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                  }}
                  pagination={{ clickable: true }}
                  spaceBetween={24}
                  slidesPerView={1}
                  breakpoints={{
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                  }}
                  className="review-swiper"
                >
                  {comments.map(({ node }, idx) => {
                    const authorName = node.author?.name || "guest";
                    const avatarUrl = `https://i.pravatar.cc/40?u=${encodeURIComponent(authorName)}-${idx}`;

                    return (
                      <SwiperSlide key={idx}>
                        <div className="p-3 border rounded h-100">
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <div style={{ width: 32, height: 32, position: "relative" }} className="rounded-circle overflow-hidden">
                              <Image src={avatarUrl} alt="Avatar" fill style={{ objectFit: "cover" }} />
                            </div>
                            <span className="fs-7 fw-bold">{authorName}</span>
                          </div>
                          <p className="fs-7 mb-0 line-clamp-5" dangerouslySetInnerHTML={{ __html: node.content }}></p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className="swiper-button-prev-custom position-absolute top-50 start-0 translate-middle-y">
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div className="swiper-button-next-custom position-absolute top-50 end-0 translate-middle-y">
                  <i className="fa fa-chevron-right"></i>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHs6;
