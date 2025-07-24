"use client";

import { useEffect } from "react";

const facilityIcons = {
  "Cực kỳ phù hợp cho kỳ lưu trú của bạn": "fa-star",
  "Phòng tắm": "fa-bath",
  "Phòng ngủ": "fa-bed",
  "Tầm nhìn": "fa-eye",
  "Ngoài trời": "fa-tree",
  "Nhà bếp": "fa-utensils",
  "Tiện ích trong phòng": "fa-ellipsis-h",
  "Vật nuôi": "fa-paw",
  "Hoạt động": "fa-calendar",
  "Đồ ăn & thức uống": "fa-mug-hot",
  Internet: "fa-wifi",
  "Chỗ đậu xe": "fa-car",
  "Tổng quát": "fa-cogs",
  "Ngôn ngữ được sử dụng": "fa-language",
};

const SectionHs9 = ({ homestay }) => {
  useEffect(() => {
    const toggleBtn = document.getElementById("toggleAmenityBtn");
    const toggleCols = document.querySelectorAll(".mobile-toggle");

    const handleToggle = (e) => {
      e.preventDefault();
      toggleCols.forEach((col) => col.classList.toggle("d-none"));
      toggleBtn.textContent = toggleBtn.textContent === "Xem thêm tiện nghi" ? "Ẩn bớt tiện nghi" : "Xem thêm tiện nghi";
    };

    toggleBtn?.addEventListener("click", handleToggle);

    return () => {
      toggleBtn?.removeEventListener("click", handleToggle);
    };
  }, [homestay.facilities]);

  return (
    <div className="section-9 mb-5" id="facilities">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fs-3 fw-bold">Các tiện nghi {homestay.title}</h2>
            <p className="text-muted fs-6">Tiện nghi tuyệt vời! Điểm đánh giá: {homestay.averageRating}</p>
          </div>

          <div>
            <p className="fw-bold">Các tiện nghi được ưa chuộng nhất</p>
            <div className="d-flex flex-wrap gap-4 mt-2">
              <div className="d-flex align-items-center gap-2">
                <i className="fa fa-wifi text-success"></i>
                <span className="text-dark fs-7">WiFi miễn phí</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fa fa-car text-success"></i>
                <span className="text-dark fs-7">Chỗ đỗ xe miễn phí</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fa fa-ban-smoking text-success"></i>
                <span className="text-dark fs-7">Phòng không hút thuốc</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fa fa-glass-martini-alt text-success"></i>
                <span className="text-dark fs-7">Quầy bar</span>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4 fs-7">
            {[0, 1, 2].map((col) => (
              <div className={`col ${col > 0 ? "d-none d-md-block mobile-toggle" : ""}`} key={col}>
                {homestay.facilities
                  ?.filter((_, idx) => idx % 3 === col)
                  .map((group, gIdx) => (
                    <div key={gIdx}>
                      <h6 className="fw-bold mb-3">
                        <i className={`fa ${facilityIcons[group.label] || "fa-check"} me-2`}></i>
                        {group.label}
                      </h6>
                      <ul className="list-unstyled mb-4">
                        {group.attributes?.map((item, i) => (
                          <li key={i}>
                            <i className="fa fa-check me-2"></i>
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            ))}

            <div className="col-12 d-block d-md-none text-start">
              <a href="#" className="text-decoration-underline p-0 fs-6 fw-medium primary-color" id="toggleAmenityBtn">
                Xem thêm tiện nghi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHs9;
