import React from "react";
import "./Nav.css";
import SquareLiquidButton from './SquareLiquidButton';

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 上方主視圖容器 */}
      <div className="relative w-full">
        {/* 漸層遮罩 */}
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, #000 0%, transparent 90px, transparent calc(100% - 90px), #000 100%),
              linear-gradient(to bottom, #000 0%, transparent 90px, transparent calc(100% - 90px), #000 100%)
            `
          }}
        />
        {/* 主視圖圖片 */}
        <img
          src={`${import.meta.env.BASE_URL}images/A_mainview.png`}
          className="w-full object-contain mb-8"
          alt="Main View"
        />
      </div>

      {/* Footer 區塊 */}
      <div className="relative flex justify-between items-end w-full px-8 pb-8">
        {/* 左側 Logo */}
        <img
          src={`${import.meta.env.BASE_URL}images/A_producttag12.png`}
          className="object-contain shrink-0 aspect-square w-[85px]"
          alt="Product Tag"
        />

        {/* 中間版權文字 */}
        <div className="absolute left-1/2 -translate-x-1/2 text-base tracking-normal leading-8 text-white font-[590]">
          ©2025 WYGAMESTUDIO
        </div>

        {/* 右側 Logo 和社群按鈕 */}
        <div className="flex gap-4 items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/A_logo_white.png`}
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.48] w-[62px]"
            alt="Logo"
          />
          <div className="nav-container !p-0 !gap-4">
            {/* Instagram 按鈕 */}
            <a
              href="https://www.instagram.com/wywy_studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SquareLiquidButton>
                <img
                  src={`${import.meta.env.BASE_URL}images/A_community_ins.png`}
                  className="w-[33px] h-[33px] object-contain"
                  alt="Instagram"
                />
              </SquareLiquidButton>
            </a>

            {/* YouTube 按鈕 */}
            <a
              href="https://www.youtube.com/@wywy_studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SquareLiquidButton>
                <img
                  src={`${import.meta.env.BASE_URL}images/A_community_yt.png`}
                  className="w-[33px] h-[33px] object-contain"
                  alt="YouTube"
                />
              </SquareLiquidButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
