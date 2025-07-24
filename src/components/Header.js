"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/header.css";

export default function Header() {
  const pathname = usePathname();
  useEffect(() => {
    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuToggle && closeMenu && mobileMenu) {
      menuToggle.onclick = () => mobileMenu.classList.add("show");
      closeMenu.onclick = () => mobileMenu.classList.remove("show");
    }
  }, []);

  return (
    <header style={{ backgroundColor: "#003b95" }}>
      <div className="container d-flex justify-content-between align-items-center py-2">
        <Link href="/" className="text-white text-decoration-none fw-bold fs-4">
          BookingFake
        </Link>

        {/* Desktop */}
        <div className="d-none d-md-flex align-items-center gap-3">
          <span className="text-white small fw-bold fs-6">VND</span>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundImage: "url('https://flagcdn.com/w40/vn.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            title="Vietnam"
          ></div>
          <Link href="/register" className="btn-header text-decoration-none">
            Đăng ký
          </Link>
          <Link href="/login" className="btn-header text-decoration-none">
            Đăng nhập
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div className="d-flex d-md-none align-items-center">
          <i className="bi bi-list text-white fs-3" id="menuToggle" style={{ cursor: "pointer" }}></i>
        </div>
      </div>

      {/* Mobile offcanvas */}
      <div id="mobileMenu" className="offcanvas-custom">
        <div className="offcanvas-header d-flex justify-content-end align-items-center px-3 py-2 border-bottom">
          <i className="bi bi-x fs-4" id="closeMenu" style={{ cursor: "pointer" }}></i>
        </div>
        <div className="py-2 ps-3 d-flex flex-column gap-3">
          <h2 className="fs-3 fw-bold ms-3">Khác</h2>
          <div className="p-3 d-flex flex-column gap-3">
            {[
              ["VND", "Đồng Việt Nam"],
              ["🇻🇳", "Tiếng Việt"],
              ["bi-headset", "Liên hệ Dịch vụ Khách hàng"],
              ["bi-gift", "Ưu đãi theo mùa và dịp lễ"],
              ["bi-info-circle", "Về Booking.com"],
              ["bi-file-earmark-text", "Điều khoản và điều kiện"],
              ["bi-megaphone", "Truyền thông"],
            ].map((item, index) => (
              <div key={index} className="d-flex align-items-center gap-4" style={{ minHeight: 32 }}>
                {item[0].startsWith("bi-") ? <i className={`bi ${item[0]} fs-5`} style={{ width: 24 }}></i> : <span style={{ width: 24 }}>{item[0]}</span>}
                <span className="fs-7">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll nav */}
      <div className="container px-0">
        <div className="d-flex overflow-auto gap-2 pt-2 pb-3 px-3 nav-scroll ms-lg-0 ms-2">
          {[
            ["/", "fa-hotel", "Lưu trú"],
            ["/homestay", "fa-home", "Home stay"],
            ["/hotels", "fa-map-marked-alt", "Khách sạn"],
            ["/cars", "fa-car", "Thuê xe"],
            ["/activities", "fa-umbrella-beach", "Hoạt động"],
            ["/taxi", "fa-taxi", "Taxi sân bay"],
          ].map(([href, icon, label], index) => (
            <Link
              key={index}
              href={href}
              className={`nav-pill-item d-flex align-items-center gap-2 px-4 py-2 text-decoration-none ${
                pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""
              }`}
            >
              <i className={`fa ${icon} fs-6`}></i>
              <span className="small">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
