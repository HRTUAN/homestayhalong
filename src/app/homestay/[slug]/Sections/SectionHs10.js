"use client";
import React from "react";

const SectionHs10 = ({ homestay }) => {
  if (!homestay?.rule) return null;

  return (
    <div id="policies" className="section-10 mb-5">
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column mb-4">
            <h2 className="fs-3 fw-bold">Quy tắc chung</h2>
            <p className="text-muted fs-6">{homestay.title} nhận yêu cầu đặc biệt - gửi yêu cầu trong bước kế tiếp!</p>
          </div>

          <div className="col-12 border d-flex py-4 px-3 px-md-5">
            <div className="w-100">
              {/* Render trực tiếp rule dưới dạng HTML */}
              <div dangerouslySetInnerHTML={{ __html: homestay.rule }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHs10;
