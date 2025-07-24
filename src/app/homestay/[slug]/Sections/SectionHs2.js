const SectionHs2 = ({ homestay }) => {
  const title = homestay?.title;
  const feature = homestay?.feature;
  const titlemap = homestay?.titlemap;

  return (
    <div className="section-2 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="d-flex justify-content-between flex-lg-row flex-column">
                <div className="mb-lg-0 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center gap-2 mb-2 text-primary fs-8 py-1 px-2 w-30"
                    style={{ backgroundColor: "#f0f6ff" }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: feature }} />
                  </div>
                  <h2 className="fs-4 fw-bold">{title}</h2>
                </div>
                <div className="d-flex align-items-center gap-4 mb-lg-0 mb-3">
                  <i className="bi bi-heart fs-5 primary-color" role="button" title="Yêu thích"></i>
                  <i className="bi bi-share fs-5 primary-color" role="button" title="Chia sẻ"></i>
                  <button className="btn btn-primary fw-bold fs-7 w-md-30 d-block">Đặt nhà khách của bạn</button>
                </div>
              </div>

              <div className="mb-3 d-flex justify-content-between flex-lg-row flex-column">
                <div className="mb-lg-0 mb-3">
                  <i className="fa-solid fa-location-dot primary-color"></i>
                  <span className="mx-2">{titlemap}</span>
                  <a href="#" className="fw-semibold text-decoration-underline fs-7 primary-color">
                    Vị trí xuất sắc - hiển thị bản đồ
                  </a>
                </div>
                <div className="d-flex gap-3 align-items-center mb-lg-0">
                  <i className="fa fa-tag fs-5 primary-color" role="button" title="Yêu thích"></i>
                  <p className="fw-medium primary-color m-0">Chúng Tôi Luôn Khớp Giá!</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHs2;
