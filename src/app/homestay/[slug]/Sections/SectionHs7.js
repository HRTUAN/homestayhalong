"use client";
import { useState } from "react";

const SectionHs7 = ({ room }) => {
  const [openIndexesLeft, setOpenIndexesLeft] = useState([]);
  const [openIndexesRight, setOpenIndexesRight] = useState([]);
  const [showMoreMobile, setShowMoreMobile] = useState(false);

  const questions = room?.roomFaq || [];

  const mid = Math.ceil(questions.length / 2);
  const firstHalf = questions.slice(0, mid);
  const secondHalf = questions.slice(mid);

  const renderQuestions = (items, openIndexes, setOpenIndexes) =>
    items.map((item, index) => {
      const isOpen = openIndexes.includes(index);
      const toggleOpen = () => {
        setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
      };

      return (
        <div key={index} className="p-3 d-flex flex-column question-item border-bottom mx-2">
          <div className="d-flex justify-content-between align-items-center cursor-pointer" onClick={toggleOpen}>
            <div className="d-flex align-items-center flex-grow-1 gap-3">
              <i className="far fa-comments"></i>
              <h5 className="fs-7 m-0 flex-grow-1">{item.question}</h5>
            </div>
            <i className={`bi bi-chevron-down fs-6 transition ${isOpen ? "rotate" : ""}`}></i>
          </div>
          {isOpen && <p className="fs-7 mb-0 mt-4">{item.answer}</p>}
        </div>
      );
    });

  if (!questions.length) return null;

  return (
    <div id="fqa_cus" className="section-7 mb-5">
      <div className="container">
        <h2 className="fs-3 fw-bold mb-3">Thắc mắc của du khách</h2>
        <div className="row g-3">
          <div className="col-lg-6 col-12">
            <div className="border rounded overflow-hidden">{renderQuestions(firstHalf, openIndexesLeft, setOpenIndexesLeft)}</div>
          </div>
          <div className={`col-lg-6 col-12 ${showMoreMobile ? "d-block" : "d-none"} d-lg-block`}>
            <div className="border rounded overflow-hidden">{renderQuestions(secondHalf, openIndexesRight, setOpenIndexesRight)}</div>
          </div>
        </div>

        {/* Nút show more mobile */}
        <div className="d-lg-none text-center mt-3">
          <button className="btn btn-outline-primary" onClick={() => setShowMoreMobile(!showMoreMobile)}>
            {showMoreMobile ? "Thu gọn câu hỏi" : "Xem thêm câu hỏi"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionHs7;
