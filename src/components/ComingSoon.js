"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "@/styles/comingsoon.css";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const now = new Date();
    const launchDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000).getTime();

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const gap = launchDate - currentTime;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = String(Math.floor(gap / day)).padStart(2, "0");
      const hours = String(Math.floor((gap % day) / hour)).padStart(2, "0");
      const minutes = String(Math.floor((gap % hour) / minute)).padStart(2, "0");
      const seconds = String(Math.floor((gap % minute) / second)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });

      if (gap < 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="coming-container p-3">
      <Image src="/beach-water-img.jpg" alt="Coming Soon" className="coming-image" width={1920} height={1080} />

      <header className="coming-header">Coming Soon Page</header>
      <p className="coming-desc">Our website is under construction. We&apos;re working hard to improve our website and we&apos;ll be ready to launch soon.</p>

      <div className="coming-time-group">
        <div className="coming-time">
          <span className="coming-number">{timeLeft.days}</span>
          <span className="coming-text">days</span>
        </div>
        <div className="coming-time">
          <span className="coming-number">{timeLeft.hours}</span>
          <span className="coming-text">hours</span>
        </div>
        <div className="coming-time">
          <span className="coming-number">{timeLeft.minutes}</span>
          <span className="coming-text">minutes</span>
        </div>
        <div className="coming-time">
          <span className="coming-number">{timeLeft.seconds}</span>
          <span className="coming-text">seconds</span>
        </div>
      </div>

      <div className="coming-email">
        <p className="coming-sub-text">Subscribe now to get the latest updates!</p>
        <div className="coming-input-box">
          <input type="email" placeholder="Enter your email" />
          <button>Notify Me</button>
        </div>
      </div>
    </section>
  );
}
