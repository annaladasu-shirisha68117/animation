"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0,
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const carProgress = Math.min(scrollPercent / 100, 1);

  return (
    <div className="h-[200vh]">
      <section className="sticky top-0 flex h-screen flex-col overflow-hidden  text-white">
        <div className="absolute right-[8rem] top-8 z-10 flex gap-4">
          <div
            className={`h-[12rem] rounded-lg bg-[lab(98_-8.25_29.98)] p-4 px-[2rem] pt-[2rem] text-black shadow-lg transition-opacity duration-300 ${
              carProgress >= 0.225 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-[4rem] font-bold">58%</h1>
            <p>Increase in pick up point use</p>
          </div>
          <div
            className={`h-[12rem] rounded-lg bg-[lab(89_13.24_-4.19)] p-4 px-[2rem] pt-[2rem] text-black shadow-lg transition-opacity duration-300 ${
              carProgress >= 0.3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-[4rem] font-bold">27%</h1>
            <p>Increase in pick up point use</p>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center bg-linear-to-b from-[#c09af5] to-[#8a8ff6] text-center text-2xl font-bold text-black">
          <div
            style={{
              background: "black",
              position: "absolute",
              top: "36.5%",
              width: "100%",
              height: "12.3rem",
              marginLeft: "10rem",
              left: `${carProgress * 80}%`,
            }}
          />
          <Image
            src="/car.png"
            alt="Car"
            width={250}
            height={200}
            className="absolute"
            style={{
              left: `${carProgress * 113}%`,
              transform: `translate(-${carProgress * 100}%, -50%)`,
              top: "50%",
              width: "24rem",
              height: "17.5rem",
              filter: "drop-shadow(9px 8px 12px black)",
            }}
          />
          <h1
            className="text-[8rem] bg-amber-100 shadow-lg"
            style={{ width: "100%", padding: "0.8rem 0rem" }}
          >
            WELCOME ITZFIZZ
          </h1>
        </div>

        <div className="absolute bottom-8 right-[12rem] z-10 flex gap-4">
          <div
            className={`h-[12rem] rounded-lg bg-[#f0f0f0] p-4 px-[2rem] pt-[2rem] text-black shadow-lg transition-opacity duration-300 ${
              carProgress >= 0.225 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-[4rem] font-bold">23%</h1>
            <p>Decreased in customer phone calls</p>
          </div>
          <div
            className={`h-[12rem] rounded-lg bg-[#c1f7f1] p-4 px-[2rem] pt-[2rem] text-black shadow-lg transition-opacity duration-300 ${
              carProgress >= 0.525 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-[4rem] font-bold">40%</h1>
            <p>Decreased in customer phone calls</p>
          </div>
        </div>
      </section>
    </div>
  );
}
