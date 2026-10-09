import { useState } from 'react';

// 先顯示封面，按下播放才載入影片（影片檔動輒數十 MB，不在進頁時下載）
const VideoPlayer = ({ src, poster, label, className = '' }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-[20px] bg-surface ${className}`}>
      {playing ? (
        <video src={src} controls autoPlay playsInline className="h-full w-full bg-black object-contain" />
      ) : (
        <>
          <img src={poster} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`播放${label}`}
              className="inline-flex h-[88px] w-[88px] items-center justify-center rounded-full bg-ember text-[#1a1008] transition-transform hover:scale-105"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <p className="t-caption text-lead">{label}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
