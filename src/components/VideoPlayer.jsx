import { useState } from 'react';
import { youtubeEmbed } from '../lib/asset';

// 先顯示封面，按下播放才載入 YouTube 播放器（不在進頁時下載任何影片資源）
const VideoPlayer = ({ youtubeId, poster, label, className = '' }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-[20px] bg-surface ${className}`}>
      {playing ? (
        <iframe
          src={youtubeEmbed(youtubeId)}
          title={label}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="h-full w-full border-0"
        />
      ) : (
        <>
          <img
            src={poster ?? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
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
