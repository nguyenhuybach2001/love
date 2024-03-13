"use client";
import { useState } from "react";

import Image from "next/image";
import { Pacifico } from "next/font/google";
import { Button } from "antd";

const fontText = Pacifico({ subsets: ["latin"], weight: "400" });
export default function Home() {
  const [position, setPosition] = useState({
    x: 2,
    y: 2,
  });
  const [oce, setOce] = useState(false);
  const [gifVisible, setGifVisible] = useState(false);

  // Hàm xử lý sự kiện khi ấn vào button
  const handleButtonClick = () => {
    // Sinh ngẫu nhiên vị trí mới cho button
    let newX = Math.floor(Math.random() * window.innerWidth * 0.8);
    let newY = Math.floor(Math.random() * window.innerHeight * 0.8);

    setPosition({ x: newX, y: newY });
  };
  const handleClick = () => {
    setGifVisible(true);
    setTimeout(() => {
      setGifVisible(false);
    }, 2000); // Thời gian chờ để chạy GIF, đây là 1 giây (1000 milliseconds)
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {gifVisible ? (
        <div>
          <Image
            src="/0.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/0.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/0.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/0.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/0.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/1.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/0.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
          <Image
            src="/0.gif"
            alt="#"
            height={150}
            width={150}
            style={{
              position: "fixed",
              top: Math.random() * window.innerWidth * 0.8,
              left: Math.random() * window.innerHeight,
            }}
          />
        </div>
      ) : null}
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex">
        {oce ? (
          <div className={`${fontText.className} flex flex-col items-center`}>
            <p className={`text-2xl mb-6 flex items-center`}>
              Anh cũng nhớ Bông nhiều nhắmmmmmm
              <Image alt="#" src="/tim.gif" width={150} height={150} />
            </p>
            <div className="flex">
              <Image src="/test.gif" alt="#" height={200} width={200} />
              <Image src="/iu.gif" alt="#" height={200} width={200} />
            </div>
            <Button
              onClick={handleClick}
              className={`${fontText.className} border-2 border-blue-500 text-blue-500 rounded-lg w-32 h-10 text-xl`}
            >
              Yêu nhắm
            </Button>
          </div>
        ) : (
          <div className={`${fontText.className} flex flex-col items-center`}>
            <p className={`text-2xl mb-6`}>Em có nhớ anh hông ?</p>
            <Image src="/love.gif" alt="#" height={200} width={200} />
            <div className="flex justify-between w-full mt-4">
              <Button
                className={`${fontText.className} border-2 border-blue-500 text-blue-500 rounded-lg w-32 h-10 text-xl`}
                onClick={() => setOce(true)}
              >
                Nhớ nhắm
              </Button>
              <Button
                type="danger"
                style={{
                  position: "absolute",
                  top: position.y,
                  left: position.x,
                }}
                className={`${fontText.className} border-2 border-red-600 text-red-600 rounded-lg w-32 h-10 text-xl`}
                onClick={handleButtonClick}
              >
                Nhớ ít
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
