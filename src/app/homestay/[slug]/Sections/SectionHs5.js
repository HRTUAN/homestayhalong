"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useRef } from "react";
import Image from "next/image";

const SectionHs5 = ({ homestay }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const images = homestay?.gallery || [];

  const openDetail = () => setShowDetail(true);

  const closeDetail = () => {
    setShowDetail(false);
    setThumbsSwiper(null); // reset Swiper instance khi đóng
  };

  return (
    <div id="availability" className="section-5 mb-5">
      <div className="container">
        <div className="row">
          {/* Header */}
          <div className="col-12">
            <div className="d-flex flex-lg-row flex-column justify-content-between">
              <h2 className="fw-bold fs-4">Xem loại phòng có sẵn</h2>
              <div className="d-flex gap-3 align-items-center">
                <i className="fa fa-tag fs-5 primary-color" role="button" title="Yêu thích"></i>
                <p className="fw-medium primary-color m-0">Chúng Tôi Luôn Khớp Giá!</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="col-12">
            <div className="table-responsive mt-3">
              <table className="table table-bordered text-center align-middle">
                <thead className="d-none d-md-table-header-group">
                  <tr>
                    <th className="bg-primary-bold text-white fs-7">Loại chỗ nghỉ</th>
                    <th className="bg-primary-bold text-white fs-7">Số lượng khách</th>
                    <th className="bg-primary-bold text-white fs-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="d-block d-md-table-row border mb-3 mb-md-0">
                    <td className="d-block d-md-table-cell text-start border-bottom border-md-0">
                      <div className="ms-3">
                        <a href="#" className="fw-bold fs-7 primary-color text-decoration-underline" onClick={openDetail}>
                          Phòng Giường đôi có phòng tắm riêng
                        </a>
                        <div className="text-muted fs-8 mt-1">
                          <i className="fa fa-bed me-1 text-secondary"></i> 1 giường đôi lớn
                        </div>
                      </div>
                    </td>
                    <td className="d-block d-md-table-cell py-2 py-md-0 border-bottom border-md-0 text-center">
                      <i className="fa fa-user"></i>
                      <i className="fa fa-user"></i>
                    </td>
                    <td className="d-block d-md-table-cell py-2 py-md-0 text-center">
                      <button className="btn btn-primary w-100 w-md-60 fw-bold fs-7" onClick={openDetail}>
                        Hiển thị chi tiết
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showDetail && (
        <>
          <div
            className="custom-detail-box position-fixed top-50 start-50 translate-middle bg-white p-4 shadow rounded-3"
            style={{ zIndex: 1050, maxHeight: "90vh", overflowY: "auto", width: "90%", maxWidth: "1000px" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Chi tiết phòng</h5>
              <button className="btn-close" onClick={closeDetail}></button>
            </div>

            <div className="row g-3">
              <div className="col-md-7">
                {/* Swiper chính hiển thị ảnh lớn */}
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={10}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  className="main-swiper mb-2"
                  style={{ borderRadius: 8 }}
                >
                  {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                      <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", borderRadius: 8, overflow: "hidden" }}>
                        <Image src={src} alt={`Ảnh phòng ${idx + 1}`} layout="fill" objectFit="cover" className="rounded" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Thumbnail */}
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {images.map((src, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: "relative",
                        width: 72,
                        height: 54,
                        border: activeIndex === idx ? "2px solid #007bff" : "2px solid #eee",
                        borderRadius: 6,
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setActiveIndex(idx);
                        swiperRef.current?.slideTo(idx);
                      }}
                    >
                      <Image src={src} alt={`Ảnh nhỏ ${idx + 1}`} layout="fill" objectFit="cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-5">
                <h3 className="fw-bold fs-5">Phòng Giường Đôi Có Phòng Tắm Riêng</h3>

                <div className="d-flex flex-wrap fs-8">
                  <div className="me-4 mb-2">
                    <i className="fa fa-ruler-combined me-2"></i>25 m²
                  </div>
                  <div className="me-4 mb-2">
                    <i className="fa fa-bed me-2"></i> 1 giường đôi lớn
                  </div>
                  <div className="me-4 mb-2">
                    <i className="fa fa-star me-2"></i> Giường thoải mái, 9.4 – Dựa trên 4 đánh giá
                  </div>
                  <div className="me-4 mb-2">
                    <i className="fa fa-eye me-2"></i> Nhìn ra biển, vườn, núi
                  </div>
                  <div className="me-4 mb-2">
                    <i className="fa fa-snowflake me-2"></i> Điều hòa không khí
                  </div>
                  <div className="me-4 mb-2">
                    <i className="fa fa-umbrella-beach me-2"></i> Ban công, Sân hiên, Sân trong
                  </div>
                  <div className="me-4 mb-2">
                    <i className="fa fa-wifi me-2"></i> WiFi miễn phí
                  </div>
                </div>

                <div className="d-flex align-items-center gap-1 my-2">
                  <h4 className="fw-bold fs-7 m-0">Diện tích</h4>
                  <p className="m-0 fs-7">25 m²</p>
                </div>

                <p className="fs-7">
                  <i className="fa fa-info-circle me-2"></i>
                  The double room offers air conditioning, a washing machine, a terrace with sea views as well as a private bathroom featuring a shower. The
                  unit offers 1 bed.
                </p>

                <h4 className="fw-bold fs-7 mb-3">Trong phòng tắm riêng của bạn:</h4>
                <div className="row fs-7 mb-3">
                  <div className="col-md-6" style={{ lineHeight: 1.8 }}>
                    <div>
                      <i className="fa fa-check me-2"></i>Đồ vệ sinh cá nhân miễn phí
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Vòi sen
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Chậu rửa vệ sinh (bidet)
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Nhà vệ sinh
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Khăn tắm
                    </div>
                  </div>
                  <div className="col-md-6" style={{ lineHeight: 1.8 }}>
                    <div>
                      <i className="fa fa-check me-2"></i>Dép
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Máy sấy tóc
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Khăn tắm/Bộ khăn trải giường (có thu phí)
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Giấy vệ sinh
                    </div>
                  </div>
                </div>

                <h4 className="fw-bold fs-7 mb-3">Hướng tầm nhìn:</h4>
                <div className="row fs-7 mb-3">
                  <div className="col-md-6" style={{ lineHeight: 1.8 }}>
                    <div>
                      <i className="fa fa-check me-2"></i>Nhìn ra biển
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Nhìn ra vườn
                    </div>
                  </div>
                  <div className="col-md-6" style={{ lineHeight: 1.8 }}>
                    <div>
                      <i className="fa fa-check me-2"></i>Nhìn ra núi
                    </div>
                  </div>
                </div>

                <h4 className="fw-bold fs-7 mb-3">Tiện nghi:</h4>
                <div className="row text-muted fs-7 mb-3">
                  <div className="col-md-6" style={{ lineHeight: 1.8 }}>
                    <div>
                      <i className="fa fa-check me-2"></i>Ban công
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Sân hiên
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Điều hòa không khí
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Máy giặt
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Ra trải giường
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Sản phẩm lau rửa
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Tủ lạnh
                    </div>
                  </div>
                  <div className="col-md-6" style={{ lineHeight: 1.8 }}>
                    <div>
                      <i className="fa fa-check me-2"></i>Quạt máy
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Ấm đun nước điện
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Khu vực ăn uống ngoài trời
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Sân trong
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Máy sấy quần áo
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Tủ/phòng để quần áo
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Giá treo quần áo
                    </div>
                    <div>
                      <i className="fa fa-check me-2"></i>Nước rửa tay
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-1 my-2">
                  <h4 className="fw-bold fs-7 m-0">Hút thuốc:</h4>
                  <p className="m-0 fs-7">Không hút thuốc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" style={{ zIndex: 1040 }} onClick={closeDetail}></div>
        </>
      )}
    </div>
  );
};

export default SectionHs5;
