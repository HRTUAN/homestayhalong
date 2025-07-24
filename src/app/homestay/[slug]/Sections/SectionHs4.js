const SectionHs4 = ({ homestay }) => {
  const description = homestay.content || "";
  return (
    <div className="section-4 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 my-lg-0 my-2">
            <div className="fs-7">
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <div className="">
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
          </div>
          <div className="col-lg-4 col-12 my-lg-0 my-2">
            <div className="border p-3 d-flex flex-column">
              <h3 className="fw-bold fs-4">Điểm nổi bật của chỗ nghỉ</h3>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-4">
                  <i className="fa fa-wifi mt-1 fs-5"></i>
                  <div>
                    <div className="fw-bold">WiFi miễn phí</div>
                    <div className="fs-7 text-muted">Dịch vụ Internet</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-4">
                  <i className="fa fa-eye mt-1 fs-5"></i>
                  <div>
                    <div className="fw-bold">Tầm nhìn</div>
                    <div className="fs-7 text-muted">Ban công, Nhìn ra biển, Tầm nhìn ra khung cảnh, Nhìn ra vườn</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-4">
                  <i className="fa fa-car mt-1 fs-5"></i>
                  <div>
                    <div className="fw-bold">Chỗ đậu xe</div>
                    <div className="fs-7 text-muted">Bãi đỗ xe miễn phí, Bãi đỗ xe trong khuôn viên</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-4">
                  <i className="fa fa-paw mt-1 fs-5"></i>
                  <div>
                    <div className="fw-bold">Thân thiện với vật nuôi</div>
                    <div className="fs-7 text-muted">Đón tiếp vật nuôi, Cho phép, không tính phí</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-4">
                  <i className="fa fa-kitchen-set mt-1 fs-5"></i>
                  <div>
                    <div className="fw-bold">Tiện nghi nhà bếp</div>
                    <div className="fs-7 text-muted">Ấm đun nước điện, Tủ lạnh</div>
                  </div>
                </div>
                <button className="btn btn-primary w-100 fw-bold fs-7">Đặt ngay</button>
                <button className="btn border-primary w-100 fw-bold fs-7 primary-color">
                  <i className="far fa-heart me-2"></i>
                  Lưu chỗ nghỉ
                </button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <hr className="mt-4 mb-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHs4;
