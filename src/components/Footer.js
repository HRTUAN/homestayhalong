"use client";

import Link from "next/link";
import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer className="bg-light pt-5 pb-3" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container fs-7">
        <div className="row row-cols-2 row-cols-lg-5 g-4">
          <div>
            <h6 className="fw-bold">Hỗ trợ</h6>
            <ul className="list-unstyled mt-2">
              <li>Các câu hỏi thường gặp về virus corona (COVID-19)</li>
              <li>Quản lí các chuyến đi của bạn</li>
              <li>
                <Link href="https://homestayhalong.com/lien-he" className="text-decoration-none text-dark">
                  Liên hệ Dịch vụ Khách hàng
                </Link>
              </li>
              <li>Trung tâm thông tin bảo mật</li>
            </ul>
          </div>

          <div>
            <h6 className="fw-bold">Khám phá thêm</h6>
            <ul className="list-unstyled mt-2">
              <li>Chương trình khách hàng thân thiết Genius</li>
              <li>Ưu đãi theo mùa và dịp lễ</li>
              <li>Bài viết về du lịch</li>
              <li>homestayhalong.com dành cho Doanh Nghiệp</li>
              <li>Traveller Review Awards</li>
            </ul>
          </div>

          <div>
            <h6 className="fw-bold">Điều khoản và cài đặt</h6>
            <ul className="list-unstyled mt-2">
              <li>Bảo mật & Cookie</li>
              <li>Điều khoản và điều kiện</li>
              <li>Chính sách về Khả năng tiếp cận</li>
              <li>Tranh chấp đối tác</li>
              <li>Chính sách chống Nô lệ Hiện đại</li>
              <li>Chính sách về Quyền con người</li>
            </ul>
          </div>

          <div>
            <h6 className="fw-bold">Dành cho đối tác</h6>
            <ul className="list-unstyled mt-2">
              <li>Đăng nhập vào trang quản trị</li>
              <li>Trợ giúp đối tác</li>
              <li>Đăng chỗ nghỉ của Quý vị</li>
              <li>Trở thành đối tác phân phối</li>
            </ul>
          </div>

          <div>
            <h6 className="fw-bold">Về chúng tôi</h6>
            <ul className="list-unstyled mt-2">
              <li>
                <Link href="https://homestayhalong.com/about" className="text-decoration-none text-dark">
                  Về homestayhalong.com
                </Link>
              </li>
              <li>Chúng tôi hoạt động như thế nào</li>
              <li>Du lịch bền vững</li>
              <li>Truyền thông</li>
              <li>Cơ hội việc làm</li>
              <li>Quan hệ cổ đông</li>
              <li>Liên hệ công ty</li>
            </ul>
          </div>
        </div>

        <div className="d-flex align-items-center gap-4 mb-3 mt-4">
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundImage: "url('https://flagcdn.com/w40/vn.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <span>Tiếng Việt</span>
          <span className="fw-medium ms-auto">VND</span>
        </div>

        <hr />

        <div className="text-muted text-center small">
          <p className="mb-1">homestayhalong.com là một nền tảng cung cấp dịch vụ đặt chỗ nghỉ tại Hạ Long và các khu vực lân cận.</p>
          <p className="mb-0">Bản quyền © 2025 homestayhalong.com™. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
}
