import React from 'react';
import '../index.css';

const Guide = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">遊戲教學</h1>
      <div>
        <h1 className="text-4xl font-bold mb-4">手把案件說明</h1>
        <ul className="text-lg">
          <li>搖桿操控角色左右移動</li>
          <li>B鍵向上跳躍</li>
          <li>X鍵爪擊</li>
          <li>A鍵吐蠟攻擊</li>
          <li>Y鍵與物件互動以及和其角色對話</li>
        </ul>
      </div>
      <img
        src={`${import.meta.env.BASE_URL}images/P3_001.png`}
        className="pt-20 -translate-x-4"
      />
      <img
        src={`${import.meta.env.BASE_URL}images/P3_002.png`}
        className="pt-20 -translate-x-4"
      />
      <img
        src={`${import.meta.env.BASE_URL}images/P3_003.png`}
        className="pt-20 -translate-x-4"
      />

      <div className="pt-20 w-full  max-w-[1440px] mx-auto flex flex-col items-center">
        <video
          src={`${import.meta.env.BASE_URL}videos/Cat's_Paw_HowToPlay.mp4`}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

    </div>


  );
};

export default Guide; 