"use client";

import { useEffect } from "react";

const SectionHs1 = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".section-nav a");

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        links.forEach((l) => l.classList.remove("border-primary"));
        this.classList.add("border-primary");

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    if (links.length > 0) {
      links[0].classList.add("border-primary");
    }

    return () => {
      links.forEach((link) => {
        link.replaceWith(link.cloneNode(true));
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="general" className="section-1 mb-lg-3 mb-0 position-relative">
      <div className="container px-0">
        <div className="row">
          <div className="col-12 mb-4">
            <nav className="mt-3 ms-2">
              <div className="d-flex flex-wrap fs-8">
                <p className="mb-0 me-3 primary-color">Trang chủ</p>
                <i className="bi bi-chevron-right me-3 text-black fw-bold fs-9"></i>
                <p className="mb-0 me-3 primary-color">Homestay</p>
                <i className="bi bi-chevron-right me-3 text-black fw-bold fs-9"></i>
                <p className="mb-0 me-3 primary-color">Việt Nam</p>
                <i className="bi bi-chevron-right me-3 text-black fw-bold fs-9"></i>
                <p className="mb-0 me-3 primary-color">Hạ Long</p>
                <i className="bi bi-chevron-right me-3 text-black fw-bold fs-9"></i>
                <p className="mb-0 mt-lg-0 mt-2">Ưu đãi cho Kim An Homestay, Pizza - Cafe (Nhà khách) (Việt Nam)</p>
              </div>
            </nav>
          </div>

          <div className="col-12 d-lg-block d-none">
            <div className="row text-center fs-7 fw-semibold section-nav">
              {[
                { href: "#general", label: "Tổng quan" },
                { href: "#availability", label: "Thông tin & giá" },
                { href: "#facilities", label: "Tiện nghi" },
                { href: "#fqa_cus", label: "FQA" },
                { href: "#activities", label: "Hoạt động" },
                { href: "#policies", label: "Quy tắc chung" },
              ].map((item, i) => (
                <div className="col-2 px-0" key={i}>
                  <a href={item.href} className="d-block py-3 border-bottom border-1 border-transparent bg-body text-decoration-none fw-normal">
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="position-fixed bottom-0 end-0 m-3 bg-transparent border-0" style={{ zIndex: 1050 }} aria-label="Lên đầu trang">
        <i className="bi bi-arrow-up-circle-fill fs-2 text-primary"></i>
      </button>
    </div>
  );
};

export default SectionHs1;
