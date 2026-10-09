import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { img, youtubeEmbed } from '../lib/asset';

const worldBeats = [
  { still: 'P1_001.webp', alt: '黑暗中浮現無數發光的眼睛', title: '人類滅絕之後', text: '這是其中一個平行世界。19 世紀初，人類已完全滅絕，只剩下大自然，與沉眠於南太平洋的邪神克蘇魯。' },
  { still: 'P1_003.webp', alt: '一隻巨大的手伸向貓', title: '影子醒了', text: '拉萊耶深處，一團影子受克蘇魯呼喚而生出意識，隨洋流漂上陸地。牠遇見的第一個生物，是貓。' },
  { still: 'P1_004.webp', alt: '貓瞪大的雙眼裡映著伸來的手', title: '碰觸即瘋狂', text: '長年受克蘇魯侵染，凡是被影子碰觸過的生物，都會逐漸精神混亂、發瘋。' },
  { still: 'P1_002.webp', alt: '空蕩長廊盡頭，一攤融化的蠟', title: '蠟燭工廠', text: '為了找出不受污染的靈魂，影子回到故鄉拉萊耶，建起一座蠟燭工廠，展開模擬實驗。' },
];

const features = [
  { title: '一切都是蠟', text: "吐蠟攻擊、吐蠟改變物件；角色與場景也融入蠟的概念。蠟，貫穿了整個 Cat's Paw。" },
  { title: '詭異的可愛', text: '懵懂純真的巴非，對比陰暗詭譎的蠟燭工廠。這份衝突感，驅使你一路往深處探索。' },
  { title: '處處是彩蛋', text: '生動的角色、藏著各種彩蛋的場景，等你親手挖掘、細細品味。' },
];

const explore = [
  { to: '/story', title: '故事', sub: '影子大人的實驗筆記', image: 'P1_005.webp', cover: true },
  { to: '/character', title: '角色', sub: '工廠裡的貓蠟怪們', image: 'p4_parfait_walk.webp' },
  { to: '/guide', title: '教學', sub: '吐蠟、爪擊、跳躍', image: 'P3_001.webp' },
];

const Arrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-ember">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// 預告片：按下才載入，Esc 或點背景關閉
const TrailerModal = ({ onClose }) => {
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
    <div role="dialog" aria-modal="true" aria-label="Cat's Paw 預告片" className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label="關閉預告片" className="absolute -top-14 right-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-wax/30 bg-transparent text-wax hover:border-ember">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <iframe
          src={youtubeEmbed('MyuN-mGBT7A')}
          title="Cat's Paw 預告片"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="aspect-video w-full rounded-xl border-0 bg-black"
        />
      </div>
    </div>
  );
};

