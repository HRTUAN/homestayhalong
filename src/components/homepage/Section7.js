"use client";

import { useState } from "react";

const questions = [
  {
    question: "Các homestay ở Hạ Long giá bao nhiêu?",
    answer: "Trung bình, homestay ở Hạ Long có giá khoảng VND 645.000/đêm, tùy theo vị trí và tiện nghi.",
  },
  {
    question: "Homestay nào ở Hạ Long có view biển đẹp?",
    answer: "Một số homestay như Banana and Rose Homestay hoặc The Bay Ha Long Homestay có view biển rất đẹp và được nhiều khách đánh giá cao.",
  },
  {
    question: "Homestay nào ở Hạ Long phù hợp cho gia đình?",
    answer: "Những homestay có phòng rộng, tiện nghi bếp riêng và gần bãi biển như Little Colmar Homestay rất thích hợp cho gia đình.",
  },
  {
    question: "Homestay ở Hạ Long có phục vụ bữa sáng không?",
    answer: "Nhiều homestay ở Hạ Long có phục vụ bữa sáng miễn phí hoặc có tính phí nhẹ, bạn nên kiểm tra thông tin chi tiết khi đặt phòng.",
  },
  {
    question: "Có homestay nào gần bãi biển Bãi Cháy không?",
    answer: "Có, nhiều homestay nằm gần Bãi Cháy như AROMA Ha Long hoặc Green Homestay giúp bạn dễ dàng di chuyển ra biển.",
  },
  {
    question: "Có thể đặt homestay ở Hạ Long không cần thẻ tín dụng không?",
    answer: "Một số homestay cho phép đặt trước và thanh toán khi đến nơi, bạn có thể lọc theo tuỳ chọn này trên trang đặt phòng.",
  },
  {
    question: "Homestay ở Hạ Long có hồ bơi không?",
    answer: "Một vài homestay cao cấp có hồ bơi riêng hoặc hồ bơi trong khuôn viên chung cư, như Citadines Marina Halong.",
  },
  {
    question: "Nên đặt homestay ở khu vực nào tại Hạ Long?",
    answer: "Bạn có thể chọn khu Bãi Cháy nếu muốn gần bãi biển và khu vui chơi, hoặc Hòn Gai để trải nghiệm cuộc sống địa phương.",
  },
];

const QuestionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-3 d-flex flex-column question-item border-bottom">
      <div className="d-flex justify-content-between align-items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <h5 className="fs-6 fw-bold m-0">{question}</h5>
        <i className={`bi bi-chevron-down fs-6 fw-bold transition ${open ? "rotate" : ""}`}></i>
      </div>
      {open && <p className="fs-7 mb-0 mt-4">{answer}</p>}
    </div>
  );
};

const renderColumn = (items) => {
  return (
    <div className="border rounded overflow-hidden">
      {items.map((item, index) => (
        <QuestionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const Section7 = () => {
  const half = Math.ceil(questions.length / 2);
  const firstColumn = questions.slice(0, half);
  const secondColumn = questions.slice(half);

  return (
    <div className="section-7 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between mb-3">
              <h2 className="fs-3 fw-bold">Những câu hỏi thường gặp về homestay ở Hạ Long</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 col-12 mb-lg-0 mb-3">{renderColumn(firstColumn)}</div>
              <div className="col-lg-6 col-12">{renderColumn(secondColumn)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
