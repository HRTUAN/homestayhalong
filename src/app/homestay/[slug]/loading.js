export default function Loading() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Đang tải...</span>
          </div>
          <h5 className="text-muted">Đang tải thông tin homestay...</h5>
        </div>
      </div>
    </div>
  );
}
