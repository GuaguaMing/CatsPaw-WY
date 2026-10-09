import { useEffect } from 'react';
import { youtubeEmbed } from '../lib/asset';

// YouTube 影片彈窗：打開時才載入播放器，Esc 或點背景關閉
const VideoModal = ({ youtubeId, title, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label={`關閉${title}`} className="absolute -top-14 right-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-wax/30 bg-transparent text-wax hover:border-ember">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <iframe
          src={youtubeEmbed(youtubeId)}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="aspect-video w-full rounded-xl border-0 bg-black"
        />
      </div>
    </div>
  );
};

export default VideoModal;
