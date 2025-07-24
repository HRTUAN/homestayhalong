import Link from "next/link";
import Image from "next/image";

export default function Section2({ homestays = [] }) {
  return (
    <div className="mb-4">
      <div className="container">
        <div className="row">
          {/* Cột trái: Bản đồ + lọc */}
          <div className="col-lg-3 sticky-top bg-white">
            <div className="position-relative w-100 d-none d-md-block">
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

            {/* <!-- Ẩn trên mobile --> */}
            <div className="border px-3 pb-3 d-none d-md-block ">
              <h6 className="my-3">Chọn lọc theo:</h6>
              <hr className="mt-0 mb-3" />
              <p className="fs-7 fw-bold mb-3">Điểm đánh giá của khách</p>
              <div className="d-grid gap-2">
                <a className="text-reset text-decoration-none cursor-pointer fs-7 fw-normal d-flex align-items-center mb-2">
                  <div className="me-2 button-review"></div>
                  Tuyệt hảo: 9 điểm trở lên
                </a>
                <a className="text-reset text-decoration-none cursor-pointer fs-7 fw-normal d-flex align-items-center mb-2">
                  <div className="me-2 button-review"></div>
                  Rất tốt: 8 điểm trở lên
                </a>
                <a className="text-reset text-decoration-none cursor-pointer fs-7 fw-normal d-flex align-items-center mb-2">
                  <div className="me-2 button-review"></div>
                  Tốt: 7 điểm trở lên
                </a>
                <a className="text-reset text-decoration-none cursor-pointer fs-7 fw-normal d-flex align-items-center mb-2">
                  <div className="me-2 button-review"></div>
                  Dễ chịu: 6 điểm trở lên
                </a>
              </div>
            </div>

            {/* <!-- Hiện trên mobile --> */}
            <div className="d-flex justify-content-between text-center py-4 d-md-none text-primary fw-medium ">
              <div className="col d-flex align-items-center justify-content-center">
                <i className="bi bi-sort-down me-1"></i>
                <small className="fs-6">Sắp xếp</small>
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                <i className="bi bi-filter me-1"></i>
                <small className="fs-6">Lọc</small>
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                <i className="bi bi-map me-1"></i>
                <small className="fs-6">Bản đồ</small>
              </div>
            </div>
          </div>

          {/* Cột phải: danh sách homestay */}
          <div className="col-lg-9">
            <div className="row">
              <div className="col-12 mb-4">
                <h1 className="fs-5 fw-bold">Hạ Long: tìm thấy {homestays.length} chỗ nghỉ</h1>
              </div>

              <div className="col-12">
                <div className="container-home row">
                  {homestays.map((item) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-3 g-lg-2 g-1" key={item.slug}>
                      <Link href={`/homestay/${item.slug}`} className="text-reset text-decoration-none d-block h-100">
                        <div className="border rounded p-3 h-100 bg-white">
                          <div className="d-flex flex-column h-100">
                            <div className="row g-2 flex-grow-1">
                              {/* Ảnh */}
                              <div className="col-4 col-md-12">
                                <Image
                                  src={item.featuredImage}
                                  alt={item.title}
                                  className="img-fluid rounded w-100"
                                  style={{ height: "100%", maxHeight: 200, objectFit: "cover" }}
                                  width={800}
                                  height={200}
                                />
                              </div>

                              {/* Nội dung */}
                              <div className="col-8 col-md-12 d-flex flex-column">
                                {/* Nội dung chính */}
                                <div className="flex-grow-1">
                                  <div className="d-flex align-items-center mb-1 flex-wrap">
                                    <h3 className="fs-6 fw-bold primary-color m-0">{item.title}</h3>
                                  </div>

                                  <div className="d-flex align-items-center mb-1">
                                    <div className="rating-box text-white fs-9 fw-medium me-3" style={{ width: "28px", height: "28px" }}>
                                      {item.averageRating}
                                    </div>
                                    <p className="fs-8 text-muted mb-0">Rất tốt: ({item.comments.length} đánh giá)</p>
                                  </div>

                                  <div className="d-flex align-items-center gap-3 mb-1">
                                    <span className="primary-color fs-8 fw-bold text-decoration-underline cursor-pointer">Hạ Long</span>
                                    <span className="primary-color fs-8 fw-bold text-decoration-underline cursor-pointer">Xem trên bản đồ</span>
                                  </div>

                                  <p className="fs-8 text-muted my-1">Cách trung tâm 400m</p>

                                  <div
                                    className="d-flex align-items-center justify-content-start gap-2 text-primary fs-8 py-1 px-2 mb-2"
                                    style={{ backgroundColor: "#f0f6ff", maxWidth: "100px" }}
                                  >
                                    {/* SVG giữ nguyên */}
                                    <div dangerouslySetInnerHTML={{ __html: item.feature }} />
                                  </div>

                                  <hr className="my-3" style={{ color: "rgb(156, 156, 156)" }} />

                                  <p className="fs-8 fw-bold text-muted mb-0">Phòng Executive Giường Đôi/2 Giường Đơn Có Ban Công - 2 Ngày 1 Đêm</p>
                                  <p className="fs-8 text-muted mb-0">Nhiều loại giường đơn</p>

                                  <div className="mt-2">
                                    <p className="fs-8 fw-bold text-success mb-0">Bao bữa sáng</p>
                                    <ul className="list-unstyled mb-4">
                                      <li className="fs-8 text-success mb-0">
                                        <i className="fa fa-check me-2"></i>
                                        <strong>Miễn phí hủy</strong>
                                      </li>
                                      <li className="fs-8 text-success mb-0">
                                        <i className="fa fa-check me-2"></i>
                                        <strong>Không cần thanh toán trước</strong> – thanh toán tại chỗ nghỉ
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                {/* PHẦN GIÁ DƯỚI CÙNG */}
                                <div className="mt-auto">
                                  <div className="text-start text-md-end w-100">
                                    <p className="fs-8 m-0">1 đêm, 2 người lớn</p>
                                    <p className="fs-5 fw-bold price-color m-0">VND {item.roomPrice}</p>
                                    <p className="fs-8 m-0">Đã bao gồm thuế và phí</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                <button className="px-4 py-3 btn btn-outline-primary fw-bold fs-7 mt-3 bg-white border-primary text-primary d-block mx-auto">
                  Tất cả homestay ở Hạ Long
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