const Home = () => {
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[min(760px,88vh)] items-end overflow-hidden">
        <img
          src={img('A_mainview.webp')}
          alt="巴非站在影子大人的祭壇前，頭上的燭火照亮黑暗"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0D0B0C_0%,rgba(13,11,12,0.6)_32%,transparent_62%)]" />
        <Reveal className="page-container relative flex flex-col gap-5 pb-20 lg:pb-24">
          <p className="t-overline">Wywy Studio 出品</p>
          <h1 className="m-0 font-latin text-[clamp(56px,8vw,120px)] font-bold leading-none tracking-[0.04em]">Cat&apos;s Paw</h1>
          <p className="m-0 font-serif text-[clamp(20px,1.8vw,26px)] font-semibold leading-relaxed text-lead">
            好奇心能殺死一隻貓——<br />但巴非可以讀檔重來。
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <button type="button" className="btn-primary" onClick={() => setTrailerOpen(true)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" aria-hidden="true"><path d="M7 4.5v15l12-7.5z" /></svg>
              觀看預告
            </button>
            <Link to="/story" className="btn-ghost">閱讀故事</Link>
          </div>
        </Reveal>
      </section>

      {/* 世界觀 */}
      <section className="page-container pb-16 pt-24 lg:pt-32">
        <Reveal className="mb-20 flex flex-wrap items-end justify-between gap-6 lg:mb-24">
          <div className="flex flex-col gap-4">
            <p className="t-overline">World</p>
            <h2 className="t-h1">沉在海底的拉萊耶</h2>
          </div>
          <img src={img('P1_NoEntry.webp')} alt="" loading="lazy" className="w-20 opacity-90 md:w-28" />
        </Reveal>

        <div className="flex flex-col gap-20 lg:gap-28">
          {worldBeats.map((beat, i) => (
            <Reveal key={beat.title} className={`flex flex-col items-center gap-8 md:gap-16 ${i % 2 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <img src={img(beat.still)} alt={beat.alt} loading="lazy" decoding="async" className="aspect-video w-full rounded-xl object-cover md:w-[56%]" />
              <div className="flex w-full flex-col gap-4 md:flex-1">
                <span className="font-latin text-sm tracking-[0.2em] text-ember">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="t-h2">{beat.title}</h3>
                <p className="t-body">{beat.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal className="flex flex-col items-center gap-8 text-center">
            <img src={img('P1_005.webp')} alt="From now on, I'm your master." loading="lazy" className="aspect-video w-full max-w-[760px] rounded-xl object-cover" />
            <p className="t-h1">實驗，開始了。</p>
          </Reveal>
        </div>
      </section>

      {/* 遊戲簡介 */}
      <section
        className="mt-16 bg-cover bg-[center_30%]"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(13,11,12,.92) 0%, rgba(13,11,12,.7) 55%, rgba(13,11,12,.35) 100%), url(${img('A_Cat_s_Paw_bg.webp')})` }}
      >
        <div className="page-container flex flex-wrap items-center justify-between gap-12 py-24 lg:py-32">
          <Reveal className="flex flex-[1_1_420px] flex-col gap-5">
            <p className="t-overline">About</p>
            <h2 className="t-h1">巴非想逃。</h2>
            <p className="t-lead max-w-[26em]">貓蠟怪巴非一醒來，就被安排到蠟燭工廠上班。徘徊的瑕疵品、危險的謎之生物、處處詭譎的環境——巴非開始想逃。</p>
          </Reveal>
          <Reveal delay={120} className="mx-auto">
            <img src={img('p4_parfait_idle.webp')} alt="巴非待機動畫" loading="lazy" className="h-[300px] w-auto object-contain lg:h-[380px]" />
          </Reveal>
        </div>
      </section>

      {/* 遊戲特色 */}
      <section className="page-container py-24 lg:py-32">
        <Reveal className="mb-14 flex flex-col gap-4">
          <p className="t-overline">Features</p>
          <h2 className="t-h1">遊戲特色</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className="card flex flex-col gap-4 px-8 py-9">
              <span className="font-latin text-sm tracking-[0.2em] text-ember">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="t-h2">{f.title}</h3>
              <p className="t-body">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 延伸閱讀 */}
      <section className="page-container pb-24 lg:pb-32">
        <Reveal className="mb-14 flex flex-col gap-4">
          <p className="t-overline">Explore</p>
          <h2 className="t-h1">走進工廠深處</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {explore.map((card, i) => (
            <Reveal key={card.to} delay={i * 80}>
              <Link to={card.to} className="card flex h-full flex-col overflow-hidden text-wax no-underline transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-ember/50">
                <div className="stage aspect-[4/3] rounded-none">
                  <img
                    src={img(card.image)}
                    alt=""
                    loading="lazy"
                    className={card.cover ? 'h-full w-full object-cover' : 'h-[78%] w-auto max-w-[78%] object-contain'}
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-7 pb-7 pt-6">
                  <div className="flex flex-col gap-1">
                    <span className="t-h2">{card.title}</span>
                    <span className="t-caption">{card.sub}</span>
                  </div>
                  <Arrow />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {trailerOpen && <TrailerModal onClose={() => setTrailerOpen(false)} />}
    </>
  );
};

export default Home;
