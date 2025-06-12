import React from "react";
import "./Nav.css";

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
          src="./public/A_mainview.png"
          className="w-full object-contain mb-8"
          alt="Main View"
        />
      </div>
      
      {/* Footer 區塊 */}
      <div className="relative flex justify-between items-end w-full px-8 pb-8">
        {/* 左側 Logo */}
        <img
          src="./public/A_producttag12.png"
          className="object-contain shrink-0 aspect-square w-[85px]"
        />

        {/* 中間版權文字 */}
        <div className="absolute left-1/2 -translate-x-1/2 text-base tracking-normal leading-8 text-white font-[590]">
          ©2025 WYGAMESTUDIO
        </div>

        {/* 右側 Logo 和社群按鈕 */}
        <div className="flex gap-4 items-center">
          <img
            src="./public/A_logo_white.png"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.48] w-[62px]"
          />
          <div className="nav-container !p-0 !gap-4">
            {/* Instagram */}
            <div className="flex overflow-hidden gap-4 justify-center items-center self-stretch px-3.5 my-auto rounded-2xl bg-zinc-900 h-[60px] w-[60px]">
              <img
                src="./public/A_community_ins.png"
                className="object-contain self-stretch my-auto aspect-[1.03] w-[33px]"
              />
            </div>
            {/* YouTube */}
            <div className="flex overflow-hidden gap-4 justify-center items-center self-stretch px-3.5 my-auto rounded-2xl bg-zinc-900 h-[60px] w-[60px]">
              <img
                src="./public/A_community_yt.png"
                className="object-contain self-stretch my-auto aspect-[1.03] w-[33px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
