"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SectionHs3 = ({ homestay }) => {
  // console.log(homestay);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = Array.isArray(homestay.gallery) && homestay.gallery.length > 0 ? homestay.gallery : ["https://via.placeholder.com/600x400?text=No+Image"];

  const fallbackImage = "https://via.placeholder.com/400x300?text=No+Image";

  const getImage = (index) => images[index] || fallbackImage;

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showModal) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showModal, nextImage, prevImage]);

  return (
    <div className="section-3 mb-5">
      <div className="container">
        <div className="row">
          {/* Ảnh chính */}
          <div className="col-12 col-md-9">
            {/* Mobile Swiper */}
            <div className="d-block d-md-none mb-3">
              <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={10} className="mySwiper">
                {images.slice(0, 8).map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="position-relative">
                      <Image
                        src={src}
                        width={800}
                        height={600}
                        className="img-fluid w-100 rounded"
                        style={{ aspectRatio: "4/3", objectFit: "cover" }}
                        alt={`image-${idx}`}
                      />
                      {idx === 7 && images.length > 8 && (
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-50 rounded">
                          <span className="text-white text-decoration-underline fw-bold">+{images.length - 8} ảnh</span>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Layout */}
            <div className="d-none d-md-block">
              <div className="row gx-2 mb-3">
                {/* Ảnh lớn */}
                <div className="col-md-8 mb-2 mb-md-0">
                  <Image
                    src={getImage(0)}
                    width={800}
                    height={600}
                    className="img-fluid w-100 rounded"
                    style={{ aspectRatio: "4/3", objectFit: "cover", cursor: "pointer" }}
                    alt="Ảnh chính"
                    onClick={() => handleImageClick(0)}
                  />
                </div>

                {/* Hai ảnh phụ */}
                <div className="col-md-4 d-flex flex-column gap-2">
                  {[1, 2].map((i) => (
                    <Image
                      key={i}
                      src={getImage(i)}
                      width={400}
                      height={300}
                      className="img-fluid w-100 rounded"
                      style={{ height: "calc(50% - 4px)", objectFit: "cover", cursor: "pointer" }}
                      alt={`Ảnh phụ ${i}`}
                      onClick={() => handleImageClick(i)}
                    />
                  ))}
                </div>
              </div>

              {/* Nhóm ảnh nhỏ */}
              <div className="d-flex flex-wrap gap-2 mb-3">
                {images.slice(3, 7).map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    width={200}
                    height={100}
                    className="img-fluid rounded"
                    style={{ height: "100px", flex: "1 0 18%", objectFit: "cover", cursor: "pointer" }}
                    alt={`Ảnh nhỏ ${idx}`}
                    onClick={() => handleImageClick(idx + 3)}
                  />
                ))}

                {images.length > 7 && (
                  <div
                    className="position-relative rounded overflow-hidden"
                    style={{ height: "100px", flex: "1 0 18%", cursor: "pointer" }}
                    onClick={() => handleImageClick(7)}
                  >
                    <Image src={getImage(7)} width={200} height={100} className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} alt="Ảnh cuối" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-50">
                      <span className="text-white text-decoration-underline fw-bold">+{images.length - 8} ảnh</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* <!-- Sidebar --> */}
          <div className="col-12 col-md-3 d-flex flex-column justify-content-between">
            <div className="d-flex flex-column border mb-3">
              {/* <!-- Đánh giá --> */}
              <div className="d-flex border-bottom border-1 align-items-center justify-content-between justify-content-md-end p-2 m-2 flex-wrap">
                <div className="text-start text-md-end">
                  <p className="fs-6 fw-bold m-0 lh-1">Xuất sắc</p>
                  <p className="fs-8 m-0">{homestay.comments.length} đánh giá</p>
                </div>
                <div className="rating-box text-white ms-md-2 mt-2 mt-md-0">{homestay.averageRating}</div>
              </div>

              {/* <!-- Đoạn review --> */}
              <div className="p-2 border-bottom border-1">
                <p className="fs-7 fw-bold mb-2">Khách lưu trú ở đây thích điều gì?</p>
                <div className="p-1">
                  <p className="fs-7 mb-3">“{homestay.comments?.[0]?.node?.content?.replace(/<\/?[^>]+(>|$)/g, "") || ""}”</p>

                  <div className="d-flex align-items-center gap-2">
                    <img src="https://i.pravatar.cc/40" alt="Avatar" className="rounded-circle" width={32} height={32} />

                    <div
                      className="rounded-circle"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundImage: "url('https://flagcdn.com/w40/vn.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>

                    <span className="fs-7">Việt Nam</span>
                  </div>
                </div>
              </div>

              {/* <!-- Điểm phục vụ --> */}
              <div className="p-2 d-flex align-items-center justify-content-between m-2">
                <p className="fw-bold fs-7 m-0">Nhân viên phục vụ</p>
                <div
                  className="rating-box text-black ms-2"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid rgb(39, 39, 39)",
                  }}
                >
                  10
                </div>
              </div>
            </div>

            {/* <!-- Bản đồ --> */}
            <div className="position-relative w-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.448810891853!2d107.12744558543301!3d20.939675863491736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a574e23963053%3A0x6da71172fc87ac93!2sKim%20An%20Homestay%2C%20Pizza%20-%20Caf%C3%A9!5e0!3m2!1sen!2s!4v1753106088039!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <button className="btn btn-primary position-absolute top-50 start-50 translate-middle w-75 fw-bold fs-7">Xem Homestay trên bản đồ</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Gallery */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", zIndex: 9999 }}
          onClick={closeModal}
        >
          <div className="position-relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="btn btn-light position-absolute top-0 end-0 rounded-circle"
              style={{ width: "40px", height: "40px", zIndex: 10000, transform: "translate(50%, -50%)" }}
              onClick={closeModal}
            >
              <i className="fa fa-times"></i>
            </button>

            <button
              className="btn btn-light position-absolute top-50 start-0 translate-middle-y rounded-circle"
              style={{ width: "50px", height: "50px", zIndex: 10000, transform: "translateX(-50%)" }}
              onClick={prevImage}
            >
              <i className="fa fa-chevron-left"></i>
            </button>

            <button
              className="btn btn-light position-absolute top-50 end-0 translate-middle-y rounded-circle"
              style={{ width: "50px", height: "50px", zIndex: 10000, transform: "translateX(50%)" }}
              onClick={nextImage}
            >
              <i className="fa fa-chevron-right"></i>
            </button>

            <Image
              src={getImage(selectedImageIndex)}
              width={800}
              height={600}
              className="img-fluid rounded"
              style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
              alt={`Gallery image ${selectedImageIndex + 1}`}
            />

            <div
              className="position-absolute bottom-0 start-50 translate-middle-x bg-dark text-white px-3 py-1 rounded"
              style={{ transform: "translate(-50%, 50%)" }}
            >
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionHs3;
