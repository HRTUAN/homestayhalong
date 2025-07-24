"use client";
import Image from "next/image";
import Link from "next/link";

const Section4 = () => {
  return (
    <div className="section-4 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="border">
              <div className="row flex-column-reverse flex-md-row">
                <div className="col-12 col-md-9">
                  <div className="d-flex flex-column p-3 h-100">
                    <h3 className="fs-5 fw-bold">Bạn đang tìm homestay?</h3>
                    <p className="fs-7">
                      Du khách với ngân sách ít, muốn trải nghiệm địa điểm như người địa phương sẽ rất thích homestay. Chỗ nghỉ đơn giản này là một ngôi nhà
                      riêng, nơi chủ nhà cùng sinh sống. Tất cả các tiện nghi đều dùng chung và hầu hết chỗ nghỉ đều có bao gồm bữa sáng.
                    </p>
                    <Link href="/homestay/" className="ps-0 pe-2 py-2 text-start me-auto w-100 w-md-25 fs-7 fw-bold primary-color">
                      Tìm homestay ở Hạ Long
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 200 }}>
                    <Image
                      src="/homestay-1.webp"
                      alt=""
                      fill
                      className="object-fit-cover rounded-end"
                      style={{
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
