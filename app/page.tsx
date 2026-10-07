"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = (scrollTop / scrollableHeight) * 100;

      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const carPosition = (scrollPercent / 60) * 800;

  console.log("Scroll Percent:", scrollPercent, "new", carPosition);

  return (
    <div className="grid h-[50rem] flex-col overflow-hidden  items-center bg-gradient-to-b from-[#c09af5] to-[#8a8ff6] text-white">
      <div className="flex shrink-0 justify-end gap-4 mr-[8rem]">
        {carPosition >= 300 && (
          <div className="bg-[lab(98_-8.25_29.98)] sticky text-black p-4 px-[2rem] pt-[2rem] rounded-lg shadow-lg h-[12rem]">
            <h1 className="text-[4rem] font-bold">58%</h1>
            <p>Increase in pick up point use</p>
          </div>
        )}
        {carPosition >= 400 && (
          <div className="bg-[lab(89_13.24_-4.19)] sticky text-black p-4 px-[2rem] pt-[2rem] rounded-lg shadow-lg h-[12rem]">
            <h1 className="text-[4rem] font-bold">27%</h1>
            <p>Increase in pick up point use</p>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col bg-white relative text-center justify-center text-2xl font-bold text-black w-[100%]">
        <div className="relative h-[100%] ">
          <div
            style={{
              background: "black",
              position: "absolute",
              top: "0rem",
              display: "flex",
              left: `${carPosition}px`,
              paddingLeft: "1rem",
              width: "100%",
              height: "10.7rem",
              marginLeft: "6rem",
            }}
          ></div>
          <Image
            src="/car.png"
            alt="Car"
            width={250}
            height={200}
            className="absolute"
            style={{
              left: `${carPosition}px`,
              top: "50%",
              width: "24rem",
              height: "17.5rem",
              marginTop: "-4rem",
              filter: "drop-shadow(9px 8px 12px black)",
            }}
          />
        </div>
        <h1 className="text-[8rem] shadow-lg ">WELCOME ITZFIZZ</h1>
      </div>

      <div className="flex shrink-0 justify-end gap-4 mr-[12rem]">
        {carPosition >= 300 && (
          <div className="bg-[#f0f0f0] text-black p-4 px-[2rem] pt-[2rem] rounded-lg shadow-lg h-[12rem]">
            <h1 className="text-[4rem] font-bold">23%</h1>
            <p>Decreased in customer phone calls</p>
          </div>
        )}
        {carPosition > 700 && (
          <div className="bg-[#c1f7f1] text-black p-4 px-[2rem] pt-[2rem] rounded-lg shadow-lg h-[12rem]">
            <h1 className="text-[4rem] font-bold">40%</h1>
            <p>Decreased in customer phone calls</p>
          </div>
        )}
      </div>
    </div>
  );
}
